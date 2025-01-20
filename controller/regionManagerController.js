const User = require("../database/model/user");
const Leads = require("../database/model/leads")
const Region = require("../database/model/region");
const Area = require("../database/model/area");
const AreaManager = require("../database/model/areaManager");
const Bda = require("../database/model/bda");
const Commission = require("../database/model/commission");
const RegionManager = require("../database/model/regionManager");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { ObjectId } = require("mongoose").Types;
const nodemailer = require("nodemailer");
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
    role: "Region Manager", // Set default role
  });
  return newUser.save();
}

async function createRegionManager(data, user) {
  const newRegionManager = new RegionManager({ ...data, user });
  return newRegionManager.save();
}

exports.addRegionManager = async (req, res, next) => {
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

    // Check if the region is already assigned to another RegionManager
    const existingRegionManager = await RegionManager.findOne({ region: data.region });
    if (existingRegionManager) {
      return res.status(400).json({ message: "Region is already assigned to another Region Manager. Try adding another region." });
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
    const newRegionManager = await createRegionManager(data, newUser._id);

    logOperation(req, "Successfully", newRegionManager._id);
    next();
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

exports.addRegionManagerCheck = async (req, res, next) => {
  try {
    const id = req.params.id
    const existingRegionManager = await RegionManager.findOne({ region: id });
    
    if (existingRegionManager) {
      return res.status(400).json({ message: "Region is already assigned to another Region Manager. Try adding another region." });
    }
    return res.status(201).json({
      message: "success"
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


exports.getRegionManager = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch region manager details with populated fields
    const regionManager = await RegionManager.findById(id).populate([
      { path: "user", select: "userName phoneNo userImage employeeId email" },
      { path: "region", select: "regionName regionCode" },
      { path: "commission", select: "profileName" },
    ]);

    if (!regionManager) {
      return res.status(404).json({ message: "Region Manager not found" });
    }

    // Decrypt sensitive fields
    const decryptField = (field) => (field ? decrypt(field) : field);
    regionManager.adhaarNo = decryptField(regionManager.adhaarNo);
    regionManager.panNo = decryptField(regionManager.panNo);
    if (regionManager.bankDetails) {
      regionManager.bankDetails.bankAccountNo = decryptField(
        regionManager.bankDetails.bankAccountNo
      );
    }

    // Extract the region ID from the region manager
    const regionId = regionManager.region._id;

    // Fetch areas managed by the region
    const totalAreaManaged = await Area.find({ region: regionId });
    const areaIds = totalAreaManaged.map((area) => area._id);

    // Fetch area managers for the fetched areas
    const totalAreaManagers = await AreaManager.find({ area: { $in: areaIds } });

    // Fetch BDA details for the region
    const totalBdas = await getBdaDetails(regionId);

    // Send the response
    res.status(200).json({
      regionManager,
      totalCounts: {
        totalAreaManaged: totalAreaManaged.length,
        totalAreaManagers: totalAreaManagers.length,
        totalBdas: totalBdas.length,
      },
    });
  } catch (error) {
    console.error("Error fetching Region Manager:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



exports.getAllRegionManager = async (req, res) => {
  try {
    const regionManager = await RegionManager.find({}).populate([
      { path: "user", select: "userName phoneNo userImage email" },
      { path: "region", select: "regionName" },
      { path: "commission", select: "profileName" },
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

exports.editRegionManager = async (req, res, next) => {
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
    const duplicateCheck = await checkDuplicateUser(
      data.userName,
      data.email,
      data.phoneNo,
      existingUserId
    );
    if (duplicateCheck) {
      return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
    }

    const regionManager = await RegionManager.findOne({
      region: data.region,
      _id: { $ne: req.params.id } // Exclude the current document being edited
    });
    
    if (regionManager) {
      return res.status(400).json({
        message: "Region is already assigned to another Region Manager. Try adding another Region."
      });
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
      message: "Region Manager updated successfully",
    });
    logOperation(req, "Successfully", updatedRegionManager._id);
    next();
  } catch (error) {
    console.error("Error editing Region Manager:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

exports.deleteRegionManager = async (req, res, next) => {
  try {
    const { id } = req.params;
 
 
    // Check if the Region Manager exists
    const regionManager = await RegionManager.findById(id);
    if (!regionManager) {
      return res.status(404).json({ message: "Region Manager not found." });
    }
 
    // Check if the Region Manager is referenced in the Leads collection
    const lead = await Leads.findOne({ regionManager: id });
    if (lead) {
      return res.status(400).json({
        message: "Cannot delete Region Manager because it is referenced in Leads.",
      });
    }
 
    // Delete the associated User
    const userId = regionManager.user;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({
        message: "Associated User not found or already deleted.",
      });
    }
 
    // Delete the Region Manager
    const deletedRegionManager = await RegionManager.findByIdAndDelete(id);
    if (!deletedRegionManager) {
      return res.status(404).json({ message: "Region Manager not found or already deleted." });
    }
 
    // Log success and return response
    res.status(200).json({
      message: "Region Manager and associated User deleted successfully.",
    });
    logOperation(req, "Successfull", deletedRegionManager._id);
    next();
 
  } catch (error) {
    console.error("Error deleting Region Manager:", error.message || error);
    res.status(500).json({ message: "Internal server error." });
    logOperation(req, "Failed ");
    next();
  }
};

 
exports.deactivateRegionManager = async (req, res, next) => {
  try {
    const { id } = req.params; // Extract Region Manager ID from params
    const { status } = req.body; // Extract status from the request body
 
    // Validate the status
    if (!["Active", "Deactive"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status value. Allowed values are 'Active' or 'Deactive'.",
      });
    }
 
    // Check if the Region Manager exists
    const regionManager = await RegionManager.findById(id);
    if (!regionManager) {
      return res.status(404).json({ message: "Region Manager not found." });
    }
 
    // If deactivating, check if the Region Manager is referenced in any lead
    if (status === "Deactive") {
      const associatedLeads = await Leads.find({ regionManager: id });
      if (associatedLeads.length > 0) {
        return res.status(400).json({
          message: "Cannot deactivate Region Manager: There are leads associated with this Region Manager.",
          leads: associatedLeads.map(lead => ({
            id: lead._id,
            name: lead.name,
            status: lead.status,
          })),
        });
      }
    }
 
    // Update the Region Manager's status
    regionManager.status = status;
    await regionManager.save();
 
    // Use the `updatedAt` field for logging
    const actionTime = regionManager.updatedAt.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
 
    // Log the operation
    const activity = new ActivityLog({
      userId: req.user.id,
      operationId:id,
      activity: `${req.user.userName} Succesfully ${status}d Region Manager.`,
      timestamp: actionTime,
      action: status === "Active" ? "Activate" : "Deactivate",
      status,
      screen: "Region Manager",
    });
    await activity.save();
 
    // Respond with success
    return res.status(200).json({
      message: `Region Manager status updated to ${status} successfully.`,
      regionManager,
    });
  } catch (error) {
    console.error("Error updating Region Manager status:", error);
 
    // Log the failure and respond with an error
    logOperation(req, "Failed");
    next()
    return res.status(500).json({ message: "Internal server error." });
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



// exports.getRegionManagerDetails = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Fetch the regionManager using the provided id
//     const regionManager = await RegionManager.findById(id);
//     if (!regionManager) {
//       return res.status(404).json({ message: "Region Manager not found" });
//     }

//     // Extract the region ID from the fetched regionManager
//     const regionId = regionManager.region;

//     // Fetch areas managed by the region
//     const totalAreaManaged = await Area.find({ region: regionId });

//     // Map through the areas to fetch the required details
//     const areaDetails = await Promise.all(totalAreaManaged.map(async (area) => {
//       // Fetch the area manager for the area
//       const areaManager = await AreaManager.findOne({ area: area._id });

//       if (!areaManager) {
//         return {
//           areaCode: area.areaCode,
//           areaName: area.areaName,
//           areaManagerName: null, // In case no area manager is found
//         };
//       }

//       // Fetch the user (area manager's name)
//       const user = await User.findById(areaManager.user);

//       return {
//         _id:area._id,
//         areaCode: area.areaCode,
//         areaName: area.areaName,
//         areaManagerName: user ? user.userName : null, // If user is found, return their username
//       };
//     }));

//     // Get area IDs from the fetched areas
//     const areaIds = totalAreaManaged.map((area) => area._id);

//     // Fetch area managers managing the fetched areas
//     const totalAreaManagers = await AreaManager.find({ area: { $in: areaIds } })
//     .select('_id user')
//     .populate({
//         path: 'user',
//         select: 'userName userImage email phoneNo _id'
//     });


//     const bdaDetails =  getBdaDetails(regionId)
 

//     // Fetch BDAs associated with the area managers
//     // const totalBdas = await Bda.find({ region: regionId  });

//     // Send the response
//     res.status(200).json({
//       totalAreaManaged: areaDetails,
//       totalAreaManagers,
//       totalBdas,
//     });
//   } catch (error) {
//     console.error("Error fetching region manager details:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// const getBdaDetails = async (regionId) => {
//   // Fetch all BDA documents that match the area
//   const bdas = await Bda.find({ region: regionId }, { user: 1, dateOfJoining: 1 }).lean();

//   // Prepare array for BDA details
//   const bdaDetails = await Promise.all(
//     bdas.map(async (bda) => {
//       const user = await User.findById(bda.user, {
//         employeeId: 1,
//         userName: 1,
//         email: 1,
//         phoneNo: 1,
//         userImage: 1,
//       }).lean();

//       const totalLeads = await Leads.countDocuments({ regionId, bdaId: bda._id });
//       const leadsClosed = await Leads.countDocuments({
//         regionId,
//         bdaId: bda._id,
//         customerStatus: { $ne: "Lead" },
//       });

//       return {
//         _id :bda._id,
//         employeeId: user?.employeeId || null,
//         userName: user?.userName || null,
//         email: user?.email || null,
//         phoneNo: user?.phoneNo || null,
//         userImage: user?.userImage || null,
//         dateOfJoining: bda.dateOfJoining,
//         totalLeads,
//         leadsClosed,
//       };
//     })
//   );

//   return bdaDetails;
// };




exports.getRegionManagerDetails = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the regionManager using the provided id
    const regionManager = await RegionManager.findById(id);
    if (!regionManager) {
      return res.status(404).json({ message: "Region Manager not found" });
    }

    // Extract the region ID from the fetched regionManager
    const regionId = regionManager.region;

    // Fetch areas managed by the region
    const totalAreaManaged = await Area.find({ region: regionId });

    // Map through the areas to fetch the required details
    const areaDetails = await Promise.all(
      totalAreaManaged.map(async (area) => {
        // Fetch the area manager for the area
        const areaManager = await AreaManager.findOne({ area: area._id });

        if (!areaManager) {
          return {
            _id: area._id,
            areaCode: area.areaCode,
            areaName: area.areaName,
            areaManagerName: null, // In case no area manager is found
          };
        }

        // Fetch the user (area manager's name)
        const user = await User.findById(areaManager.user);

        return {
          _id: area._id,
          areaCode: area.areaCode,
          areaName: area.areaName,
          areaManagerName: user ? user.userName : null, // If user is found, return their username
        };
      })
    );

    // Get area IDs from the fetched areas
    const areaIds = totalAreaManaged.map((area) => area._id);

    // Fetch area managers managing the fetched areas
    const totalAreaManagers = await AreaManager.find({ area: { $in: areaIds } })
      .select('_id user')
      .populate({
        path: 'user',
        select: 'userName userImage email phoneNo _id',
      });

    // Fetch BDA details
    const totalBdas = await getBdaDetails(regionId);

    // Send the response
    res.status(200).json({
      regionManager: {
        id: regionManager._id,
        name: regionManager.name,
        email: regionManager.email,
      },
      totalAreaManaged: areaDetails,
      totalAreaManagers,
      totalBdas,
    });
  } catch (error) {
    console.error("Error fetching region manager details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBdaDetails = async (regionId) => {
  // Fetch all BDA documents that match the region
  const bdas = await Bda.find({ region: regionId }, { user: 1, dateOfJoining: 1 }).lean();

  // Prepare array for BDA details
  const bdaDetails = await Promise.all(
    bdas.map(async (bda) => {
      const user = await User.findById(bda.user, {
        employeeId: 1,
        userName: 1,
        email: 1,
        phoneNo: 1,
        userImage: 1,
      }).lean();

      const totalLeads = await Leads.countDocuments({ regionId, bdaId: bda._id });
      const leadsClosed = await Leads.countDocuments({
        regionId,
        bdaId: bda._id,
        customerStatus: { $ne: "Lead" },
      });

      return {
        _id: bda._id,
        employeeId: user?.employeeId || null,
        userName: user?.userName || null,
        email: user?.email || null,
        phoneNo: user?.phoneNo || null,
        userImage: user?.userImage || null,
        dateOfJoining: bda.dateOfJoining,
        totalLeads,
        leadsClosed,
      };
    })
  );

  return bdaDetails;
};
