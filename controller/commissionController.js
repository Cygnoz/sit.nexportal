const Commission = require('../database/model/commission');

// Add a new commission
exports.addCommission = async (req, res, next) => {
    try {
      const { profileName, commissionPercentage, thresholdAmount } = req.body;
  
      if (!profileName || commissionPercentage == null || thresholdAmount == null) {
        return res.status(400).json({ message: "All fields must be provided" });
      }
  
      // Validate commissionPercentage
      if (commissionPercentage < 0 || commissionPercentage > 100) {
        return res.status(400).json({ message: "Commission percentage must be between 0 and 100" });
      }
  
      // Check if profileName already exists
      const existingCommission = await Commission.findOne({ profileName });
      if (existingCommission) {
        return res.status(400).json({ message: "Profile name already exists" });
      }
  
      const newCommission = new Commission({ profileName, commissionPercentage, thresholdAmount });
      await newCommission.save();
  
      res.status(201).json({ message: "Commission added successfully", commission: newCommission });
  
      logOperation(req, "successfully", newCommission._id);
      next();
    } catch (error) {
      console.error("Error adding commission:", error);
      res.status(500).json({ message: "Internal server error" });
      logOperation(req, "Failed");
      next();
    }
  };
  

// Get a specific commission by ID
exports.getCommission = async (req, res) => {
  try {
    const { Id } = req.params;

    const commission = await Commission.findById(Id);
    if (!commission) {
      return res.status(404).json({ message: "Commission not found" });
    }

    res.status(200).json(commission);
  } catch (error) {
    console.error("Error fetching commission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all commissions
exports.getAllCommissions = async (req, res) => {
  try {
    const commissions = await Commission.find({});
    if (commissions.length === 0) {
      return res.status(404).json({ message: "No commissions found" });
    }

    res.status(200).json({ message: "Commissions retrieved successfully", commissions });
  } catch (error) {
    console.error("Error fetching all commissions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a specific commission
exports.updateCommission = async (req, res, next) => {
  try {
    const { Id } = req.params;
    const { profileName, commissionPercentage, thresholdAmount } = req.body;

    // Check for duplicate profileName
    const existingCommission = await Commission.findOne({
      profileName,
      _id: { $ne: Id },
    });
    if (existingCommission) {
      return res.status(400).json({ message: "Profile name already exists" });
    }

    const updatedCommission = await Commission.findByIdAndUpdate(
        Id,
      { profileName, commissionPercentage, thresholdAmount },
      { new: true }
    );

    if (!updatedCommission) {
      return res.status(404).json({ message: "Commission not found" });
    }

    res.status(200).json({ message: "Commission updated successfully", commission: updatedCommission });

    logOperation(req, "successfully", updatedCommission._id);
    next();
  } catch (error) {
    console.error("Error updating commission:", error);
    res.status(500).json({ message: "Internal server error" });
    logOperation(req, "Failed");
    next();
  }
};

// Delete a specific commission
exports.deleteCommission = async (req, res, next) => {
  try {
    const { Id } = req.params;

    const deletedCommission = await Commission.findByIdAndDelete(Id);
    if (!deletedCommission) {
      return res.status(404).json({ message: "Commission not found" });
    }

    res.status(200).json({ message: "Commission deleted successfully" });

    logOperation(req, "successfully");
    next();
  } catch (error) {
    console.error("Error deleting commission:", error);
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
