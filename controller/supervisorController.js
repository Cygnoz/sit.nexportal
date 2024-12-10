
const User = require("../database/model/user");
const Region = require("../database/model/region");
const Commission = require("../database/model/commission");
const Supervisor = require("../database/model/supervisor");
const bcrypt = require("bcrypt");
const { ObjectId } = require('mongoose').Types;

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
    const newUser = new User({
      ...rest, // Spread other properties from data
      password: hashedPassword, // Use hashed password
      role: "Supervisor", // Set default role
    });
    return newUser.save();
  }
  
  
  async function createSupervisor(data, user) {
    const newSupervisor = new Supervisor({...data, user});
    return newSupervisor.save();
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
  exports.addSupervisor = async (req, res, next) => {
    try {
      // Destructure and validate
      const data = cleanData(req.body);
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
  
      // Create region manager
      const newSupervisor = await createSupervisor(data, newUser._id);
  
      logOperation(req, "Successfully", newSupervisor._id);
      next()
      return res.status(201).json({
        message: "Supervisor added successfully",
        userId: newUser._id,
        Supervisor: newSupervisor._id,
      });
    } catch (error) {
      
      logOperation(req, "Failed");
       next();
      console.error("Unexpected error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

  exports.getSupervisor = async (req, res) => {
    try {
      const { id } = req.params;
  
      const supervisor = await Supervisor.findById(id).populate([
        { path: 'user', select: 'userName phoneNo userImage email' },
        { path: 'region', select: 'regionName' },
        { path: 'commission', select: 'profileName' },
      ]);
  
      if (!supervisor) {
        return res.status(404).json({ message: "Supervisor not found" });
      }
  
      res.status(200).json(supervisor);
    } catch (error) {
      console.error("Error fetching supervisor:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  
  exports.getAllSupervisor = async (req, res) => {
    try {
      const supervisor = await Supervisor.find({}).populate([
        { path: 'user', select: 'userName phoneNo userImage email' },
        { path: 'region', select: 'regionName' },
        { path: 'commission', select: 'profileName' },
      ]);
  
      if (supervisor.length === 0) {
        return res.status(404).json({ message: "No supervisor found" });
      }
  
      res.status(200).json({ supervisor });
    } catch (error) {
      console.error("Error fetching all supervisor:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  


    exports.editSupervisor = async (req, res,next) => {
      try {
        const { id } = req.params;
        const data = cleanData(req.body);
        // Fetch the existing document to get the user field
    const existingSupervisor = await Supervisor.findById(id);
    if (!existingSupervisor) {
      return res.status(404).json({ message: "Supervisor not found" });
    }

    // Extract the user field (ObjectId)
    const existingUserId = existingSupervisor.user;

  
        
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
    
        const user = await User.findById(existingUserId);
        Object.assign(user, data);
        await user.save();
       
        Object.assign(existingSupervisor, data);
        const updatedSupervisor = await existingSupervisor.save();
    
        if (!updatedSupervisor) {
          return res.status(404).json({ message: "Supervisor not found" });
        }
    
        res.status(200).json({
          message: "Supervisor updated successfully"
        });
        logOperation(req, "Successfully", updatedSupervisor._id);
      next()
      } catch (error) {
        console.error("Error editing Supervisor:", error);
        res.status(500).json({ message: "Internal server error" });
        logOperation(req, "Failed");
       next();
      }
    };
    
    




