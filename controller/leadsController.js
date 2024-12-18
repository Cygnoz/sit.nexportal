const Leads = require("../database/model/leads")
const Region = require('../database/model/region')
const Area = require('../database/model/area')
// const mongoose = require('mongoose');
const Bda = require('../database/model/bda')
const User = require("../database/model/user");

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




exports.addLead = async (req, res , next ) => {
  try {
    const { id: userId, userName } = req.user;
    
    
    const cleanedData = cleanLeadData(req.body);
    
    const { email, regionId, areaId , bdaId } = cleanedData;



    
    // Check if a lead with the same email already exists
    const existingLead = await Leads.findOne({ email });
    if (existingLead) {
      return res.status(400).json({ message: "A lead with this email already exists" });
    }

    const { regionExists, areaExists , bdaExists } = await dataExist( regionId, areaId , bdaId);

    if (!validateRegionAndArea( regionExists, areaExists, bdaExists ,res )) return;

    if (!validateInputs( cleanedData, regionExists, areaExists, bdaExists ,res)) return;
  

    // const newLead = await createLead(cleanedData)
    
    // const savedLeads = await createNewLeads(cleanedData, regionId, areaId, bdaId , userId, userName );

    const savedLeads = await createLead(cleanedData, regionId, areaId, bdaId, userId, userName);


    res.status(201).json({ message: "Lead added successfully", savedLeads });

  // Pass operation details to middleware
  ActivityLog(req, "successfully", savedLeads._id);
  next();

  } catch (error) {
    console.error("Error adding lead:", error);
    res.status(500).json({ message: "Internal server error" });
    ActivityLog(req, "Failed");
    next();
  }
};



