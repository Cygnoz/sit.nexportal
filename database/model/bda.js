const mongoose = require('mongoose');

const bdaSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    personalEmail: { type: String},
  age: { type: Number},
  bloodGroup: { type: String},
  address: {
    street1: { type: String},
    street2: { type: String},
  },
  city: { type: String },
  country: { type: String },
  state: { type: String},
  adhaarNo: { type: String},
  panNo: { type: String },
  dateOfJoining: { type: Date },
  workEmail: { type: String},
  workPhone: { type: String},
  salaryType:{ type: String},
  salaryAmount:{ type: Number},
  status: { type: String},
  region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region'},
  area: { type: mongoose.Schema.Types.ObjectId, ref: 'Area'},
  commission: { type: mongoose.Schema.Types.ObjectId, ref: 'Commission'},
  bankDetails: {
    bankName: { type: String},
    bankBranch: { type: String},
    bankAccountNo: { type: String},
    ifscCode: { type: String},
  },
});

module.exports = mongoose.model('Bda', bdaSchema);

