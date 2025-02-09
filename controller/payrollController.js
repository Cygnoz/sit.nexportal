const moment = require("moment");
const Payroll = require("../database/model/payroll");
const RegionManager = require("../database/model/regionManager");
const Leads = require("../database/model/leads");

exports.generatePayroll = async (req, res) => {
  try {
    const { month, year } = req.body;
    const payrollMonth = `${year}-${month}`;
    
    // Check if payroll already exists
    const existingPayroll = await Payroll.findOne({ month: payrollMonth });
    if (existingPayroll) {
      return res.status(400).json({ message: "Payroll already generated for this month." });
    }

    // Fetch active RegionManagers
    const regionManagers = await RegionManager.find({ status: "Active" }).populate("commission");
    if (!regionManagers.length) return res.status(404).json({ message: "No active Region Managers found." });

    const payrollRecords = [];

    for (const manager of regionManagers) {
      const { _id, dateOfJoining, salaryAmount, commission } = manager;
      
      // Fetch totalLicenses count
      const totalLicenses = await Leads.countDocuments({
        regionManager: _id,
        customerStatus: "Licenser",
        licensorDate: { $regex: `^${year}-${month}` },
      });

      // Fetch recurringLicenses count
      const recurringLicenses = await Leads.countDocuments({
        regionManager: _id,
        customerStatus: "Licenser",
        renewalDate: { $regex: `^${year}-${month}` },
      });

      let newLicenseEarnings = 0;
      let recuringAmount = 0;
      let totalSalary = salaryAmount;
      
      if (commission && totalLicenses >= commission.thresholdLicense) {
        const newLicenses = totalLicenses - commission.thresholdLicense;
        const licenseCommissionPoint = newLicenses * commission.commissionPoint;
        newLicenseEarnings = licenseCommissionPoint * commission.perPointValue;

        const renewalCommissionPoint = recurringLicenses * commission.recurringPoint;
        recuringAmount = renewalCommissionPoint * commission.perPointValue;
      }
      
      totalSalary += newLicenseEarnings + recuringAmount;

      payrollRecords.push({
        staffId: _id,
        payslipStatus: "Pending Generation",
        basicSalary: salaryAmount,
        commissionProfile: commission ? commission._id : null,
        totalLicenses,
        recurringLicenses,
        newLicenseEarnings,
        recuringAmount,
        totalSalary,
        TravelAllowance: 0,
        comments: "",
        month: payrollMonth,
      });
    }

    // Insert payroll records
    await Payroll.insertMany(payrollRecords);
    res.status(200).json({ message: "Payroll generated successfully.", payrollRecords });
  } catch (error) {
    console.error("Error generating payroll:", error.message);
    res.status(500).json({ message: error.message });
  }
};


// const mongoose = require('mongoose');
// const moment = require('moment');
// const Payroll = require("../database/model/payroll");
// const RegionManager = require("../database/model/regionManager");
// const Leads = require("../database/model/leads");

// exports.generatePayroll = async (req, res) => {
//   try {
//     const { month, year } = req.body;
//     const payrollMonth = `${year}-${month}`;

//     // Check if payroll already exists
//     const existingPayroll = await Payroll.findOne({ month: payrollMonth });
//     if (existingPayroll) {
//       return res.status(400).json({ message: "Payroll already generated for this month." });
//     }

//     const regionManagers = await RegionManager.find({ status: "Active" }).populate("commission");

//     const payrollEntries = [];
//     for (const manager of regionManagers) {
//       const { _id, dateOfJoining, salaryAmount, commission } = manager;
//       const joiningMonthYear = moment(dateOfJoining).format("YYYY-MM");
//       let adjustedSalary = salaryAmount;

//       if (joiningMonthYear === payrollMonth) {
//         const joiningDate = moment(dateOfJoining);
//         const payrollDate = moment(`${year}-${month}-01`);
//         const endOfMonth = payrollDate.clone().endOf('month');
        
//         let workingDays = 0;
//         for (let d = joiningDate.clone(); d.isBefore(endOfMonth); d.add(1, 'days')) {
//           if (d.isoWeekday() !== 6 && d.isoWeekday() !== 7) { // Exclude Saturday & Sunday
//             workingDays++;
//           }
//         }

//         const perDaySalary = salaryAmount / 22;
//         adjustedSalary = perDaySalary * workingDays;
//       }

//       // Fetch total and recurring licenses
//       const totalLicenses = await Leads.countDocuments({
//         regionManager: _id,
//         customerStatus: "Licenser",
//         licensorDate: { $regex: `^${payrollMonth}` },
//       });

//       const recurringLicenses = await Leads.countDocuments({
//         regionManager: _id,
//         customerStatus: "Licenser",
//         renewalDate: { $regex: `^${payrollMonth}` },
//       });

//       let newLicenseEarnings = 0, recuringAmount = 0;
//       if (totalLicenses >= commission.thresholdLicense) {
//         const newLicenses = totalLicenses - commission.thresholdLicense;
//         const licenseCommissionPoint = newLicenses * commission.commissionPoint;
//         newLicenseEarnings = licenseCommissionPoint * commission.perPointValue;

//         const renewalCommissionPoint = recurringLicenses * commission.recurringPoint;
//         recuringAmount = renewalCommissionPoint * commission.perPointValue;
//       }

//       const totalSalary = adjustedSalary + newLicenseEarnings + recuringAmount;

//       payrollEntries.push({
//         staffId: _id,
//         payslipStatus: "Pending Generation",
//         basicSalary: adjustedSalary,
//         commissionProfile: commission ? commission._id : null,
//         totalLicenses,
//         recurringLicenses,
//         newLicenseEarnings,
//         recuringAmount,
//         totalSalary,
//         TravelAllowance: 0,
//         comments: "",
//         month: payrollMonth,
//         generatedAt: new Date(),
//       });
//     }

//     await Payroll.insertMany(payrollEntries);
//     res.status(200).json({ message: "Payroll generated successfully." });
//   } catch (error) {
//     console.error("Error generating payroll:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// };
