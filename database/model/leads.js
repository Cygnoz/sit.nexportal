// v1.0

const mongoose = require("mongoose");
const { Schema } = mongoose;

const leadSchema = new Schema({

  regionId:{ type: String },
  areaId:{ type: String },
  bdaId:{ type: String },
  customerId:{type:String},
  image:{ type: String },
  salutation :{ type: String },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  email: { type: String },
  phone: { type: String },
  website: { type: String },
  leadSource: { type: String },


  address: { type: String },
  city:{ type: String },
  state: { type: String },

  licenseType: { type: String },
  startDate: { type: String },
  endDate:{ type: String },

  companyId: { type: String },
  companyName: { type: String },
  companyPhone: { type: String },
  companyAddress: { type: String },
  pinCode: { type: String },

  licensorStatus:{ type: String },
  leadStatus:{ type: String },
  customerStatus:{ type: String }

});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
