// controllers/targetController.js
const Target = require("../database/model/target");
const Area = require("../database/model/area")
const User = require('../database/model/user')
const RegionManager = require("../database/model/regionManager");
const AreaManager = require("../database/model/areaManager");
const Bda = require("../database/model/bda");
const mongoose = require("mongoose");


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
      const userId = req.user.id;
      console.log("User ID:", userId);
   
      const user = await User.findById(userId).select("role");
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
   
      const { role } = user;
      console.log("User Role:", role);
      let query = {};
   
      if (role === "Super Admin") {
        query = {}; // Super Admin gets all targets
      }
      else if (role === "Region Manager") {
        // Get the Region Manager's assigned region
        const regionManager = await RegionManager.findOne({ user: userId }).populate("region");
        if (!regionManager || !regionManager.region) {
          return res.status(404).json({ error: "Region Manager or assigned region not found." });
        }
   
        const regionId = regionManager.region._id;
        console.log("Region ID:", regionId);
   
        // Get all areas under this region
        const areas = await Area.find({ region: regionId }).select("_id");
        const areaIds = areas.map(a => a._id);
   
        console.log("Area IDs under Region:", areaIds);
   
        // Get all BDAs under these areas
        const bdas = await Bda.find({ area: { $in: areaIds } }).select("_id");
        const bdaIds = bdas.map(b => new mongoose.Types.ObjectId(b._id)); // Ensure ObjectId type
   
        console.log("BDA IDs under Region:", bdaIds);
   
        query = {
          $or: [
            { area: { $in: areaIds }, targetType: "Area" }, // Area targets
            { bda: { $in: bdaIds }, targetType: "Bda" } // BDA targets
          ]
        };
      }
      else if (role === "Area Manager") {
        // Get the Area Manager's assigned area
        const areaManager = await AreaManager.findOne({ user: userId }).populate("area");
        if (!areaManager || !areaManager.area) {
          return res.status(404).json({ error: "Area Manager or assigned area not found." });
        }
   
        const areaId = areaManager.area._id;
   
        // Get all BDAs under this area
        const bdas = await Bda.find({ area: areaId }).select("_id");
        const bdaIds = bdas.map(b => new mongoose.Types.ObjectId(b._id)); // Ensure ObjectId type
   
        console.log("BDA IDs under Area Manager:", bdaIds);
   
        query = {
          bda: { $in: bdaIds },
          targetType: "Bda"
        };
      }
      else {
        return res.status(403).json({ error: "Unauthorized role." });
      }
   
      console.log("Final Query:", JSON.stringify(query, null, 2));
   
      // Fetch targets based on the updated query
      const targets = await Target.find(query)
        .populate("region", "_id regionName")
        .populate("area", "_id areaName")
        .populate({
          path: "bda",
          select: "_id user",
          populate: {
            path: "user",
            select: "userName userImage",
          },
        });
   
      console.log("Fetched Targets:", targets);
   
      if (!targets || targets.length === 0) {
        return res.status(404).json({ message: "No targets found." });
      }
   
      // Categorize targets
      const regionTargets = targets.filter(item => item.targetType === "Region");
      const areaTargets = targets.filter(item => item.targetType === "Area");
      const bdaTargets = targets.filter(item => item.targetType === "Bda");
   
      // Calculate totals safely (ensure target is a number)
      const totalRegionTarget = regionTargets.reduce((sum, target) => sum + (target.target || 0), 0);
      const totalAreaTarget = areaTargets.reduce((sum, target) => sum + (target.target || 0), 0);
      const totalBdaTarget = bdaTargets.reduce((sum, target) => sum + (target.target || 0), 0);
   
      return res.status(200).json({
        message: "Targets retrieved successfully",
        totalRegionTarget,
        totalAreaTarget,
        totalBdaTarget,
        region: regionTargets.length ? regionTargets : [],
        area: areaTargets.length ? areaTargets : [],
        bda: bdaTargets.length ? bdaTargets : [],
      });
   
    } catch (error) {
      console.error("Error fetching targets:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
   

  exports.getTargetById = async (req, res) => {
    try {
      const { id } = req.params;
 
      // Fetch the target by ID and populate necessary fields
      const target = await Target.findById(id)
        .populate("region", "_id regionName")  // Populate region details
        .populate("area", "_id areaName")    // Populate area details
        .populate({
          path: "bda",
          select: "user",  // Only populate the user field
          populate: {
            path: "user",  // Populate user details
            select: "userName userImage",
          },
        });
 
      // Check if the target exists
      if (!target) {
        return res.status(404).json({ error: "Target not found" });
      }
 
      // Return the target with populated details
      res.status(200).json({
        message: "Target retrieved successfully",
        target,
      });
    } catch (error) {
      console.error("Error fetching target:", error);
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