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
