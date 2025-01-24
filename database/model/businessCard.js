// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Business Card Schema
const businessCardSchema = new Schema(
  {
    profilePhoto: { type: Boolean },
    name: { type: Boolean },
    designation: { type: Boolean },
    employeeId: { type: Boolean },
    region: { type: Boolean },
    email: { type: Boolean },
    phoneNo: { type: Boolean },
    address: { type: Boolean },
    companyLogo: { type: Boolean },
    logoTitle: { type: Boolean },
    companyInfo: { type: Boolean },
    layout: { type: String },
  },
  { timestamps: true }
);

const BusinessCard = mongoose.model("BusinessCard", businessCardSchema);

module.exports = BusinessCard;