const mongoose = require('mongoose');

const regionManagerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String},
  age: { type: Number},
  bloodGroup: { type: String},
  address: {
    street1: { type: String},
    street2: { type: String},
  },
  city: { type: String },
  state: { type: String},
  adhaarNo: { type: String},
  panNo: { type: String },
  dateOfJoining: { type: Date },
  workEmail: { type: String},
  workPhone: { type: String},
  region: { type: String},
  commission: { type: Number},
  bankDetails: {
    bankName: { type: String},
    bankBranch: { type: String},
    bankAccountNo: { type: String},
    ifscCode: { type: String},
  },
});

module.exports = mongoose.model('RegionManager', regionManagerSchema);

