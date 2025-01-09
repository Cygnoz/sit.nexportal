const Ticket = require("../database/model/ticket");
const Leads = require("../database/model/leads")
const Region = require("../database/model/region");
const Supervisor = require("../database/model/supervisor");
const SupportAgent = require("../database/model/supportAgent")
const User = require("../database/model/user")
const { Types } = require("mongoose");
const moment = require('moment-timezone');
const mongoose = require('mongoose');




const dataExist = async (customerId, supportAgentId) => {
  const [customerExists, supportAgentExists] = await Promise.all([
    Leads.find({ _id: customerId }, { _id: 1, firstName: 1 , image:1 }),
    SupportAgent.findOne({ _id: new Types.ObjectId(supportAgentId) }, { _id: 1, user: 1, region:1}), // Fetch one record
  ]);

  let supportAgentName = null;
  if (supportAgentExists && supportAgentExists.user) {
    const supportAgentUser = await User.findOne(
      { _id: supportAgentExists.user },
      { userName: 1 }
    );
    if (supportAgentUser) {
      supportAgentName = supportAgentUser.userName;
    }
  }

  return {
    customerExists,// Return the first customer record or null
    supportAgentExists: supportAgentExists || null, // Return the agent or null
    supportAgentName,
  };
};



// exports.addTicket = async (req, res , next) => {
//   try {

//     const { id: userId, userName } = req.user;

//     const cleanedData = cleanTicketData(req.body);

//     const { customerId ,priority, supportAgentId  } = cleanedData;

//     // Validate required fields
//     if (!customerId || !priority || !supportAgentId) {
//       return res.status(400).json({ message: "Requestor, assignedTo, and priority are required" });
//     }

//     const { customerExists , supportAgentExists  } = await dataExist( customerId , supportAgentId);

//     if (!validateCustomerAndSupportAgent( customerExists, supportAgentExists, res )) return;
//     console.log(supportAgentExists);
//     const regionId = cleanedData.region
//     const supervisor = await Supervisor.findOne({ region: regionId });
//     console.log("super",supervisor);
    
//     // const areaManager = await AreaManager.findOne({ area: areaId });
//       cleanedData.supervisor = supervisor._id
//     const openingDate = generateOpeningDate();
//     console.log("Opening Date:", openingDate.dateTime); // "2024-12-19 14:30:45 (IST)"
    
    
  

//     // Create a new ticket dynamically using req.body
//     const savedTickets = await createNewTicket(cleanedData, customerId , supportAgentId , openingDate , userId , userName );
  

//     res.status(201).json({ message: "Ticket added successfully", savedTickets });


//     // Pass operation details to middleware
//     ActivityLog(req, "successfully", savedTickets._id);
//     next();

//   } catch (error) {
//     console.error("Error adding ticket:", error);
//     res.status(500).json({ message: "Internal server error" });
//     ActivityLog(req, "Failed");
//     next();
//   }
// };


