const User = require("../database/model/user"); 
const ActivityLog = require('../database/model/activityLog'); 
const bcrypt = require('bcrypt');

exports.addUser = async (req, res,next) => {
  try {
    const { userImage , userName, email, phoneNo, password, role } = req.body;
    // Validate the required fields
    if (!userName ||!email  ||!phoneNo || !role) {
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
      userImage,
      userName,
      phoneNo,
      email,
      password:hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User added successfully" });
    
    if (newUser) {
      const operationId = newUser._id
      const { id, userName } = req.user;
      req.user = { id, userName, status: "successfully",operationId };
      next();
    }

  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
    const { id, userName } = req.user;
    req.user = { id, userName, status: "Failed" };
    next();
  }
};

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.password = undefined
    res.status(200).json(user);
     
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
   
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const AllUsers = users.map((history) => {
      const { password, ...rest } = history.toObject(); 
      return rest;
    });

    res.status(200).json({ message: "Users retrieved successfully", AllUsers });
      
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
    
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { userImage, userName, email, phoneNo, role } = req.body;

    // Validate input fields
    if (!userName || !email || !phoneNo || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if any fields conflict with existing users (excluding the current user)
    const existingUser = await User.findOne({
      $or: [{ userName }, { email }, { phoneNo }],
      _id: { $ne: userId },
    });

    if (existingUser) {
      let message = "Conflict: ";
      if (existingUser.userName === userName) message += "userName already exists. ";
      if (existingUser.email === email) message += "userEmail already exists. ";
      if (existingUser.phoneNo === phoneNo) message += "phone No already exists. ";
      return res.status(400).json({ message: message.trim() });
    }

    // Update the user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {userImage, userName, email, phoneNo, role },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });

    // Pass operation details to middleware
    if (updatedUser) {
      const operationId = updatedUser._id
      const { id, userName } = req.user;
      req.user = { id, userName, status: "successfully",operationId };
      next();
    }

  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
    const { id, userName } = req.user;
    req.user = { id, userName, status: "Failed" };
    next();
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    // Delete the user
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });

    // Pass operation details to middleware
    const operationId = deletedUser._id
      const { id, userName } = req.user;
      req.user = { id, userName, status: "successfully",operationId };
      next();

  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
    const { id, userName } = req.user;
    req.user = { id, userName, status: "Failed" };
    next();
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