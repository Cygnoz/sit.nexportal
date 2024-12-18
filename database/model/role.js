// v1.0

const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
  action: { type: String, required: true },
  note: { type: String, required: true },
},{_id:false});

const RoleSchema = new mongoose.Schema({
  roleName: { type: String, required: true },
  permissions: [PermissionSchema],
});

module.exports = mongoose.model('Role', RoleSchema);