exports.addTicket = async (req, res, next) => {
  try {
    const { id: userId, userName } = req.user; // Get user info from the request
    const cleanedData = cleanTicketData(req.body); // Clean the request body data
    const { customerId, priority, supportAgentId } = cleanedData; // Extract necessary fields from cleaned data
 
    // Validate required fields
    if (!customerId || !priority || !supportAgentId) {
      return res.status(400).json({
        message: "Customer, priority, and support agent are required",
      });
    }
 
    // Check if customer and support agent exist
    const { customerExists, supportAgentExists } = await dataExist(customerId, supportAgentId);
    
    cleanedData.region = supportAgentExists.region
    if (!customerExists) {
      return res.status(404).json({ message: "Customer not found" });
    }
    if (!supportAgentExists) {
      return res.status(404).json({ message: "Support Agent not found" });
    }
 
    // Fetch support agent details, including the region
    const supportAgent = await mongoose.model("SupportAgent").findById(supportAgentId).populate({
      path: 'region', // Assuming region is part of the support agent schema
      select: '_id name', // Include the region details you need (adjust if necessary)
    });
 
    if (!supportAgent || !supportAgent.region) {
      return res.status(404).json({ message: "Region not found for the support agent" });
    }
 
    // Fetch supervisor based on the same region
    const supervisor = await mongoose.model("Supervisor").findOne({ region: supportAgent.region._id });
 
    if (!supervisor) {
      return res.status(404).json({ message: "Supervisor not found in the same region" });
    }
   cleanedData.supervisor = supervisor._id
    // Generate opening date (replace generateOpeningDate with your logic)
    const openingDate = generateOpeningDate(); // Assuming this function exists to generate a date
 
    // Create a new ticket dynamically using req.body
    const savedTickets = await createNewTicket(
      cleanedData,
      customerId,
      supportAgentId,
      openingDate,
      userId,
      userName
    );
 
    // Respond with success and the new ticket details, including supervisorId
    res.status(201).json({
      message: "Ticket added successfully",
      savedTickets: {
        ...savedTickets.toObject(),  // Convert Mongoose object to plain JavaScript object
      },
    });
 
    // Pass operation details to middleware
    ActivityLog(req, "successfully", savedTickets._id);
    next();
  } catch (error) {
    console.error("Error adding ticket:", error);
    res.status(500).json({ message: "Internal server error" });
    ActivityLog(req, "Failed");
    next();
  }
};




