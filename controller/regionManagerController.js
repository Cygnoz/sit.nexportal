
const User = require("../database/model/user");
const RegionManager = require("../database/model/regionManager");
const bcrypt = require("bcrypt");

// Validation utility function
const validateRequiredFields = (requiredFields, data) => {
  const missingFields = requiredFields.filter(field => !data[field]);
  return missingFields.length === 0 
    ? null 
    : `Missing required fields: ${missingFields.join(", ")}`;
};

// Duplicate check utility function
const checkDuplicateUser = async (fullName, loginEmail, phone) => {
  const existingUser = await User.findOne({
    $or: [
      { userName: fullName },
      { email: loginEmail },
      { phoneNo: phone }
    ]
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
  
  async function createRegionManager(data, userId) {
    const newRegionManager = new RegionManager({...data, userId});
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
      if (typeof data.commission !== "number" || data.commission < 0 || data.commission > 100) {
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
      const { areaId } = req.params;
  
      const area = await Area.findById(areaId).populate('region', 'regionCode regionName').exec();
      
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }
  
      res.status(200).json(area);
    } catch (error) {
      console.error("Error fetching area:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  exports.getAllRegionManager = async (req, res) => {
      try {
        const areas = await Area.find({}).populate('region', 'regionCode regionName');
    
        if (areas.length === 0) {
          return res.status(404).json({ message: "No areas found" });
        }
    
        res.status(200).json({ message: "Areas retrieved successfully", areas });
      } catch (error) {
        console.error("Error fetching all areas:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    };


