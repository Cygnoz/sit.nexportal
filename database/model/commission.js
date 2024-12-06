const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
    profileName: String,
    commissionPercentage: Number,
    thresholdAmount: Number,
  }, {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  });
  

  module.exports = mongoose.model('Commission', commissionSchema);