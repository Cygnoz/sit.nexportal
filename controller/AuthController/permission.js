// v1.0

const User = require('../../database/model/user');
const ActivityLog = require('../../database/model/activityLog');
const moment = require("moment-timezone");



const checkPermission = (...role) => {
  return async (req, res, next) => {
    try {

      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
      const permissionAction = role[role.length - 1];
      const Action = permissionAction.split(' ')[0];
      const Screen = permissionAction.split(' ')[1]

       const generatedDateTime = generateTimeAndDateForDB(
        "Asia/Kolkata",
        "DD/MM/YY",
        "/"
      );
      const actionTime = generatedDateTime.dateTime;

      if (role.includes(user.role)){
        // const activity = new ActivityLog({
        //   userId: req.user.id, // Assuming your User model has a username field
        //   activity: `${req.user.userName} successfully ${permissionAction}.`, // Log the note associated with the permission
        //   timestamp: actionTime,
        //   action: Action,
        //   status: "allowed"
        // });
        // await activity.save();
        
        return next();

      } else {
          // Log the unauthorized access attempt
          const unauthorizedActivity = new ActivityLog({
            userId: req.user.id,
            activity: `${req.user.userName} Tried to  ${permissionAction} without proper permission.`,
            timestamp: actionTime,
            action: Action,
            status: "denied",
            screen: Screen
          });
          await unauthorizedActivity.save();
  
          // Permission not found, deny access
          return res.status(403).json({ message: `Access denied: Insufficient permissions to perform ${permissionAction}` });
        }
      
     
    } catch (err) {
      console.error('Error in checkPermission:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
};



// // Function to generate time and date for storing in the database
function generateTimeAndDateForDB(
  timeZone,
  dateFormat,
  dateSplit,
  baseTime = new Date(),
  timeFormat = "HH:mm:ss",
  timeSplit = ":"
) {
  // Convert the base time to the desired time zone
  const localDate = moment.tz(baseTime, timeZone);

  // Format date and time according to the specified formats
  let formattedDate = localDate.format(dateFormat);

  // Handle date split if specified
  if (dateSplit) {
    // Replace default split characters with specified split characters
    formattedDate = formattedDate.replace(/[-/]/g, dateSplit); // Adjust regex based on your date format separators
  }

  const formattedTime = localDate.format(timeFormat);
  const timeZoneName = localDate.format("z"); // Get time zone abbreviation

  // Combine the formatted date and time with the split characters and time zone
  const dateTime = `${formattedDate} ${formattedTime
    .split(":")
    .join(timeSplit)} (${timeZoneName})`;

  return {
    date: formattedDate,
    time: `${formattedTime} (${timeZoneName})`,
    dateTime: dateTime,
  };
}

module.exports = checkPermission