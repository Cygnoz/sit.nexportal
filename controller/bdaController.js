
const User = require("../database/model/user");
const Bda = require("../database/model/bda");
const Region = require("../database/model/region");
const Area = require("../database/model/area");
const Commission = require("../database/model/commission");
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
      role: "BDA", // Set default role
    });
    return newUser.save();
  }
  
  async function createBda(data, user) {
    const newBda = new Bda({...data, user});
    return newBda.save();
  }
  
  exports.addBda = async (req, res, next) => {
    try {
      // Destructure and validate
      const data = cleanData(req.body);
    //   const data = req.body;
    const requiredFields = ["userName", "phoneNo", "email", "password"];
    const validationError = validateRequiredFields(requiredFields, data);
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
      const newBda = await createBda(data, newUser._id);
  
      logOperation(req, "Successfully", newBda._id);
      next()
      return res.status(201).json({
        message: "BDA added successfully",
        userId: newUser._id,
        bdaId: newBda._id,
      });
    } catch (error) {

      logOperation(req, "Failed");
       next();
      console.error("Unexpected error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

  exports.getBda = async (req, res) => {
    try {
      const { id } = req.params;
  
      const bda = await Bda.findById(id).populate([
        { path: 'user', select: 'userName phoneNo userImage email' },
        { path: 'region', select: 'regionName' },
        { path: 'area', select: 'areaName' },
        { path: 'commission', select: 'profileName' },
      ]);
      if (!bda) {
        return res.status(404).json({ message: "BDA not found" });
      }
  
      res.status(200).json(bda);
    } catch (error) {
      console.error("Error fetching BDAr:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  exports.getAllBda = async (req, res) => {
      try {
        const bda = await Bda.find({}).populate([
          { path: 'user', select: 'userName phoneNo userImage email'  },
          { path: 'region', select: 'regionName' },
          { path: 'area', select: 'areaName' },
          { path: 'commission', select: 'profileName' },
        ]);
        if (bda.length === 0) {
          return res.status(404).json({ message: "No BDA found" });
        }
    
        res.status(200).json({ bda });
      } catch (error) {
        console.error("Error fetching all Bda:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    };


    exports.editBda = async (req, res,next) => {
      try {
        const { id } = req.params;
        const data = cleanData(req.body);
        // Fetch the existing document to get the user field
    const existingBda = await Bda.findById(id);
    if (!existingBda) {
      return res.status(404).json({ message: "BDA not found" });
    }

    // Extract the user field (ObjectId)
    const existingUserId = existingBda.user;


        
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

        Object.assign(existingBda, data);
        const updatedBda = await existingBda.save();
    
        if (!updatedBda) {
          return res.status(404).json({ message: "BDA not found" });
        }
    
        res.status(200).json({
          message: "BDA updated successfully"
        });
        logOperation(req, "Successfully", updatedBda._id);
      next()
      } catch (error) {
        console.error("Error editing BDA:", error);
        res.status(500).json({ message: "Internal server error" });
        logOperation(req, "Failed");
       next();
      }
    };
    
    