exports.getLead = async (req, res) => {
  try {
    const { leadId } = req.params;

    // Fetch the lead by ID
    const lead = await Leads.findById(leadId);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    // Extract the related entity IDs from the lead
    const { regionId, areaId, bdaId } = lead;

    // Fetch related entity details using dataExist
    const { regionExists, areaExists, bdaExists, bdaName } = await dataExist(regionId, areaId, bdaId);

    // Enrich the response with related data
    const enrichedLead = {
      ...lead.toObject(),
      regionDetails: regionExists[0] || null, // Assuming regionExists is an array
      areaDetails: areaExists[0] || null,    // Assuming areaExists is an array
      bdaDetails: {
        bdaId: bdaExists[0]?._id || null,
        bdaName: bdaName || null,
      },
    };

    // Send the enriched lead data as the response
    res.status(200).json(enrichedLead);
  } catch (error) {
    console.error("Error fetching lead:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Get All Leads without validation
exports.getAllLeads = async (req, res) => {
  try {
    // Fetch all leads from the database
    const leads = await Leads.find({ customerStatus: "lead" });

    // Check if leads exist
    if (!leads || leads.length === 0) {
      return res.status(404).json({ message: "No leads found." });
    }

    // Enrich data for each lead
    const enrichedLeads = await Promise.all(
      leads.map(async (lead) => {
        const { regionId, areaId, bdaId } = lead;

        // Fetch related details using dataExist
        const { regionExists, areaExists, bdaExists } = await dataExist(regionId, areaId, bdaId);

        return {
          ...lead.toObject(),
          regionDetails: regionExists?.[0] || null, // Assuming regionExists is an array
          areaDetails: areaExists?.[0] || null,    // Assuming areaExists is an array
          bdaDetails: bdaExists?.[0] || null,      // Assuming bdaExists is an array
        };
      })
    );

    // Respond with the enriched leads data
    res.status(200).json({ leads: enrichedLeads });
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};



exports.editLead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = cleanLeadData(req.body);

    // Fetch the existing document to get the user field
const existingLead = await Leads.findById(id);
if (!existingLead) {
  return res.status(404).json({ message: "Lead  not found" });
}

// Extract the user field (ObjectId)
const existingUserId = existingLead.user;



    // Check for duplicate user details, excluding the current document
    const duplicateCheck = await checkDuplicateUser(data.firstName, data.email, data.phone, existingUserId);
    if (duplicateCheck) {
      return res.status(400).json({ message: `Conflict: ${duplicateCheck}` });
    }

   
    Object.assign(existingLead, data);
    const updatedLead = await existingLead.save();

    if (!updatedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({
      message: "Lead updated successfully"
    });
    ActivityLog(req, "Successfully", updatedLead._id);
    next()
  } catch (error) {
    console.error("Error editing Lead:", error);
    res.status(500).json({ message: "Internal server error" });
    ActivityLog(req, "Failed");
   next();
  }
};





// exports.deleteLead = async (req, res, next) => {
//   try {
//     const { leadId } = req.params;

//     // Delete the lead
//     const deletedLead = await Leads.findByIdAndDelete(leadId);

//     if (!deletedLead) {
//       return res.status(404).json({ message: "Lead not found" });
//     }

//     res.status(200).json({ message: "Lead deleted successfully" });

//     // Pass operation details to middleware
//     ActivityLog(req, "successfully");
//     next();
//   } catch (error) {
//     console.error("Error deleting lead:", error);
//     res.status(500).json({ message: "Internal server error" });

//     // Log the failure
//     ActivityLog(req, "Failed");
//     next();
//   }
// };

exports.convertLeadToTrial = async (req, res) => {
  try {
    const { leadId } = req.params; // Get the lead ID from request parameters

    // Find the lead by ID and update its customerStatus to "Trial" and set the customerId
    const updatedLead = await Leads.findByIdAndUpdate(
      leadId,
      { 
        customerStatus: "Trial"},
        {new: true } // Return the updated document
    );

    // Check if the lead was found and updated
    if (!updatedLead) {
      return res.status(404).json({ message: "Lead not found or unable to convert." });
    }

    res.status(200).json({ message: "Lead converted to Trial successfully.", lead: updatedLead });
  } catch (error) {
    console.error("Error converting lead to Trial:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};




exports.getAllTrials = async (req, res) => {
  try {
    // Fetch all records with customerStatus as "Trial"
    const trials = await Leads.find({ customerStatus: "Trial" });

    // Check if trials exist
    if (!trials || trials.length === 0) {
      return res.status(404).json({ message: "No trials found." });
    }

    // Respond with the trials
    res.status(200).json({ trials });
  } catch (error) {
    console.error("Error fetching trials:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};



exports.convertTrialToLicenser = async (req, res) => {
  try {
    const { trialId } = req.params; // Assume the request contains the ID of the trial to convert.

    // Find the trial by ID and update its customerStatus to "Licenser"
    const updatedTrial = await Leads.findByIdAndUpdate(
      trialId,
      { customerStatus: "Licenser" },
      { new: true } // Return the updated document
    );

    // Check if the trial was found and updated
    if (!updatedTrial) {
      return res.status(404).json({ message: "Trial not found or unable to convert." });
    }

    res.status(200).json({ message: "Trial converted to Licenser successfully.", trial: updatedTrial });
  } catch (error) {
    console.error("Error converting Trial to Licenser:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};



async function createLead(cleanedData, regionId, areaId, bdaId, userId, userName) {
  // Extract other fields from the cleanedData
  const { ...rest } = cleanedData;

  // Generate the next lead ID
  let nextId = 1;

  // Try to get the last lead to determine the next ID
  const lastLead = await Leads.findOne().sort({ customerId: -1 }); // Sort by leadId descending

  if (lastLead) {
    const lastId = parseInt(lastLead.customerId.split("-")[1]); // Extract numeric part
    nextId = lastId + 1; // Increment the last ID

  }

  // Format the new lead ID
  const customerId = `CSTMID-${nextId.toString().padStart(4, "0")}`;

  // Create and save the new lead
  const savedLeads = await createNewLeads(
    { ...rest, customerId }, // Pass lead data with the generated leadId
    regionId,
    areaId,
    bdaId,
    true, // Mark as a new lead
    userId,
    userName,
    
  );

  return savedLeads; // Return the saved lead
}


// // Function to auto-generate the customerId
// async function generateCustomerId() {
//   let nextId = 1;

//   // Try to get the last lead to determine the next customer ID
//   const lastLead = await Leads.findOne().sort({ _id: -1 }); // Sort by customerId descending

//   if (lastLead) {
//     const lastId = parseInt(lastLead.customerId.slice(6));// Extract numeric part
//     nextId = lastId + 1; // Increment the last ID
//   }

//   // Format the new customer ID
//   const customerId = `CUSTID-${nextId.toString().padStart(4, "0")}`;

//   return customerId;
// }



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
    const existingUser = await User.findOne({
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
    if (existingUser.firstName === userName)
      duplicateMessages.push("Full name already exists");
    if (existingUser.email === email)
      duplicateMessages.push("Login email already exists");
    if (existingUser.phone === phone)
      duplicateMessages.push("Phone number already exists");
  
    return duplicateMessages.join(". ");
  };
  


   //Clean Data 
   function cleanLeadData(data) {
    const cleanData = (value) => (value === null || value === undefined || value === "" || value === 0 ? undefined : value);
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = cleanData(data[key]);
      return acc;
    }, {});
  }
  


  // Create New Debit Note
  function createNewLeads( data, regionId, areaId, bdaId,  userId, userName ) {
    const newLeads = new Leads({ ...data, regionId, areaId, bdaId, userId, userName , leadStatus: "New", customerStatus: "lead" 

    });
    return newLeads.save();
  }



   //Validate inputs
function validateInputs( data, res) {
  const validationErrors = validateLeadsData(data );  

  if (validationErrors.length > 0) {
    res.status(400).json({ message: validationErrors.join(", ") });
    return false;
  }
  return true;
}



//Validate Data
function validateLeadsData( data ) {
  const errors = [];

  //Basic Info
  validateReqFields( data, errors );
  validateSalutation(data.salutation, errors);
  validateLeadStatus(data.leadStatus, errors);


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
function validateLeadStatus(leadStatus, errors) {
  validateField(leadStatus && !validLeadStatus.includes(leadStatus),
    "Invalid leadStatus: " + leadStatus, errors);
}

//Valid Req Fields
function validateReqFields( data, errors ) {

validateField( typeof data.regionId === 'undefined' ,"Please select a Region", errors  );
validateField( typeof data.areaId === 'undefined' , "Please select a Area", errors  );
validateField( typeof data.bdaId === 'undefined' , "Please select a BDA", errors  );
validateField( typeof data.firstName === 'undefined', "Firstname required", errors  );
validateField( typeof data.email === 'undefined', "email required", errors  );
validateField( typeof data.phone === 'undefined', "Phone number required", errors  );

}



const validSalutations = ["Mr.", "Mrs.", "Ms.", "Miss.", "Dr."];
const validLeadStatus = ["New", "Contacted", "Inprogress", "Lost", "Won"];


