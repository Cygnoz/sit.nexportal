const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')

const checkPermission = require('../controller/authController/permission');

const { verifyToken } = require('../controller/authController/middleware');

const ActivityLogGeneration = require('../controller/authController/activityLogController');


router.post('/user',verifyToken,checkPermission('Add User'),userController.addUser,ActivityLogGeneration('Add User'))

router.get("/users",verifyToken,checkPermission('View User'), userController.getAllUsers);

router.get("/user/:userId",verifyToken,checkPermission('View User'), userController.getUser);

router.put("/user/:userId",verifyToken,checkPermission('Edit User'), userController.updateUser,ActivityLogGeneration('Edit User'));

router.delete("/user/:userId",verifyToken,checkPermission('Delete User'), userController.deleteUser,ActivityLogGeneration('Delete User'));


router.get('/get-activity-logs',verifyToken,checkPermission('View logs'),userController.getAllActivityLogs)


module.exports = router