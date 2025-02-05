// controllers/targetController.js
const Target = require("../database/model/target");
const Area = require("../database/model/area")
const User = require('../database/model/user')


function cleanTargetData(data) {
  const cleanData = (value) =>
    value === null || value === undefined || value === "" || value === 0
      ? undefined
      : value;
  return Object.keys(data).reduce((acc, key) => {
    acc[key] = cleanData(data[key]);
    return acc;
  }, {});
}


function createNewTarget(data) {
  const newTarget = new Target(data);
  return newTarget.save();
}


exports.addTarget = async (req, res , next) => {
    try {
      // Clean input data
      const cleanedData = cleanTargetData(req.body);
      const { region, area, bda, month, target, targetType } = cleanedData;
  
      // Validate targetType
      if (!targetType) {
        return res.status(400).json({ error: "targetType is required." });
      }
      if (!["Region", "Area", "Bda"].includes(targetType)) {
        return res.status(400).json({
          error: "Invalid targetType. Allowed values: Region, Area, Bda.",
        });
      }
  
      // Validate required fields based on targetType
      if (targetType === "Region" && !region) {
        return res
          .status(400)
          .json({ error: "region is required for targetType Region." });
      }
      if (targetType === "Area" && !area) {
        return res
          .status(400)
          .json({ error: "area is required for targetType Area." });
      }
      if (targetType === "Bda" && !bda) {
        return res
          .status(400)
          .json({ error: "bda is required for targetType Bda." });
      }
      if (!month || target === undefined) {
        return res
          .status(400)
          .json({ error: "month and target are required." });
      }
  
      // Create a new target using the cleaned data
      const savedTarget = await createNewTarget(cleanedData);
  
      // Send success response
      res.status(201).json({ message: "Target added successfully" });
  
      // Log activity
      ActivityLog(req, "successfully", savedTarget._id);
      next()
    } catch (error) {
      console.error("Error adding Target:", error);
      res.status(500).json({ message: "Internal server error" });
      ActivityLog(req, "Failed");
      next()
    }
  };
  


  exports.getAllTargets = async (req, res) => {
    try {
      const { targetType } = req.params; // Get targetType from URL parameters
  
      // Validate the targetType parameter
      if (!targetType) {
        return res.status(400).json({ error: "targetType parameter is required." });
      }
      if (!["Region", "Area", "Bda"].includes(targetType)) {
        return res.status(400).json({
          error: "Invalid targetType. Allowed values: Region, Area, Bda.",
        });
      }
  
      // Retrieve all targets with the specified targetType  
      const targets = await Target.find({ targetType })
      .populate("region", "_id regionName") // Fetch only _id and regionName
      .populate("area", "_id areaName") // Fetch only _id and areaName
      .populate({
        path: "bda",
        select: "user", // Select only the user field from Bda
        populate: {
          path: "user", // Populate user details from User collection
          select: "userName userImage", // Fetch only userName and userImage
        },
      });
    
      // Calculate the total target sum
      const totalTarget = targets.reduce((sum, item) => sum + item.target, 0);
  
      res.status(200).json({
        message: "Target retrieved successfully",
        totalTarget,
        targets,
      });
    } catch (error) {
        console.error("Error adding Target:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  



  exports.updateTarget = async (req, res, next) => {
    try {
      const updateData = {
        ...req.body
      };
  
      const updatedTarget = await Target.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );
  
      if (!updatedTarget) {
        return res.status(404).json({ error: "Target not found" });
      }

      ActivityLog(req, "Successfully", updatedTarget._id);
      res.status(200).json({ message: "Target updated successfully" });
      next();

    } catch (error) {
      console.error("Error updating Target:", error);
      ActivityLog(req, "Failed");
      res.status(500).json({ message: "Internal server error." });
      next()

    }
  };
  


// Delete Target
exports.deleteTarget = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Check if the target exists
      const target = await Target.findById(id);
      if (!target) {
        return res.status(404).json({ message: "Target not found." });
      }
  
      // Delete the target
      const deletedTarget = await Target.findByIdAndDelete(id);
      if (!deletedTarget) {
        return res.status(404).json({ message: "Target not found." });
      }
  
      // Log the operation
      ActivityLog(req, "successfully", deletedTarget._id);
      next();
  
      res.status(200).json({ message: "Target deleted successfully." });
    } catch (error) {
      console.error("Error deleting target:");
      res.status(500).json({ message: "Internal server error." });
      ActivityLog(req, "failed");
      next();
    }
  };





const ActivityLog = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
  
    if (operationId) {
      log.operationId = operationId;
    }
  
    req.user = log;
  };