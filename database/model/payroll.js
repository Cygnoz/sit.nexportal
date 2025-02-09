const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema(
  {
    staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true },
    payslipStatus: { type: String },
    basicSalary: { type: Number },
    commissionProfile: { type: String },
    totalLicenses: { type: Number, default: 0 },
    recurringLicenses: { type: Number, default: 0 },
    newLicenseEarnings: { type: Number, default: 0 },
    recuringAmount: { type: Number, default: 0 },
    totalSalary: { type: Number, required: true },
    TravelAllowance: { type: Number, default: 0 },
    comments: { type: String, default: '' },
    month: { type: String },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

module.exports = mongoose.model('Payroll', payrollSchema);
