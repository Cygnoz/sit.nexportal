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
      const { targetType } = req.params;
 
      if (!targetType) {
        return res.status(400).json({ error: "targetType parameter is required." });
      }
 
      if (!["Region", "Area", "Bda"].includes(targetType)) {
        return res.status(400).json({
          error: "Invalid targetType. Allowed values: Region, Area, Bda.",
        });
      }
 
      // Define filters based on targetType
      let filters = {};
      if (targetType === "Region") {
        filters = { targetType: { $in: ["Region", "Area", "Bda"] } };
      } else if (targetType === "Area") {
        filters = { targetType: { $in: ["Area", "Bda"] } };
      } else if (targetType === "Bda") {
        filters = { targetType: "Bda" };
      }
 
      // Fetch data based on filters
      const targets = await Target.find(filters)
        .populate("region", "_id regionName")
        .populate("area", "_id areaName")
        .populate({
          path: "bda",
          select: "user",
          populate: {
            path: "user",
            select: "userName userImage",
          },
        });
 
      // Separate targets into categories
      const regionTargets = [];
      const areaTargets = [];
      const bdaTargets = [];
 
      let totalRegionTarget = 0;
      let totalAreaTarget = 0;
      let totalBdaTarget = 0;
 
      targets.forEach((item) => {
        if (item.targetType === "Region") {
          regionTargets.push(item);
          totalRegionTarget += item.target; // Sum targets for regions
        } else if (item.targetType === "Area") {
          areaTargets.push(item);
          totalAreaTarget += item.target; // Sum targets for areas
        } else if (item.targetType === "Bda") {
          bdaTargets.push(item);
          totalBdaTarget += item.target; // Sum targets for BDAs
        }
      });
 
      // Prepare response structure
      const response = {
        message: "Targets retrieved successfully",
        totalRegionTarget,
        totalAreaTarget,
        totalBdaTarget,
        region: regionTargets.length ? regionTargets : null,
        area: areaTargets.length ? areaTargets : null,
        bda: bdaTargets.length ? bdaTargets : null,
      };
 
      res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching targets:", error);
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