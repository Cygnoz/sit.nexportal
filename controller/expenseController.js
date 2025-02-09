// controllers/expenseController.js
const Expense = require("../database/model/expense");

// Add a new expense
exports.addExpense = async (req, res, next) => {
  try {
    const { image, expenseName, date, expenseAccount, amount, category, note } = req.body;
    if (!expenseName || !date || !expenseAccount || !amount || !category) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }
    const expense = new Expense({ image, expenseName, date, expenseAccount, amount, category, note });
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
    const expense = await Expense.findById(id).populate("category");
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
    const expenses = await Expense.find().populate("category");
    res.status(200).json({ message: "Expenses retrieved successfully", expenses });
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update an expense
exports.updateExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { image, expenseName, date, expenseAccount, amount, category, note } = req.body;
    const expense = await Expense.findByIdAndUpdate(
      id,
      { image, expenseName, date, expenseAccount, amount, category, note },
      { new: true }
    );
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense updated successfully", expense });
    logOperation(req, "successfully", expense._id);
    next();
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

// Delete an expense
exports.deleteExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByIdAndDelete(id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
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