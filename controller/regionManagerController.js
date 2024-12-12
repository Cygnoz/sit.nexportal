
const User = require("../database/model/user");
const Region = require("../database/model/region");
const Commission = require("../database/model/commission");
const RegionManager = require("../database/model/regionManager");
const bcrypt = require("bcrypt");
const crypto = require('crypto');
const { ObjectId } = require('mongoose').Types;

const key = Buffer.from(process.env.ENCRYPTION_KEY, 'utf8'); 
const iv = Buffer.from(process.env.ENCRYPTION_IV, 'utf8'); 


//Encrpytion 
function encrypt(text) {
  try {
      const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
      let encrypted = cipher.update(text, 'utf8', 'hex');
      encrypted += cipher.final('hex');

      const authTag = cipher.getAuthTag().toString('hex'); // Get authentication tag

      return `${iv.toString('hex')}:${encrypted}:${authTag}`; // Return IV, encrypted text, and tag
  } catch (error) {
      console.error("Encryption error:", error);
      throw error;
  }
}


//Decrpytion
function decrypt(encryptedText) {
  try {
      // Split the encrypted text to get the IV, encrypted data, and authentication tag
      const [ivHex, encryptedData, authTagHex] = encryptedText.split(':');
      const iv = Buffer.from(ivHex, 'hex');
      const authTag = Buffer.from(authTagHex, 'hex');

      // Create the decipher with the algorithm, key, and IV
      const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
      decipher.setAuthTag(authTag); // Set the authentication tag

      let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
  } catch (error) {
      console.error("Decryption error:", error);
      throw error;
  }
}

// A function to encrypt sensitive fields if they exist
const encryptSensitiveFields = (data) => {
  const encryptIfExists = (field) => field ? encrypt(field) : field;

  data.adhaarNo = encryptIfExists(data.adhaarNo);
  data.panNo = encryptIfExists(data.panNo);
  if (data.bankDetails) {
    data.bankDetails.bankAccountNo = encryptIfExists(data.bankDetails.bankAccountNo);
  }

  return data;
};


// Validation utility function
const validateRequiredFields = (requiredFields, data) => {
  const missingFields = requiredFields.filter(field => !data[field]);
  return missingFields.length === 0 
    ? null 
    : `Missing required fields: ${missingFields.join(", ")}`;
};



// Duplicate check utility function

const checkDuplicateUser = async (userName, email, phoneNo, excludeId) => {
  const existingUser = await User.findOne({
    $and: [
      { _id: { $ne: excludeId } }, // Exclude the current document
      {
        $or: [
          { userName },
          { email },
          { phoneNo },
        ],
      },
    ],
  });

  if (!existingUser) return null;

  const duplicateMessages = [];
  if (existingUser.userName === userName)
    duplicateMessages.push("Full name already exists");
  if (existingUser.email === email)
    duplicateMessages.push("Login email already exists");
  if (existingUser.phoneNo === phoneNo)
    duplicateMessages.push("Phone number already exists");

  return duplicateMessages.join(". ");
};


