// controllers/expenseController.js
const Expense = require("../database/model/expense");
const ActivityLog = require('../database/model/activityLog');

// Add a new expense
exports.addExpense = async (req, res, next) => {
  try {
    
    const { image, expenseName, date, expenseAccount, amount, category, note } = req.body;
    const data = req.body
     data.addedBy = req.user.id
    data.status = "Pending Approval"
    if (!expenseName || !date || !expenseAccount || !amount || !category) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

// employee id
let nextId = 1;
const lastUser = await Expense.findOne().sort({ _id: -1 }); // Sort by creation date to find the last one
if (lastUser) {
  const lastId = parseInt(lastUser.expenseId.slice(6));
  // Extract the numeric part from the customerID
  nextId = lastId + 1; // Increment the last numeric part
}
const expenseId = `EXPID-${nextId.toString().padStart(4, "0")}`;
data.expenseId = expenseId

    const expense = new Expense({ ...data });
    await expense.save();
    res.status(201).json({ message: "Expense added successfully", expense });
    logOperation(req, "successfully", expense._id);
    next();
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

// Get a specific expense
exports.getExpense = async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await Expense.findById(id)
        .populate("category","categoryName")
        .populate("approvedBy", "userName role") // Populate approvedBy with selected fields
        .populate("addedBy", "userName role employeeId") // Populate addedBy with selected fields
        .populate("rejectedBy", "userName role"); // Populate addedBy with selected fields
  
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
  
      res.status(200).json(expense);
    } catch (error) {
      console.error("Error fetching expense:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

// Get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
      const expenses = await Expense.find()
      .populate("category", "categoryName") // Only fetching categoryName
      .populate("addedBy", "userName role")
      res.status(200).json({ message: "Expenses retrieved successfully", expenses });
    } catch (error) {
      console.error("Error fetching expenses:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  



exports.updateExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const { status, ...data } = req.body; // Extract status separately
    const actionDate = new Date().toISOString(); // Capture current date-time

    const updateFields = { ...data };
    let action = "Edit"; // Default action

    if (status) {
      if (status === "Rejected") {
        updateFields.rejectedDate = actionDate;
        updateFields.rejectedBy = userId;
        action = "Rejected";
      } else if (status === "Approval Granted") {
        updateFields.approvalDate = actionDate;
        updateFields.approvedBy = userId;
        action = "Approved";
      }
    }

    // Update the expense with new values
    const expense = await Expense.findByIdAndUpdate(
      id,
      { ...updateFields, status }, // Merge status update
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Log activity
    const activity = new ActivityLog({
      userId: req.user.id,
      operationId: id,
      activity: `${req.user.userName} Successfully ${action} Expense.`,
      timestamp: actionDate,
      action: action,
      status: "Successfully",
      screen: "Expense",
    });
    await activity.save();

    res.status(200).json({ message: "Expense updated successfully", expense });
  } catch (error) {
    console.error("Error updating expense:", error);

    // Log failure activity
    const failActivity = new ActivityLog({
      userId: req.user.id,
      operationId: req.params.id,
      activity: `${req.user.userName} Failed to update Expense.`,
      timestamp: new Date().toISOString(),
      action: "Update",
      status: "Failed",
      screen: "Expense",
    });
    await failActivity.save();

    res.status(500).json({ message: "Internal server error" });
  }
};



// Delete an expense
exports.deleteExpense = async (req, res, next) => {
    try {
      const { id } = req.params;
      const expense = await Expense.findById(id);
  
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
  
      // Allow deletion only if status is "Pending Approval"
      if (expense.status !== "Pending Approval") {
        return res
          .status(400)
          .json({ message: "Cannot delete expense as it has already been processed." });
      }
  
      // Delete the expense
      await Expense.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Expense deleted successfully" });
      logOperation(req, "successfully");
      next();
    } catch (error) {
      console.error("Error deleting expense:", error);
      res.status(500).json({ message: "Internal server error" });
      logOperation(req, "Failed");
      next();
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