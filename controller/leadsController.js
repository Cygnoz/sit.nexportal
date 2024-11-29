const Leads = require("../database/model/leads")
// const Region = require('../database/model/region')
// const Area = require('../database/model/area')


exports.addLead = async (req, res ) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Check if a lead with the same email already exists
    const existingLead = await Leads.findOne({ email });
    if (existingLead) {
      return res.status(400).json({ message: "A lead with this email already exists" });
    }

    // Create a new lead entry dynamically using req.body
    const newLead = new Leads(req.body);

    await newLead.save();
    res.status(201).json({ message: "Lead added successfully", lead: newLead });



  } catch (error) {
    console.error("Error adding lead:", error);
    res.status(500).json({ message: "Internal server error" });
   
  }
};


exports.getLead = async (req, res) => {
  try {
    const { leadId } = req.params;

    const lead = await Leads.findById(leadId);
    if (!lead) {
      return res.status(404).json({ message: "Leads not found" });
    }

    res.status(200).json(lead);

  } catch (error) {
    console.error("Error fetching region:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Leads.find();

    if (leads.length === 0) {
      return res.status(404).json({ message: "No Leads found" });
    }

    res.status(200).json({ message: "Leads retrieved successfully", leads });

  } catch (error) {
    console.error("Error fetching all Leads:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




exports.updateLead = async (req, res, next) => {
  try {
    const { leadId } = req.params;

    // Extract fields dynamically from req.body
    const updateFields = { ...req.body };

    // Check for duplicate email or phone (excluding the current lead)
    const existingLead = await Leads.findOne({
      $or: [{ email: updateFields.email }, { phone: updateFields.phone }],
      _id: { $ne: leadId },
    });

    if (existingLead) {
      let message = "Conflict: ";
      if (existingLead.email === updateFields.email) message += "Email already exists. ";
      if (existingLead.phone === updateFields.phone) message += "Phone already exists. ";
      return res.status(400).json({ message: message.trim() });
    }

    // Update the lead
    const updatedLead = await Leads.findByIdAndUpdate(
      leadId,
      updateFields, // Dynamically apply fields from req.body
      { new: true } // Return the updated document
    );

    if (!updatedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead updated successfully", lead: updatedLead });

    // Pass operation details to middleware
    // ActivityLog(req, "successfully", updatedLead._id);
    // next();
  } catch (error) {
    console.error("Error updating lead:", error);
    res.status(500).json({ message: "Internal server error" });
  //   ActivityLog(req, "Failed");
  //   next();
   }
};



exports.deleteLead = async (req, res, next) => {
  try {
    const { leadId } = req.params;

    // Delete the lead
    const deletedLead = await Leads.findByIdAndDelete(leadId);

    if (!deletedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead deleted successfully" });

    // Pass operation details to middleware
    // ActivityLog(req, "successfully");
    // next();
  } catch (error) {
    console.error("Error deleting lead:", error);
    res.status(500).json({ message: "Internal server error" });

    // Log the failure
    // ActivityLog(req, "Failed");
    // next();
  }
};
