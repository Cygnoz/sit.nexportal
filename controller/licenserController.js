const Leads = require("../database/model/leads")
const Region = require('../database/model/region')
const Area = require('../database/model/area')
const mongoose = require('mongoose');
const Bda = require('../database/model/bda')
const User = require("../database/model/user");
const moment = require("moment");
const Lead = require("../database/model/leads");
 
 
const dataExist = async (regionId, areaId, bdaId) => {
  const [regionExists, areaExists, bdaExists] = await Promise.all([
    Region.find({ _id: regionId }, { _id: 1, regionName: 1 }),
    Area.find({ _id: areaId }, { _id: 1, areaName: 1 }),
    Bda.find({ _id: bdaId }, { _id: 1, user: 1 }),
  ]);
 
  let bdaName = null;
  if (bdaExists && bdaExists.length > 0) {
    const bdaUser = await User.findOne({ _id: bdaExists[0].user }, { userName: 1 });
    if (bdaUser) {
      bdaName = bdaUser.userName;
    }
  }
 
  return {
    regionExists,
    areaExists,
    bdaExists,
    bdaName,
  };
};
 
 
 
 
 
exports.addLicenser = async (req, res , next ) => {
  try {
    const { id: userId, userName } = req.user;
 
    const cleanedData = cleanLicenserData(req.body);
 
    const { firstName , email, phone, regionId, areaId , bdaId } = cleanedData;
 
 
    // Check for duplicate user details
   const duplicateCheck = await checkDuplicateUser(firstName, email, phone);
   if (duplicateCheck) {
     return res.status(400).json({ message: `Conflict: ${duplicateCheck}` }); // Return a success response with conflict details
   }
 
 
    const { regionExists, areaExists , bdaExists } = await dataExist( regionId, areaId , bdaId);
 
    if (!validateRegionAndArea( regionExists, areaExists, bdaExists ,res )) return;
 
    if (!validateInputs( cleanedData, regionExists, areaExists, bdaExists ,res)) return;
 
    // const newLead = await createLead(cleanedData)
   
    const savedLicenser = await createLicenser(cleanedData, regionId, areaId, bdaId ,  userId, userName );
 
    res.status(201).json({ message: "licenser added successfully", savedLicenser });
 
  // Pass operation details to middleware
  ActivityLog(req, "successfully", savedLicenser._id);
  next();
 
  } catch (error) {
    console.error("Error adding licenser:", error);
    res.status(500).json({ message: "Internal server error" });
    ActivityLog(req, "Failed");
    next();
  }
};
 
 
exports.getLicenser = async (req, res) => {
  try {
    const { licenserId } = req.params;
 
    const licenser = await Leads.findById(licenserId);
    if (!licenser) {
      return res.status(404).json({ message: "Licenser not found" });
    }
 
    const { regionId, areaId, bdaId } = licenser;
    const { regionExists, areaExists, bdaExists, bdaName } = await dataExist(regionId, areaId, bdaId);
 
    const enrichedLicenser = {
      ...licenser.toObject(),
      regionDetails: regionExists[0] || null,
      areaDetails: areaExists[0] || null,
      bdaDetails: {
        bdaId: bdaExists[0]?._id || null,
        bdaName: bdaName || null,
      },
    };
 
    res.status(200).json(enrichedLicenser);
  } catch (error) {
    console.error("Error fetching licenser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
 
 
 
 
exports.getAllLicenser = async (req, res) => {
  try {
    // Fetch all Licensers
    const licensers = await Leads.find({ customerStatus: "Licenser" });
 
    // Check if Licensers exist
    if (!licensers || licensers.length === 0) {
      return res.status(404).json({ message: "No Licensers found." });
    }
 
    const currentDate = moment().startOf("day");
 
    // Iterate and validate/enrich Licenser data
    const enrichedLicensers = await Promise.all(
      licensers.map(async (licenser) => {
        const { _id, endDate } = licenser;
 
        // Determine new status
        let licensorStatus = "Expired"; // Default to expired
        if (endDate) {
          const endDateMoment = moment(endDate, "YYYY-MM-DD").startOf("day");
 
          if (endDateMoment.isSameOrAfter(currentDate)) {
            if (endDateMoment.diff(currentDate, "days") <= 7) {
              licensorStatus = "Pending Renewal";
            } else {
              licensorStatus = "Active";
            }
          }
        }
 
        // Update the database only if the status has changed
        if (licenser.licensorStatus !== licensorStatus) {
          await Leads.findByIdAndUpdate(_id, { licensorStatus }, { new: true });
        }
 
        // Return the updated/enriched Licenser data
        return {
          ...licenser.toObject(),
          licensorStatus, // Include updated status
        };
      })
    );
 
    // Respond with enriched Licenser data
    res.status(200).json({ licensers: enrichedLicensers });
  } catch (error) {
    console.error("Error fetching Licensers:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
 
 
 
 
exports.editLicenser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = cleanLicenserData(req.body);
 
    // Fetch the existing document to get the user field
const existingLicenser = await Leads.findById(id);
if (!existingLicenser) {
  return res.status(404).json({ message: "licenser  not found" });
}
 
 
    // Check for duplicate user details, excluding the current document
    const duplicateCheck = await checkDuplicateUser(data.firstName, data.email, data.phone, id);
    if (duplicateCheck) {
      return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
    }
 
   
    Object.assign(existingLicenser, data);
    const updatedLicenser = await existingLicenser.save();
 
    if (!updatedLicenser) {
      return res.status(404).json({ message: "licenser not found" });
    }
 
    res.status(200).json({
      message: "Licenser updated successfully"
    });
    ActivityLog(req, "Successfully", updatedLicenser._id);
    next()
  } catch (error) {
    console.error("Error editing licenser:", error);
    res.status(500).json({ message: "Internal server error" });
    ActivityLog(req, "Failed");
   next();
  }
};
 
 
 
 
 
 
async function createLicenser(cleanedData, regionId, areaId, bdaId, userId, userName) {
  const { ...rest } = cleanedData;
 
  // Generate the next licenser ID
  let nextId = 1;
 
  // Fetch the last licenser based on the numeric part of customerId
  const lastLicenser = await Leads.findOne().sort({ customerId: -1 }); // Sort by customerId in descending order
 
  if (lastLicenser) {
    const lastId = parseInt(lastLicenser.customerId.split("-")[1]); // Extract numeric part
    nextId = lastId + 1; // Increment the last ID
  }
 
  // Format the new licenser ID
  const customerId = `CSTMID-${nextId.toString().padStart(4, "0")}`;
 
  // Save the new licenser
  const savedLicenser = await createNewLicenser(
    { ...rest, customerId },
    regionId,
    areaId,
    bdaId,
    true,
    userId,
    userName
  );
 
  return savedLicenser;
}
 
 
 
 
const ActivityLog = (req, status, operationId = null) => {
  const { id, userName } = req.user;
  const log = { id, userName, status };
 
  if (operationId) {
    log.operationId = operationId;
  }
 
  req.user = log;
};
 
 
 
 
  // Validate Organization Tax Currency
  function validateRegionAndArea( regionExists, areaExists, bdaExists ,res ) {
    if (!regionExists) {
      res.status(404).json({ message: "Region not found" });
      return false;
    }
    if (!areaExists) {
      res.status(404).json({ message: "Area not found." });
      return false;
    }
    if (!bdaExists) {
      res.status(404).json({ message: "BDA not found." });
      return false;
    }
    return true;
  }
 
 
 
  const checkDuplicateUser = async (firstName, email, phone, excludeId) => {
    const existingUser = await Lead.findOne({
      $and: [
        { _id: { $ne: excludeId } }, // Exclude the current document
        {
          $or: [
            { firstName },
            { email },
            { phone },
          ],
        },
      ],
    });
 
 
 
    if (!existingUser) return null;
 
    const duplicateMessages = [];
    if (existingUser.firstName === firstName)
      duplicateMessages.push("Full name already exists");
    if (existingUser.email === email)
      duplicateMessages.push("Login email already exists");
    if (existingUser.phone === phone)
      duplicateMessages.push("Phone number already exists");
 
    return duplicateMessages.join(". ");
  };
 
 
 
   //Clean Data
   function cleanLicenserData(data) {
    const cleanData = (value) => (value === null || value === undefined || value === "" ? undefined : value);
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = cleanData(data[key]);
      return acc;
    }, {});
  }
 
 
 
  // Create New Debit Note
  function createNewLicenser(data, regionId, areaId, bdaId, newLicenser, userId, userName) {
    const newLicensers = new Leads({ ...data, regionId, areaId, bdaId, newLicenser, userId, userName, customerStatus:"Licenser", licensorStatus:"Active" });
    return newLicensers.save();
  }
 
 
 
   //Validate inputs
   function validateInputs( data, regionExists, areaExists, bdaExists, res) {
    const validationErrors = validateLicenserData(data, regionExists, areaExists, bdaExists );  
 
    if (validationErrors.length > 0) {
      res.status(400).json({ message: validationErrors.join(", ") });
      return false;
    }
    return true;
  }
 
 
 
  //Validate Data
  function validateLicenserData( data  ) {
    const errors = [];
 
    //Basic Info
    validateReqFields( data, errors );
    validateSalutation(data.salutation, errors);
    validateLicenserStatus(data.licensorStatus, errors);
 
 
    return errors;
  }
 
 
 
  // Field validation utility
  function validateField(condition, errorMsg, errors) {
    if (condition) errors.push(errorMsg);
  }
 
  //Validate Salutation
  function validateSalutation(salutation, errors) {
    validateField(salutation && !validSalutations.includes(salutation),
      "Invalid Salutation: " + salutation, errors);
  }
 
  //Validate Salutation
  function validateLicenserStatus(licensorStatus, errors) {
    validateField(licensorStatus && !validLicenserStatus.includes(licensorStatus),
      "Invalid leadStatus: " + licensorStatus, errors);
  }
 
 
  //Valid Req Fields
  function validateReqFields( data, errors ) {
 
  validateField( typeof data.regionId === 'undefined' , "Please select a Region", errors  );
  validateField( typeof data.areaId === 'undefined','undefined', "Please select a Area", errors  );
  validateField( typeof data.bdaId === 'undefined', "Please select a BDA", errors  );
  validateField( typeof data.firstName === 'undefined', "Firstname required", errors  );
  validateField( typeof data.email === 'undefined', "email required", errors  );
  validateField( typeof data.phone === 'undefined', "Phone number required", errors  );
  validateField( typeof data.startDate === 'undefined', "Start Date required", errors  );
  validateField( typeof data.endDate === 'undefined', "End Date required", errors  );
 
  }
 
 
 
  const validSalutations = ["Mr.", "Mrs.", "Ms.", "Miss.", "Dr."];
  const validLicenserStatus = ["New", "Contacted", "Inprogress", "Lost", "Won"];
 
 