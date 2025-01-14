const Activity = require("../database/model/activity")
const User = require("../database/model/user");
 
 
 
exports.addActivity = async (req, res, next) => {
  try {
    // Clean input data
    const cleanedData = cleanActivityData(req.body);
    const { activityType } = cleanedData;
 
    // Validate the activityType field
    if (!activityType) {
      return res.status(400).json({ message: "Activity type is required" });
    }
 
    // Define descriptions for each activity type
    const descriptions = {
      Mail: "Email sent",
      Meeting: "Meeting scheduled",
      Task: "Task assigned",
      Note: "Note added",
    };
 
    // Add the description dynamically based on activityType
    const description = descriptions[activityType] || "Activity recorded";
 
    // Extract user ID from the token
    const userId = req.user.id;
 
    // Fetch the user who is adding the activity
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
 
    // Combine cleaned data with activityType, description, and addedBy info
    const activityData = {
      ...cleanedData,
      activityType,
      description,
      userName: user.userName,  // Track who added the activity
      userRole: user.role,  // Optionally track user role
    };
 
    // Create and save the activity using the helper function
    const savedActivity = await createNewActivity(activityData);
 
    // Respond with success and the saved activity
    res.status(201).json({
      message: "Activity added successfully",
      savedActivity,
    });
 
    ActivityLog(req, "Successfully ", savedActivity._id);
    next(); // Pass control to the next middleware if any
  } catch (error) {
    console.error("Error adding activity:", error);
 
    ActivityLog(req, "Failed to add activity");
    next();
 
    res.status(500).json({ message: "Internal server error" });
  }
};
 
 
 
// Get Single Activity by ID
exports.getActivity = async (req, res) => {
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
 
 
  exports.getAllActivities = async (req, res) => {
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
 
 
  exports.editActivity = async (req, res, next) => {
    try {
      const { id: activityId } = req.params; // Extract activity ID from request parameters
      const { activityType, meetingStatus, taskStatus, ...rawActivityData } = req.body; // Extract activityType and other data
 
      // Validate the activity ID
      if (!activityId) {
        return res.status(400).json({ message: "Activity ID is required" });
      }
 
      // Clean the incoming activity data
      const cleanedData = cleanActivityData(rawActivityData);
 
      // Extract user ID from the token
      const userId = req.user.id;
 
      // Fetch the user performing the edit operation
      const user = await User.findById(userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
 
      // Initialize description
      let description = cleanedData.description || "Activity updated";
 
      // Update description based on meetingStatus or taskStatus
      if (activityType === "Meeting" && meetingStatus) {
        switch (meetingStatus) {
          case "Scheduled":
            description = "Meeting scheduled";
            break;
          case "Canceled":
            description = "Meeting canceled";
            break;
          case "Completed":
            description = "Meeting completed";
            break;
          default:
            description = "Meeting status updated";
        }
      } else if (activityType === "Task" && taskStatus) {
        switch (taskStatus) {
          case "Pending":
            description = "Task is pending";
            break;
          case "Completed":
            description = "Task completed";
            break;
          default:
            description = "Task status updated";
        }
      }
 
      // Combine cleaned data with activityType, userName, userRole, and updated description
      const updatedData = {
        ...cleanedData,
        activityType,
        userName: user.userName, // Track the user who edited
        userRole: user.role,     // Track the user's role
        meetingStatus,
        taskStatus,
        description,             // Updated description
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
 
      ActivityLog(req, "Successfully updated activity", updatedActivity._id);
      next(); // Pass control to the next middleware if any
 
    } catch (error) {
      console.error("Error updating activity:", error);
 
      ActivityLog(req, "Failed to update activity");
      next();
 
      res.status(500).json({ message: "Internal server error" });
    }
  };
 
 
  exports.deleteActivity = async (req, res,next) => {
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

  exports.getLeadsActivityDetails = async (req, res, next) => {
    try {
      const { leadId } = req.params;
      const { activityType, dateFilter } = req.query; // Extract filters from query parameters
 
      // Validate leadId
      if (!leadId) {
        return res.status(400).json({ message: "Lead ID is required" });
      }
 
      // Base query to find activities for a specific lead
      let query = { leadId };
 
      // Add filter for activityType if provided
      if (activityType) {
        query.activityType = activityType;
      }
 
      // Handle date filtering
      const currentDate = new Date();
      let startDate, endDate;
 
      switch (dateFilter) {
        case "tomorrow":
          startDate = new Date(currentDate);
          startDate.setDate(startDate.getDate() + 1);
          startDate.setHours(0, 0, 0, 0);
 
          endDate = new Date(startDate);
          endDate.setHours(23, 59, 59, 999);
          break;
 
        case "next7days":
          startDate = new Date(currentDate);
          startDate.setDate(startDate.getDate() + 1);
          startDate.setHours(0, 0, 0, 0);
 
          endDate = new Date(currentDate);
          endDate.setDate(endDate.getDate() + 7);
          endDate.setHours(23, 59, 59, 999);
          break;
 
        case "next30days":
          startDate = new Date(currentDate);
          startDate.setDate(startDate.getDate() + 1);
          startDate.setHours(0, 0, 0, 0);
 
          endDate = new Date(currentDate);
          endDate.setDate(endDate.getDate() + 30);
          endDate.setHours(23, 59, 59, 999);
          break;
 
        case "yesterday":
          startDate = new Date(currentDate);
          startDate.setDate(startDate.getDate() - 1);
          startDate.setHours(0, 0, 0, 0);
 
          endDate = new Date(startDate);
          endDate.setHours(23, 59, 59, 999);
          break;
 
        default:
          break;
      }
 
      // If date range is determined, add to the query
      if (startDate && endDate) {
        query.createdAt = { $gte: startDate, $lte: endDate };
      }
 
      // Fetch activities matching the query
      const activities = await Activity.find(query, {
        description: 1,
        userName: 1,
        createdAt: 1,
        emailSubject: 1,
        taskTitle: 1,
        note: 1,
        meetingTitle: 1,
        activityType: 1,
      }).sort({ createdAt: -1 }); // Sort by the most recent activity
 
      // Map data for response
      const activityDetails = activities.map(activity => {
        const activityInfo = {
          description: activity.description,
          userName: activity.userName,
          createdAt: activity.createdAt,
        };
 
        switch (activity.activityType) {
          case "Mail":
            activityInfo.emailSubject = activity.emailSubject;
            break;
          case "Task":
            activityInfo.taskTitle = activity.taskTitle;
            break;
          case "Note":
            activityInfo.note = activity.note;
            break;
          case "Meeting":
            activityInfo.meetingTitle = activity.meetingTitle;
            break;
          default:
            break;
        }
 
        return activityInfo;
      });
 
      // Respond with the filtered activities
      res.status(200).json({
        message: "Filtered activities retrieved successfully",
        activities: activityDetails,
      });
    } catch (error) {
      console.error("Error fetching filtered activities:", error);
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
 