// controllers/categoryController.js
const Category = require("../database/model/category");

// Add a new category
exports.addCategory = async (req, res, next) => {
  try {
    const { categoryName, description } = req.body;
    if (!categoryName) {
      return res.status(400).json({ message: "Category name is required" });
    }
    const existingCategory = await Category.findOne({ categoryName });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const category = new Category({ categoryName, description });
    await category.save();
    res.status(201).json({ message: "Category added successfully", category });
    logOperation(req, "successfully", category._id);
    next();
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

// Get a specific category
exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: "Categories retrieved successfully", categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a category
exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { categoryName, description } = req.body;
    const existingCategory = await Category.findOne({ categoryName });
    if (existingCategory && existingCategory._id.toString() !== id) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const category = await Category.findByIdAndUpdate(
      id,
      { categoryName, description },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category updated successfully", category });
    logOperation(req, "successfully", category._id);
    next();
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

// Delete a category
exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
    logOperation(req, "successfully");
    next();
  } catch (error) {
    console.error("Error deleting category:", error);
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
  