const mongoose = require("mongoose");
const moment = require("moment");
const Payroll = require("../database/model/payroll");
const RegionManager = require("../database/model/regionManager");
const AreaManager = require("../database/model/areaManager");
const Bda = require("../database/model/bda");
const Supervisor = require("../database/model/supervisor");
const SupportAgent = require("../database/model/supportAgent");
const Leads = require("../database/model/leads");
const ActivityLog = require("../database/model/activityLog");




exports.generatePayroll = async (req, res , next) => {
  try {
    const { month, year } = req.body;
    const userId = req.user.id;
    const payrollMonth = `${year}-${month}`;

    const startDate = moment(`${payrollMonth}-01`).startOf("month").format("YYYY-MM-DD HH:mm:ss");
    const endDate = moment(`${payrollMonth}-01`).endOf("month").format("YYYY-MM-DD HH:mm:ss");

    // Check if payroll already exists for this month
    const existingPayroll = await Payroll.find({ month: payrollMonth });
    if (existingPayroll.length > 0) {
      return res.status(200).json({ message: "Payroll already generated for this month." });
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
    let nextId = 1;
    const lastPayroll = await Payroll.findOne().sort({ _id: -1 });
    if (lastPayroll) {
      const lastId = parseInt(lastPayroll.payslipId.slice(8));
      nextId = lastId + 1;
    }

    for (const { model, role, hasCommission } of staffRoles) {
      // Fetch only staff who joined ON or BEFORE the payrollMonth
      const staffList = await model.find({
        status: "Active",
        dateOfJoining: { $lte: endDate } // Ensure staff joined on or before the month
      }).populate({
        path: "commission",
        select: "commissionPoint recurringPoint perPointValue thresholdLicense",
      });

      for (const staff of staffList) {
        const { _id, dateOfJoining, salaryAmount, commission } = staff;
        const joiningMonthYear = moment(dateOfJoining).format("YYYY-MM");

        // Skip staff if payrollMonth is before their joining month
        if (joiningMonthYear > payrollMonth) {
          continue;
        }

        let adjustedSalary = salaryAmount;

        // If the staff joined within the payroll month, calculate partial salary
        if (joiningMonthYear === payrollMonth) {
          const joiningDate = moment(dateOfJoining);
          const payrollDate = moment(`${year}-${month}-01`);
          const endOfMonth = payrollDate.clone().endOf("month");
          let workingDays = 0;
          for (let d = joiningDate.clone(); d.isBefore(endOfMonth); d.add(1, "days")) {
            if (d.isoWeekday() !== 6 && d.isoWeekday() !== 7) {
              workingDays++;
            }
          }

          const perDaySalary = salaryAmount / 22;
          adjustedSalary = Number((perDaySalary * workingDays).toFixed(0));
        }

        let newLicenseEarnings = 0,
          recuringAmount = 0,
          totalLicenses = 0,
          recurringLicenses = 0;

        if (hasCommission && commission) {
          totalLicenses = await Leads.countDocuments({
            [role]: _id,
            customerStatus: "Licenser",
            licensorDate: { $gte: startDate, $lt: endDate },
          });
          console.log("total license",totalLicenses);
          
          recurringLicenses = await Leads.countDocuments({
            [role]: _id,
            customerStatus: "Licenser",
            renewalDate: { $gte: startDate, $lt: endDate },
          });

          
          
          if (totalLicenses >= commission.thresholdLicense) {
            const newLicenses = totalLicenses - commission.thresholdLicense;
            const licenseCommissionPoint = newLicenses * commission.commissionPoint;
            newLicenseEarnings = licenseCommissionPoint * commission.perPointValue;

            const renewalCommissionPoint = recurringLicenses * commission.recurringPoint;
            recuringAmount = renewalCommissionPoint * commission.perPointValue;
          }
        }

        const totalSalary = hasCommission
          ? Number((adjustedSalary + newLicenseEarnings + recuringAmount).toFixed(0))
          : adjustedSalary;

        const existingPayrollEntry = await Payroll.findOne({
          staffId: _id,
          month: payrollMonth,
        });

        const payRollId = `PAYROLL-${nextId.toString().padStart(4, "0")}`;
        nextId++;

        if (!existingPayrollEntry) {
          payrollEntries.push({
            staffId: _id,
            payRollId,
            payRollStatus: "Pending Generation",
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
            generatedBy: userId,
          });
        }
      }
    }

    if (payrollEntries.length > 0) {
      await Payroll.insertMany(payrollEntries);
    }

    res.status(200).json({
      message: "Payroll generated successfully.",
      entries: payrollEntries,
    });
    logOperation(req, "successfully");
      next();
  } catch (error) {
    console.error("Error generating payroll:", error.message);
    res.status(500).json({ message: error.message });
  }
};




exports.getAllPayrolls = async (req, res) => {
  try {
    const { month, year } = req.params; // Extract month and year from params
    const payrollMonth = `${year}-${month}`;

    // Construct start and end dates for filtering
    // const startDate = moment(`${year}-${month}-01`).startOf("month").toDate();
    // const endDate = moment(`${year}-${month}-01`).endOf("month").toDate();

    const payrolls = await Payroll.find({
      month: payrollMonth
    }).populate({
      path: "staffId",
      select: "user",
      populate: { path: "user", select: "userName role -_id" }
    });

    res.status(200).json(payrolls);
  } catch (error) {
    console.error("Error fetching payrolls:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




exports.getPayrollById = async (req, res) => {
  try {
    const { id } = req.params;
    const payroll = await Payroll.findById(id)
    .populate({
      path: "staffId",
      select: "user", // Only include `user` in staffId
      populate: { path: "user", select: "userName role userImage -_id" } // Nested population, only `userName` and `role`
    })
  
      .populate("commissionProfile", "profileName commissionPoint recurringPoint thresholdLicense")
      .populate("approvedBy", "userName")
      .populate("generatedBy", "userName"); // Ensure generatedBy exists in schema

    if (!payroll) {
      return res.status(404).json({ message: "Payroll not found" });
    }

    res.status(200).json(payroll);
  } catch (error) {
    console.error("Error fetching payroll:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



exports.updatePayroll = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const { payslipStatus, ...data } = req.body; // Extract payslipStatus separately
    const actionDate = new Date().toISOString(); // Capture current date-time

    const updateFields = { ...data };
    let action = "Edit"; // Default action

    if (payslipStatus) {
      if (payslipStatus === "Approval Granted") {
        updateFields.payslipStatus = "Approval Granted";
        updateFields.approvalDate = actionDate;
        updateFields.approvedBy = userId;
        action = "Approved";
      } else {
        updateFields.payslipStatus = "Awaiting Approval";
      }
    }

    // Update the payroll document
    const payroll = await Payroll.findByIdAndUpdate(
      id,
      { ...updateFields },
      { new: true }
    );

    if (!payroll) {
      return res.status(404).json({ message: "Payroll not found" });
    }

    // Log activity
    const activity = new ActivityLog({
      userId: req.user.id,
      operationId: id,
      activity: `${req.user.userName} Successfully ${action} Payroll.`,
      timestamp: actionDate,
      action: action,
      status: "Successfully",
      screen: "Payroll",
    });
    await activity.save();

    res.status(200).json({ message: "Payroll updated successfully", payroll });
  } catch (error) {
    console.error("Error updating payroll:", error);

    // Log failure activity
    const failActivity = new ActivityLog({
      userId: req.user.id,
      operationId: req.params.id,
      activity: `${req.user.userName} Failed to update Payroll.`,
      timestamp: new Date().toISOString(),
      action: "Update",
      status: "Failed",
      screen: "Payroll",
    });
    await failActivity.save();

    res.status(500).json({ message: "Internal server error" });
  }
};


// Logging operation middleware
const logOperation = (req, status, operationId = null) => {
  const { id, userName } = req.user || {};
  const log = { id, userName, status };

  if (operationId) {
    log.operationId = operationId;
  }

  req.user = log;
};