const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
    profileName: { type: String },
    commissionPoint: { type: Number},
    recurringPoint: { type: Number},
    perPointValue: { type: Number},
    thresholdLicense: { type: Number},
    remark: { type: String },
  }, {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  });
  

  module.exports = mongoose.model('Commission', commissionSchema);