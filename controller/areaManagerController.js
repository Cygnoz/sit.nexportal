
const User = require("../database/model/user");
const AreaManager = require("../database/model/areaManager");
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
      role: "Area Manager",
    });
    return newUser.save();
  }
  
  async function createAreaManager(data, user) {
    const newAreaManager = new AreaManager({...data, user});
    return newAreaManager.save();
  }
  
  exports.addAreaManager = async (req, res, next) => {
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
      const newAreaManager = await createAreaManager(data, newUser._id);
  
      logOperation(req, "Success", newAreaManager._id);
      next()
      return res.status(201).json({
        message: "Area Manager added successfully",
        userId: newUser._id,
        areaManagerId: newAreaManager._id,
      });
    } catch (error) {

      logOperation(req, "Failed");
       next();
      console.error("Unexpected error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

  exports.getAreaManager = async (req, res) => {
    try {
      const { id } = req.params;
  
      const areaManager = await AreaManager.findById(id).populate('user', 'userName phoneNo').exec();
      
      if (!areaManager) {
        return res.status(404).json({ message: "Area Manager not found" });
      }
  
      res.status(200).json(areaManager);
    } catch (error) {
      console.error("Error fetching Area Manager:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  exports.getAllAreaManager = async (req, res) => {
      try {
        const areaManager = await AreaManager.find({}).populate('user', 'userName phoneNo');
    
        if (areaManager.length === 0) {
          return res.status(404).json({ message: "No Area Manager found" });
        }
    
        res.status(200).json({ areaManager });
      } catch (error) {
        console.error("Error fetching all Area Manager:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    };


    exports.editAreaManager = async (req, res,next) => {
      try {
        const { id } = req.params;
        const data = cleanData(req.body);
        // Fetch the existing document to get the user field
    const existingAreaManager = await AreaManager.findById(id);
    if (!existingAreaManager) {
      return res.status(404).json({ message: "Area Manager not found" });
    }

    // Extract the user field (ObjectId)
    const existingUserId = existingAreaManager.user;


        
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
        const updatedAreaManager = await AreaManager.findByIdAndUpdate(
          id,
          { $set: data },
          { new: true, runValidators: true }
        );
    
        if (!updatedAreaManager) {
          return res.status(404).json({ message: "Area Manager not found" });
        }
    
        res.status(200).json({
          message: "Area Manager updated successfully"
        });
        logOperation(req, "Success", updatedAreaManager._id);
      next()
      } catch (error) {
        console.error("Error editing Area Manager:", error);
        res.status(500).json({ message: "Internal server error" });
        logOperation(req, "Failed");
       next();
      }
    };
    
    