// Logging utility function
const logOperation = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
  
    if (operationId) {
      log.operationId = operationId;
    }
  
    req.user = log;
  };

  function cleanData(data) {
    const cleanData = (value) => (value === null || value === undefined || value === "" || value === 0 ? undefined : value);
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = cleanData(data[key]);
      return acc;
    }, {});
  }

  async function createUser(data) {
    const { password, ...rest } = data; // Extract password and the rest of the data
    const hashedPassword = await bcrypt.hash(password, 10);

    // employee id
    let nextId = 1;
    const lastUser = await User.findOne().sort({ _id: -1 }); // Sort by creation date to find the last one
    if (lastUser) {
      const lastId = parseInt(lastUser.employeeId.slice(6));
      // Extract the numeric part from the customerID
      nextId = lastId + 1; // Increment the last numeric part
    }    
    const employeeId = `EMPID-${nextId.toString().padStart(4, '0')}`;
  
    const newUser = new User({
      ...rest, // Spread other properties from data
      employeeId,
      password: hashedPassword, // Use hashed password
      role: "Region Manager", // Set default role
    });
    return newUser.save();
  }
  
  
  async function createRegionManager(data, user) {
    const newRegionManager = new RegionManager({...data, user});
    return newRegionManager.save();
  }

  const dataExist = async (organizationId) => {
    const [organizationExists, taxExists, currencyExists, allSupplier ,settings] = await Promise.all([
      Organization.findOne({ organizationId },{ timeZoneExp: 1, dateFormatExp: 1, dateSplit: 1, organizationCountry: 1 }),
      Tax.findOne({ organizationId },{ taxType: 1 }),
      Currency.find({ organizationId }, { currencyCode: 1, _id: 0 }),
      Supplier.find({ organizationId }),
      Settings.find({ organizationId },{ duplicateSupplierDisplayName: 1, duplicateSupplierEmail: 1, duplicateSupplierMobile: 1 })
    ]);
    return { organizationExists, taxExists, currencyExists, allSupplier , settings };
  };
  function validateExsistance(organizationExists, taxExists, currencyExists, res) {
    if (!organizationExists) {
      res.status(404).json({ message: "Organization not found" });
      return false;
    }
    if (!taxExists) {
      res.status(404).json({ message: "Tax not found" });
      return false;
    }
    if (!currencyExists.length) {
      res.status(404).json({ message: "Currency not found" });
      return false;
    }
    return true;
  }
  exports.addRegionManager = async (req, res, next) => {
    try {
      // Destructure and validate
      let data = cleanData(req.body);
    //   const data = req.body;
    
      const requiredFields = ["userName", "phoneNo", "email", "password"];
      const validationError = validateRequiredFields(requiredFields, data);
      // if (!validateExsistance(organizationExists, taxExists, currencyExists, res)) return;     

      if (validationError) {
        return res.status(400).json({ message: validationError });
      }
      
  
      // Check for duplicates
      const duplicateCheck = await checkDuplicateUser(data.userName, data.email, data.phoneNo);
      if (duplicateCheck) {
        return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
      }
  
      // Create user
      const newUser = await createUser(data);
      
      // Encrypt sensitive fields
    data = encryptSensitiveFields(data);



       // Create region manager
      const newRegionManager = await createRegionManager(data, newUser._id);
  
      logOperation(req, "Successfully", newRegionManager._id);
      next()
      return res.status(201).json({
        message: "Region Manager added successfully",
        userId: newUser._id,
        regionManagerId: newRegionManager._id,
      });
    } catch (error) {
      
      logOperation(req, "Failed");
       next();
      console.error("Unexpected error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

  exports.getRegionManager = async (req, res) => {
    try {
      const { id } = req.params;
  
      const regionManager = await RegionManager.findById(id).populate([
        { path: 'user', select: 'userName phoneNo userImage  employeeId email' },
        { path: 'region', select: 'regionName regionCode' },
        { path: 'commission', select: 'profileName' },
      ]);
  
      if (!regionManager) {
        return res.status(404).json({ message: "Region Manager not found" });
      }
  
      const decryptField = (field) => field ? decrypt(field) : field;
  
      regionManager.adhaarNo = decryptField(regionManager.adhaarNo);
      regionManager.panNo = decryptField(regionManager.panNo);
      if (regionManager.bankDetails) {
        regionManager.bankDetails.bankAccountNo = decryptField(regionManager.bankDetails.bankAccountNo);
      }
  
      res.status(200).json(regionManager);
    } catch (error) {
      console.error("Error fetching Region Manager:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  
  
  exports.getAllRegionManager = async (req, res) => {
    try {
      const regionManager = await RegionManager.find({}).populate([
        { path: 'user', select: 'userName phoneNo userImage email' },
        { path: 'region', select: 'regionName' },
        { path: 'commission', select: 'profileName' },
      ]);
  
      if (regionManager.length === 0) {
        return res.status(404).json({ message: "No Region Manager found" });
      }
  
      res.status(200).json({ regionManager });
    } catch (error) {
      console.error("Error fetching all Region Managers:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  


    exports.editRegionManager = async (req, res,next) => {
      try {
        const { id } = req.params;
        let data = cleanData(req.body);
        // Fetch the existing document to get the user field
    const existingRegionManager = await RegionManager.findById(id);
    if (!existingRegionManager) {
      return res.status(404).json({ message: "Region Manager not found" });
    }

    // Extract the user field (ObjectId)
    const existingUserId = existingRegionManager.user;

  
        
        // Validate required fields
        const requiredFields = ["userName", "phoneNo", "email"];
        const validationError = validateRequiredFields(requiredFields, data);
    
        if (validationError) {
          return res.status(400).json({ message: validationError });
        }
    
        // Check for duplicate user details, excluding the current document
        const duplicateCheck = await checkDuplicateUser(data.userName, data.email, data.phoneNo, existingUserId);
        if (duplicateCheck) {
          return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
        }
        
     // Encrypt sensitive fields
     data = encryptSensitiveFields(data);

        const user = await User.findById(existingUserId);
        Object.assign(user, data);
        await user.save();
       
        Object.assign(existingRegionManager, data);
        const updatedRegionManager = await existingRegionManager.save();
    
        if (!updatedRegionManager) {
          return res.status(404).json({ message: "Region Manager not found" });
        }
    
        res.status(200).json({
          message: "Region Manager updated successfully"
        });
        logOperation(req, "Successfully", updatedRegionManager._id);
      next()
      } catch (error) {
        console.error("Error editing Region Manager:", error);
        res.status(500).json({ message: "Internal server error" });
        logOperation(req, "Failed");
       next();
      }
    };
    
    




