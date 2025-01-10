const User = require("../database/model/user");
const Leads = require("../database/model/leads")
const Region = require("../database/model/region");
const Area = require("../database/model/area");
const Commission = require("../database/model/commission");
const AreaManager = require("../database/model/areaManager");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { ObjectId } = require("mongoose").Types;
const nodemailer = require("nodemailer");
const RegionManager = require("../database/model/regionManager");
const filterByRole = require("../services/filterByRole");
const regionManager = require("../database/model/regionManager");

const key = Buffer.from(process.env.ENCRYPTION_KEY, "utf8");
const iv = Buffer.from(process.env.ENCRYPTION_IV, "utf8");

//Encrpytion
function encrypt(text) {
  try {
    const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    const authTag = cipher.getAuthTag().toString("hex"); // Get authentication tag

    return `${iv.toString("hex")}:${encrypted}:${authTag}`; // Return IV, encrypted text, and tag
  } catch (error) {
    console.error("Encryption error:", error);
    throw error;
  }
}

//Decrpytion
function decrypt(encryptedText) {
  try {
    // Split the encrypted text to get the IV, encrypted data, and authentication tag
    const [ivHex, encryptedData, authTagHex] = encryptedText.split(":");
    const iv = Buffer.from(ivHex, "hex");
    const authTag = Buffer.from(authTagHex, "hex");

    // Create the decipher with the algorithm, key, and IV
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag); // Set the authentication tag

    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    throw error;
  }
}

// A function to encrypt sensitive fields if they exist
const encryptSensitiveFields = (data) => {
  const encryptIfExists = (field) => (field ? encrypt(field) : field);

  data.adhaarNo = encryptIfExists(data.adhaarNo);
  data.panNo = encryptIfExists(data.panNo);
  if (data.bankDetails) {
    data.bankDetails.bankAccountNo = encryptIfExists(
      data.bankDetails.bankAccountNo
    );
  }

  return data;
};

// Validation utility function
const validateRequiredFields = (requiredFields, data) => {
  const missingFields = requiredFields.filter((field) => !data[field]);
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
        $or: [{ userName }, { email }, { phoneNo }],
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
  const cleanData = (value) =>
    value === null || value === undefined || value === "" || value === 0
      ? undefined
      : value;
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
  const employeeId = `EMPID-${nextId.toString().padStart(4, "0")}`;

  const newUser = new User({
    ...rest, // Spread other properties from data
    employeeId,
    password: hashedPassword, // Use hashed password
    role: "Area Manager", // Set default role
  });
  return newUser.save();
}

async function createAreaManager(data, user) {
  const newAreaManager = new AreaManager({ ...data, user });
  return newAreaManager.save();
}

