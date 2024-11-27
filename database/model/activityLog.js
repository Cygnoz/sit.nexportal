// v1.0

const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  operationId: { type: String, default: undefined},
  activity: { type: String},
  status: {type: String},
  timestamp: { type: String },
  action:{type : String},
  screen:{type : String}
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);
