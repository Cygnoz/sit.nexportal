const Activity = require("../database/model/activity")
 
 
 
 
exports.addActivity = async (req, res, next) => {
    try {
    //   const { id: userId, userName } = req.user; // Extract user details
      const cleanedData = cleanActivityData(req.body);
 
 
      const { activityType } = cleanedData;
 
      // Validate the activityType field
      if (!activityType) {
        return res.status(400).json({ message: "Activity type is required" });
      }
   
      // Combine cleaned data with activityType
      const activityData = {
        ...cleanedData,
        activityType,
      };
 
      // Create and save the activity using the helper function
      const savedActivity = await createNewActivity(activityData);
 
      // Respond with success and the saved activity
      res.status(201).json({
        message: "Activity added successfully",
        savedActivity,
      });
 
      ActivityLog(req, "successfully", savedActivity._id);
      next(); // Pass control to the next middleware if any
   
    } catch (error) {
      console.error("Error adding activity:", error);
 
 
      ActivityLog(req, "Failed");
      next();
 
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
 
 
// Get Single Activity by ID
exports.getActivity = async (req, res, next) => {
    try {
      const { id } = req.params; // Extract activity ID from request parameters
 
      // Find the activity by ID
      const activity = await Activity.findById(id);
 
      if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
      }
 
      // Respond with the found activity
      res.status(200).json({
        message: "Activity retrieved successfully",
        activity,
      });
    } catch (error) {
      console.error("Error retrieving activity:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
 
  exports.getAllActivities = async (req, res, next) => {
    try {
      const { activityType } = req.query; // Optional query parameter for filtering by activity type
      const { leadId } = req.params; // Extract leadId from request parameters
 
      // Validate leadId
      if (!leadId) {
        return res.status(400).json({ message: "Lead ID is required" });
      }
 
      // Build query based on leadId and optional activityType
      const query = {
        leadId, // Filter activities for the specific leadId
        ...(activityType && { activityType }), // Optionally filter by activityType
      };
 
      // Find all activities matching the query
      const activities = await Activity.find(query);
 
      // Check if any activities exist
      if (!activities.length) {
        return res.status(404).json({ message: "No activities found for the specified lead" });
      }
 
      // Respond with all matching activities
      res.status(200).json({
        message: "Activities retrieved successfully",
        activities,
      });
    } catch (error) {
      console.error("Error retrieving activities:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
 
 
  exports.editActivity = async (req, res) => {
    try {
      const { id: activityId } = req.params; // Extract activity ID from request parameters
      const { activityType, ...rawActivityData } = req.body; // Extract activityType and other data
 
      // Validate the activity ID
      if (!activityId) {
        return res.status(400).json({ message: "Activity ID is required" });
      }
 
      // Clean the incoming activity data
      const cleanedData = cleanActivityData(rawActivityData);
 
      // Combine cleaned data with activityType
      const updatedData = {
        ...cleanedData,
        activityType,
      };
 
      // Find and update the activity
      const updatedActivity = await Activity.findByIdAndUpdate(activityId, updatedData, { new: true });
 
      // Check if the activity exists
      if (!updatedActivity) {
        return res.status(404).json({ message: "Activity not found" });
      }
 
      // Respond with success and the updated activity
      res.status(200).json({
        message: "Activity updated successfully",
        updatedActivity,
      });
 
      ActivityLog(req, "successfully", updatedActivity._id);
      next(); // Pass control to the next middleware if any
 
    } catch (error) {
      console.error("Error updating activity:", error);
 
      ActivityLog(req, "Failed");
      next();
 
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
 
  exports.deleteActivity = async (req, res) => {
    try {
      const { activityId } = req.params; // Extract activityId from request parameters
 
      // Validate the activityId
      if (!activityId) {
        return res.status(400).json({ message: "Activity ID is required" });
      }
 
      // Find and delete the activity
      const deletedActivity = await Activity.findByIdAndDelete(activityId);
 
      // Check if the activity exists
      if (!deletedActivity) {
        return res.status(404).json({ message: "Activity not found" });
      }
 
      // Respond with success
      res.status(200).json({
        message: "Activity deleted successfully",
        deletedActivity,
      });
 
      ActivityLog(req, "successfully", deletedActivity._id);
      next();
 
    } catch (error) {
      console.error("Error deleting activity:", error);
 
      ActivityLog(req, "Failed");
      next();
 
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
 
 
 
 
  // Clean Email Data
  function cleanActivityData(data) {
    const cleanData = (value) => (value === null || value === undefined || value === "" || value === 0 ? undefined : value);
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = cleanData(data[key]);
      return acc;
    }, {});
  }
 
  // Create New Email
  function createNewActivity(data, ) {
    const newActivity = new Activity({...data,});
    return newActivity.save();
  }
 
 
 
const ActivityLog = (req, status, operationId = null) => {
    const { id, userName } = req.user;
    const log = { id, userName, status };
 
    if (operationId) {
      log.operationId = operationId;
    }
 
    req.user = log;
  };
 