exports.addAreaManager = async (req, res, next) => {
  try {
    // Destructure and validate
    let data = cleanData(req.body);
    //   const data = req.body;
    const requiredFields = ["userName", "phoneNo", "email", "password"];
    const validationError = validateRequiredFields(requiredFields, data);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    // Check for duplicates
    const duplicateCheck = await checkDuplicateUser(
      data.userName,
      data.email,
      data.phoneNo
    );
    if (duplicateCheck) {
      return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
    }

    const existingAreaManager = await AreaManager.findOne({ area: data.area });
        if (existingAreaManager) {
          return res.status(400).json({ message: "Area is already assigned to another Area Manager. Try adding another Area." });
        }
         const [regionManager] = await Promise.all([
                  RegionManager.findOne({ region: data.region })
                ]);
                
                // Send specific error responses based on missing data
                if (!regionManager) {
                  return res.status(404).json({ message: "Region Manager not found for the provided region." });
                }
    // const emailSent = await sendCredentialsEmail(data.email, data.password,data.userName);

    // if (!emailSent) {
    //   return res
    //     .status(500)
    //     .json({ success: false, message: 'Failed to send login credentials email' });
    // }

    // Create user
    const newUser = await createUser(data);

    // Encrypt sensitive fields
    data = encryptSensitiveFields(data);

    data.status = "Active";
    // Create region manager
    const newAreaManager = await createAreaManager(data, newUser._id);

    logOperation(req, "Successfully", newAreaManager._id);
    next();
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

exports.addAreaManagerCheck = async (req, res) => {
  try {
    const {regionId , areaId } = req.body
    
    const [regionManager] = await Promise.all([
      RegionManager.findOne({ region: regionId })
    ]);
    
    // Send specific error responses based on missing data
    if (!regionManager) {
      return res.status(404).json({ message: "Region Manager not found for the provided region." });
    }
    const existingAreaManager = await AreaManager.findOne({ area: areaId });
        if (existingAreaManager) {
          return res.status(400).json({ message: "Area is already assigned to another Area Manager. Try adding another Area." });
        }
    return res.status(201).json({
      message: "success"
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAreaManager = async (req, res) => {
  try {
    const { id } = req.params;

    const areaManager = await AreaManager.findById(id).populate([
      { path: "user", select: "userName phoneNo userImage email employeeId" },
      { path: "region", select: "regionName regionCode" },
      { path: "area", select: "areaName areaCode" },
      { path: "commission", select: "profileName" },
    ]);
    if (!areaManager) {
      return res.status(404).json({ message: "Area Manager not found" });
    }

    const decryptField = (field) => (field ? decrypt(field) : field);

    areaManager.adhaarNo = decryptField(areaManager.adhaarNo);
    areaManager.panNo = decryptField(areaManager.panNo);
    if (areaManager.bankDetails) {
      areaManager.bankDetails.bankAccountNo = decryptField(
        areaManager.bankDetails.bankAccountNo
      );
    }

    res.status(200).json(areaManager);
  } catch (error) {
    console.error("Error fetching Area Manager:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getAllAreaManager = async (req, res) => {
  try {
    const userId = req.user.id;

    // Step 1: Find the user's role
    const user = await User.findById(userId).select("role");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Step 2: If the user is Super Admin, Sales Admin, or Support Admin, fetch all Area Managers
    if (["Super Admin", "Sales Admin", "Support Admin"].includes(user.role)) {
      const areaManagers = await AreaManager.find({}).populate([
        { path: "user", select: "userName phoneNo userImage email employeeId" },
        { path: "region", select: "regionName" },
        { path: "area", select: "areaName" },
        { path: "commission", select: "profileName" },
      ]);

      if (areaManagers.length === 0) {
        return res.status(404).json({ message: "No Area Manager found" });
      }

      return res.status(200).json({ areaManagers });
    }

    // Step 3: If the user is a Region Manager, fetch Area Managers under their region
    if (user.role === "Region Manager") {
      // Find the Region Manager's regionId
      const regionManager = await RegionManager.findOne({ user: userId }).select("region");
      if (!regionManager) {
        return res.status(404).json({ message: "Region Manager not found" });
      }

      const regionId = regionManager.region;

      // Fetch Area Managers under the region
      const areaManagers = await AreaManager.find({ region: regionId }).populate([
        { path: "user", select: "userName phoneNo userImage email employeeId" },
        { path: "region", select: "regionName" },
        { path: "area", select: "areaName" },
        { path: "commission", select: "profileName" },
      ]);

      if (areaManagers.length === 0) {
        return res.status(404).json({ message: "No Area Manager found for the given region" });
      }

      return res.status(200).json({ areaManagers });
    }

    // Step 4: If the role is not authorized, return a 403 response
    return res.status(403).json({ message: "Unauthorized access" });
  } catch (error) {
    console.error("Error fetching all Area Managers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// exports.getAllAreaManager = async (req, res) => {
//   try {

//     const userId = req.user.id;

//     const areaManager = await AreaManager.find({}).populate([
//       { path: "user", select: "userName phoneNo userImage email employeeId" },
//       { path: "region", select: "regionName" },
//       { path: "area", select: "areaName" },
//       { path: "commission", select: "profileName" },
//     ]);
//     if (areaManager.length === 0) {
//       return res.status(404).json({ message: "No Area Manager found" });
//     }

//     res.status(200).json({ areaManager });
//   } catch (error) {
//     console.error("Error fetching all Area Manager:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

exports.editAreaManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    let data = cleanData(req.body);
    // Fetch the existing document to get the user field
    const existingAreaManager = await AreaManager.findById(id);
    if (!existingAreaManager) {
      return res.status(404).json({ message: "Area Manager not found" });
    }

    // Extract the user field (ObjectId)
    const existingUserId = existingAreaManager.user;

    // Validate required fields
    const requiredFields = ["userName", "phoneNo", "email"];
    const validationError = validateRequiredFields(requiredFields, data);

    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    // Check for duplicate user details, excluding the current document
    const duplicateCheck = await checkDuplicateUser(
      data.userName,
      data.email,
      data.phoneNo,
      existingUserId
    );
    if (duplicateCheck) {
      return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
    }
    // Encrypt sensitive fields
    data = encryptSensitiveFields(data);

    const user = await User.findById(existingUserId);
    Object.assign(user, data);
    await user.save();

    Object.assign(existingAreaManager, data);
    const updatedAreaManager = await existingAreaManager.save();

    if (!updatedAreaManager) {
      return res.status(404).json({ message: "Area Manager not found" });
    }

    res.status(200).json({
      message: "Area Manager updated successfully",
    });
    logOperation(req, "Successfully", updatedAreaManager._id);
    next();
  } catch (error) {
    console.error("Error editing Area Manager:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

exports.deleteAreaManager = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if the Area Manager exists
    const areaManager = await AreaManager.findById(id);
    if (!areaManager) {
      return res.status(404).json({ message: "Area Manager not found." });
    }
 
    // Check if the Area Manager is referenced in the Leads collection
    const lead = await Leads.findOne({ areaManager: id });
    if (lead) {
      return res.status(400).json({
        message: "Cannot delete Area Manager because it is referenced in Leads.",
      });
    }
 
    // Delete the associated User
    const userId = areaManager.user;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({
        message: "Associated User not found or already deleted.",
      });
    }
 
    // Delete the Area Manager
    const deletedAreaManager = await AreaManager.findByIdAndDelete(id);
    if (!deletedAreaManager) {
      return res.status(404).json({ message: "Area Manager not found or already deleted." });
    }
 
    // Log success and return response
    res.status(200).json({
      message: "Area Manager and associated User deleted successfully.",
    });
    logOperation(req, "Successfull", deletedAreaManager._id);
    next();
 
  } catch (error) {
    console.error("Error deleting Area Manager:", error.message || error);
    res.status(500).json({ message: "Internal server error." });
    logOperation(req, "Failed");
    next();
  }
};

// Create a reusable transporter object using AWS SES
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10) || 587,
  secure: false, // Use true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Skip TLS certificate validation (optional)
  },
});

// Function to send login credentials
const sendCredentialsEmail = async (email, password, userName) => {
  const mailOptions = {
    from: `"NexPortal" <${process.env.EMAIL}>`,
    to: email,
    subject: "Your NexPortal Login Credentials",
    text: `Dear ${userName},

Welcome to NexPortal – Sales & Support System.

Your account has been successfully created, Below are your login credentials:
  
Email: ${email}  
Password: ${password}  

Please note: These credentials are confidential. Do not share them with anyone.

To get started, log in to your account at:  
https://dev.nexportal.billbizz.cloud/  

If you have any questions or need assistance, please contact our support team.

Best regards,  
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Login credentials email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending login credentials email:", error);
    return false;
  }
};

// The CygnoNex Team
// NexPortal
// Support: notify@cygnonex.com
