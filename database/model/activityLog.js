// v1.0

const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activity: { type: String},
  status: {type: String, required: true, enum: ['allowed', 'denied']},
  timestamp: { type: String },
  action:{type : String}
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);
