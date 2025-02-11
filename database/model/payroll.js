const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema(
  {
    staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'RegionManager' },
    payslipStatus: { type: String },
    payslipId: { type: String },
    basicSalary: { type: Number },
    commissionProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'Commission'},
    totalLicenses: { type: Number, default: 0 },
    recurringLicenses: { type: Number, default: 0 },
    newLicenseEarnings: { type: Number, default: 0 },
    newLicenseEarningsReason: { type: String},
    recuringAmount: { type: Number, default: 0 },
    recuringAmountReason: { type: String},
    totalSalary: { type: Number, required: true },
    totalSalaryReason: { type: String },
    TravelAllowance: { type: Number, default: 0 },
    TravelAllowanceReason: { type: String },
    comments: { type: String },
    month: { type: String },
    approvalDate: { type: String },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

module.exports = mongoose.model('Payroll', payrollSchema);
