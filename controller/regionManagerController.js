
const User = require("../database/model/user");
const RegionManager = require("../database/model/regionManager");
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

const checkDuplicateUser = async (fullName, loginEmail, phone, excludeId) => {
  const existingUser = await User.findOne({
    $and: [
      { _id: { $ne: excludeId } }, // Exclude the current document
      {
        $or: [
          { userName: fullName },
          { email: loginEmail },
          { phoneNo: phone },
        ],
      },
    ],
  });

  if (!existingUser) return null;

  const duplicateMessages = [];
  if (existingUser.userName === fullName)
    duplicateMessages.push("Full name already exists");
  if (existingUser.email === loginEmail)
    duplicateMessages.push("Login email already exists");
  if (existingUser.phoneNo === phone)
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
    const { image, fullName, loginEmail, password, phone } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userImage: image,
      userName: fullName,
      email: loginEmail,
      password: hashedPassword,
      phoneNo: phone,
      role: "Region Manager",
    });
    return newUser.save();
  }
  
  async function createRegionManager(data, user) {
    const newRegionManager = new RegionManager({...data, user});
    return newRegionManager.save();
  }
  
  exports.addRegionManager = async (req, res, next) => {
    try {
      // Destructure and validate
      const data = cleanData(req.body);
    //   const data = req.body;
      const requiredFields = ["fullName", "phone", "loginEmail", "password"];
      const validationError = validateRequiredFields(requiredFields, data);
      if (validationError) {
        return res.status(400).json({ message: validationError });
      }
      if (data.commission !== undefined && (typeof data.commission !== "number" || data.commission < 0 || data.commission > 100)) {
        return res.status(400).json({ message: "Invalid commission value" });
      }
      
  
      // Check for duplicates
      const duplicateCheck = await checkDuplicateUser(data.fullName, data.loginEmail, data.phone);
      if (duplicateCheck) {
        return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
      }
  
      // Create user
      const newUser = await createUser(data);
  
      // Create region manager
      const newRegionManager = await createRegionManager(data, newUser._id);
  
      logOperation(req, "Success", newRegionManager._id);
      next()
      return res.status(201).json({
        message: "Region Manager added successfully",
        userId: newUser._id,
        regionManagerId: newRegionManager._id,
      });
    } catch (error) {
      if (error instanceof UserCreationError) {
        console.error("User creation failed:", error);
        return res.status(500).json({ message: "Error creating user" });
      }
      if (error instanceof RegionManagerCreationError) {
        console.error("Region manager creation failed:", error);
        return res.status(500).json({ message: "Error creating region manager" });
      }
      logOperation(req, "Failed");
       next();
      console.error("Unexpected error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

  exports.getRegionManager = async (req, res) => {
    try {
      const { id } = req.params;
  
      const regionManager = await RegionManager.findById(id).populate('user', 'userName phoneNo').exec();
      
      if (!regionManager) {
        return res.status(404).json({ message: "Region Manager not found" });
      }
  
      res.status(200).json(regionManager);
    } catch (error) {
      console.error("Error fetching Region Manager:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  exports.getAllRegionManager = async (req, res) => {
      try {
        const regionManager = await RegionManager.find({}).populate('user', 'userName phoneNo');
    
        if (regionManager.length === 0) {
          return res.status(404).json({ message: "No Region Manager found" });
        }
    
        res.status(200).json({ regionManager });
      } catch (error) {
        console.error("Error fetching all Region Manager:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    };


    exports.editRegionManager = async (req, res,next) => {
      try {
        const { id } = req.params;
        const data = cleanData(req.body);
        // Fetch the existing document to get the user field
    const existingRegionManager = await RegionManager.findById(id);
    if (!existingRegionManager) {
      return res.status(404).json({ message: "Region Manager not found" });
    }

    // Extract the user field (ObjectId)
    const existingUserId = existingRegionManager.user;


        
        // Validate required fields
        const requiredFields = ["fullName", "phone", "loginEmail"];
        const validationError = validateRequiredFields(requiredFields, data);
    
        if (validationError) {
          return res.status(400).json({ message: validationError });
        }
    
        // Check for duplicate user details, excluding the current document
        const duplicateCheck = await checkDuplicateUser(data.fullName, data.loginEmail, data.phone, existingUserId);
        if (duplicateCheck) {
          return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
        }
    
        // Validate commission value if provided
        if (data.commission !== undefined && (typeof data.commission !== "number" || data.commission < 0 || data.commission > 100)) {
          return res.status(400).json({ message: "Invalid commission value" });
        }
        console.log("RM" , id)
        console.log("userId" , existingUserId)

        const updatedUser = await User.findByIdAndUpdate(
          new ObjectId(existingUserId), // Use 'new' when creating an ObjectId
          {
            $set: {
              userImage: data.image,       // Update userImage with data.image
              userName: data.fullName,     // Update userName with data.fullName
              email: data.loginEmail,      // Update email with data.loginEmail
            },
          },
          { new: true, runValidators: true } // Return the updated document and apply validation
        );
        // Find and update the region manager
        const updatedRegionManager = await RegionManager.findByIdAndUpdate(
          id,
          { $set: data },
          { new: true, runValidators: true }
        );
    
        if (!updatedRegionManager) {
          return res.status(404).json({ message: "Region Manager not found" });
        }
    
        res.status(200).json({
          message: "Region Manager updated successfully"
        });
        logOperation(req, "Success", updatedRegionManager._id);
      next()
      } catch (error) {
        console.error("Error editing Region Manager:", error);
        res.status(500).json({ message: "Internal server error" });
        logOperation(req, "Failed");
       next();
      }
    };
    
    

