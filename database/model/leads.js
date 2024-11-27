// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

const leadSchema = new Schema({
    
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  website: { type: String },
  leadSource: { type: String },
  region: { type: String },
  area: { type: String },
  assignBda: { type: String },
  companyId: { type: String },
  companyName: { type: String },
  companyPhone: { type: String },
  companyAddress: { type: String },
  pinCode: { type: String },
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
