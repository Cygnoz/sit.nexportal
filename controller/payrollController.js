
const mongoose = require('mongoose');
const moment = require('moment');
const Payroll = require("../database/model/payroll");
const RegionManager = require("../database/model/regionManager");
const AreaManager = require("../database/model/areaManager");
const Bda = require("../database/model/bda");
const Supervisor = require("../database/model/supervisor");
const SupportAgent = require("../database/model/supportAgent");
const Leads = require("../database/model/leads");

exports.generatePayroll = async (req, res) => {
  try {
    const { month, year } = req.body;
    const payrollMonth = `${year}-${month}`;
    console.log("Payroll Month:", payrollMonth);
    
    const startDate = moment(`${payrollMonth}-01`).startOf('month').format("YYYY-MM-DD HH:mm:ss");
    const endDate = moment(`${payrollMonth}-01`).endOf('month').format("YYYY-MM-DD HH:mm:ss");

    // Check if payroll already exists for this month
    const existingPayroll = await Payroll.find({ month: payrollMonth });
    if (existingPayroll.length > 0) {
      
      return res.status(200).json({ 
        message: "Payroll already generated for this month."
      });
    }

    // Define staff roles & models
    const staffRoles = [
      { model: RegionManager, role: "regionManager", hasCommission: true },
      { model: AreaManager, role: "areaManager", hasCommission: true },
      { model: Bda, role: "bdaId", hasCommission: true },
      { model: Supervisor, role: "supervisor", hasCommission: false },
      { model: SupportAgent, role: "supportAgent", hasCommission: false },
    ];

    const payrollEntries = [];

    for (const { model, role, hasCommission } of staffRoles) {
      const staffList = await model.find({ status: "Active" }).populate({
        path: "commission",
        select: "commissionPoint recurringPoint perPointValue thresholdLicense",
      });

      for (const staff of staffList) {
        const { _id, dateOfJoining, salaryAmount, commission } = staff;
        const joiningMonthYear = moment(dateOfJoining).format("YYYY-MM");
        
        let adjustedSalary = salaryAmount;

        // Adjust salary for joining month
        if (joiningMonthYear === payrollMonth) {
          const joiningDate = moment(dateOfJoining);
          const payrollDate = moment(`${year}-${month}-01`);
          const endOfMonth = payrollDate.clone().endOf('month');

          let workingDays = 0;
          for (let d = joiningDate.clone(); d.isBefore(endOfMonth); d.add(1, 'days')) {
            if (d.isoWeekday() !== 6 && d.isoWeekday() !== 7) { // Exclude weekends
              workingDays++;
            }
          }
          
          const perDaySalary = salaryAmount / 22;
          adjustedSalary = Number((perDaySalary * workingDays).toFixed(0));
        }

        let newLicenseEarnings = 0, recuringAmount = 0, totalLicenses = 0, recurringLicenses = 0;

        if (hasCommission && commission) {
          // Fetch total and recurring licenses
          totalLicenses = await Leads.countDocuments({
            [role]: _id,
            customerStatus: "Licenser",
            licensorDate: { $gte: startDate, $lt: endDate },
          });

          recurringLicenses = await Leads.countDocuments({
            [role]: _id,
            customerStatus: "Licenser",
            renewalDate: { $gte: startDate, $lt: endDate },
          });

          // Calculate commission earnings
          if (totalLicenses >= commission.thresholdLicense) {
            const newLicenses = totalLicenses - commission.thresholdLicense;
            const licenseCommissionPoint = newLicenses * commission.commissionPoint;
            newLicenseEarnings = licenseCommissionPoint * commission.perPointValue;

            const renewalCommissionPoint = recurringLicenses * commission.recurringPoint;
            recuringAmount = renewalCommissionPoint * commission.perPointValue;
          }
        }

        // If no commission, basic salary = total salary
        const totalSalary = hasCommission 
          ? Number((adjustedSalary + newLicenseEarnings + recuringAmount).toFixed(0))
          : adjustedSalary;

        // Ensure only one payroll document per staff per month
        const existingPayrollEntry = await Payroll.findOne({ staffId: _id, month: payrollMonth });
        if (!existingPayrollEntry) {
          payrollEntries.push({
            staffId: _id,
            payslipStatus: "Pending Generation",
            basicSalary: adjustedSalary,
            commissionProfile: hasCommission && commission ? commission._id : null,
            totalLicenses,
            recurringLicenses,
            newLicenseEarnings,
            recuringAmount,
            totalSalary,
            TravelAllowance: 0,
            comments: "",
            month: payrollMonth,
            generatedAt: new Date(),
          });
        }
      }
    }

    if (payrollEntries.length > 0) {
      await Payroll.insertMany(payrollEntries);
    }
    res.status(200).json({ message: "Payroll generated successfully.", entries: payrollEntries });
  } catch (error) {
    console.error("Error generating payroll:", error.message);
    res.status(500).json({ message: error.message });
  }
};
