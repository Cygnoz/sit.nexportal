const User = require("../database/model/user"); // Replace with the correct path to your User model
const ActivityLog = require('../database/model/activityLog'); // Adjust the path as needed
const bcrypt = require('bcrypt');

exports.addUser = async (req, res) => {
  try {
    const { userName, email, phoneNo, password, role } = req.body;

    // Validate the required fields
    if (!userName ||!email || !password ||!phoneNo || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if any of the fields (userName, userEmail, userNum) are already in use
    const existingUser = await User.findOne({
      $or: [{ userName }, { email }, { phoneNo }]
    });

    if (existingUser) {
      let message = "Conflict: ";
      if (existingUser.userName === userName) message += "userName already exists. ";
      if (existingUser.email === email) message += "userEmail already exists. ";
      if (existingUser.phoneNo === phoneNo) message += "phone No already exists. ";
      return res.status(400).json({ message: message.trim() });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user entry
    const newUser = new User({
      userName,
      phoneNo,
      email,
      password:hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getAllActivityLogs = async (req, res) => {
  try {
    // Fetch all activity logs and populate the `userId` field
    const logs = await ActivityLog.find({})
      .populate('userId', 'userName role') 
      .exec();

    // Return the logs in the response
    res.status(200).json({ message: 'Activity logs retrieved successfully', logs });
  } catch (error) {
    console.error('Error retrieving activity logs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};