exports.getTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    // Fetch the ticket and populate necessary fields
    const ticket = await Ticket.findById(ticketId)
      .populate({
        path: 'customerId',
        select: 'firstName image' // Fetch firstName and image from Lead collection
      })
      .populate({
        path: 'region',
        model: 'Region', // Ensure the region field references the Region collection
        select: 'regionName' // Fetch only regionName from the Region collection
      })
      .populate({
        path: 'supportAgentId',
        select: 'user', // Fetch user from SupportAgent
        populate: {
          path: 'user',
          select: 'userName userImage' // Fetch userName and userImage from User collection
        }
      });

    // Check if the ticket exists
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    // Send the ticket in the response
    res.status(200).json(ticket);
  } catch (error) {
    console.error('Error fetching ticket:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};






exports.getAllTickets = async (req, res) => {
  try {
    // // Fetch all tickets
    // const tickets = await Ticket.find();

    // if (tickets.length === 0) {
    //   return res.status(404).json({ message: "No tickets found" });
    // }

    // // Enrich each ticket with limited customer and support agent details
    // const enrichedTickets = await Promise.all(
    //   tickets.map(async (ticket) => {
    //     const { customerId, supportAgentId } = ticket;

    //     // Fetch customer from Leads with status "Trial" or "Licenser"
    //     const customerExists = await Leads.findOne(
    //       { _id: customerId, customerStatus: { $in: ["Trial", "Licenser"] } },
    //       { _id: 1, firstName: 1 , lastName: 1 , email:1 , phone:1 , image:1 }
    //     );

    //     const { supportAgentExists, supportAgentName } = await dataExist(customerId, supportAgentId);

    //     return {
    //       ...ticket.toObject(),
    //       customerDetails: customerExists || { message: "Customer not found or not in trial/licenser status" },
    //       supportAgentDetails: supportAgentExists
    //         ? {
    //             id: supportAgentExists._id,
    //             name: supportAgentName || "Support agent name not found",
    //           }
    //         : { message: "Support agent not found" },
    //     };
    //   })
    // );

    // res.status(200).json({ message: "Tickets retrieved successfully", tickets: enrichedTickets });

    // Fetch the ticket and populate necessary fields
    const tickets = await Ticket.find()
      .populate({
        path: 'customerId',
        select: 'firstName image' // Fetch firstName and image from Lead collection
      })
      .populate({
        path: 'region',
        model: 'Region', // Ensure the region field references the Region collection
        select: 'regionName' // Fetch only regionName from the Region collection
      })
      .populate({
        path: 'supportAgentId',
        select: 'user', // Fetch user from SupportAgent
        populate: {
          path: 'user',
          select: 'userName userImage' // Fetch userName and userImage from User collection
        }
      });

    // Check if the ticket exists
    if (!tickets) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    // Send the ticket in the response
    res.status(200).json(tickets);


  } catch (error) {
    console.error("Error fetching all tickets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



exports.getCustomers = async (req, res) => {
  try {
    // Fetch customers with customerStatus "Trial" or "Licenser"
    const customers = await Leads.find({
      customerStatus: { $in: ["Trial", "Licenser"] },
    });

    if (!customers || customers.length === 0) {
      return res
        .status(404)
        .json({ message: "No customers found with Trial or Licenser status" });
    }

    // Respond with the list of customers
    res.status(200).json({
      success: true,
      data: customers,
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.updateTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    // Extract fields dynamically from req.body
    const updateFields = { ...req.body };

    // Update the ticket
    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      updateFields, // Dynamically apply fields from req.body
      { new: true } // Return the updated document
    );

    if (!updatedTicket) {
      // Return early if the ticket isn't found
      ActivityLog(req, "Failed: Ticket not found");
      return res.status(404).json({ message: "Ticket not found" });
    }

    // Pass operation details to middleware
    ActivityLog(req, "Successfully updated", updatedTicket._id);

    // Send success response
    return res.status(200).json({ message: "Ticket updated successfully", ticket: updatedTicket });
  } catch (error) {
    console.error("Error updating ticket:", error);

    // Log the error activity
    ActivityLog(req, "Failed to update");

    // Send error response
    return res.status(500).json({ message: "Internal server error" });
  }
};






// exports.deleteTicket = async (req, res) => {
//   try {
//     const { ticketId } = req.params;

//     // Delete the ticket
//     const deletedTicket = await Ticket.findByIdAndDelete(ticketId);

//     if (!deletedTicket) {
//       return res.status(404).json({ message: "Ticket not found" });
//     }

//     res.status(200).json({ message: "Ticket deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting ticket:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


const ActivityLog = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
  
    if (operationId) {
      log.operationId = operationId;
    }
  
    req.user = log;
  };




    //Clean Data 
    function cleanTicketData(data) {
      const cleanData = (value) => (value === null || value === undefined || value === 0 ? undefined : value);
      return Object.keys(data).reduce((acc, key) => {
        acc[key] = cleanData(data[key]);
        return acc;
      }, {});
    }
    


  // Function to generate the current date and time in a specified time zone
function generateOpeningDate(
  timeZone = "Asia/Kolkata",
  dateFormat = "YYYY-MM-DD",
  dateSplit = "-",
  timeFormat = "HH:mm:ss",
  timeSplit = ":"
) {
  // Get the current date-time in the specified time zone
  const localDate = moment.tz(new Date(), timeZone);

  // Format date
  let formattedDate = localDate.format(dateFormat);

  // Replace default separators in the date if a custom split character is provided
  if (dateSplit) {
    formattedDate = formattedDate.replace(/[-/]/g, dateSplit);
  }

  // Format time
  const formattedTime = localDate.format(timeFormat).replace(/:/g, timeSplit);

  // Get time zone abbreviation
  const timeZoneName = localDate.format("z");

  // Combine date, time, and time zone
  const dateTime = `${formattedDate} ${formattedTime} (${timeZoneName})`;

  return {
    date: formattedDate,
    time: `${formattedTime} (${timeZoneName})`,
    dateTime,
  };
}

// Usage example
const openingDate = generateOpeningDate();
console.log(openingDate.dateTime); // e.g., "2024-12-19 14:30:45 (IST)"

const createNewTicket = async (data, customerId, supportAgentId, userId, userName) => {
  const { dateTime } = generateOpeningDate(); // Auto-generate dateTime

  const newTicket = new Ticket({
    ...data,
    customerId,
    supportAgentId,
    openingDate: dateTime, // Set auto-generated openingDate here
    userId,
    userName,
    status: "Open",
  });

  return newTicket.save();
};

  
    // Validate data existing
    function validateCustomerAndSupportAgent( customerExists, supportAgentExists ,res ) {
      if (!customerExists) {
        res.status(404).json({ message: "Customer not found" });
        return false;
      }
      if (!supportAgentExists) {
        res.status(404).json({ message: "Support Agent not found." });
        return false;
      }
      return true;
    }
  
