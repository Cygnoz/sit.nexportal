const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')

const checkPermission = require('../controller/AuthController/permission');

const { verifyToken } = require('../controller/AuthController/middleware');

const ActivityLogGeneration = require('../controller/AuthController/activityLogController');


router.post('/user',verifyToken,checkPermission('Super Admin','Add User'),userController.addUser,ActivityLogGeneration('user','Add User'))

router.get("/users",verifyToken,checkPermission('Super Admin','View Users'), userController.getAllUsers);

router.get("/user/:userId",verifyToken,checkPermission('Super Admin','View User'), userController.getUser);

router.put("/user/:userId",verifyToken,checkPermission('Super Admin','Edit User'), userController.updateUser,ActivityLogGeneration('user','Edit User'));

router.delete("/user/:userId",verifyToken,checkPermission('Super Admin','Delete User'), userController.deleteUser,ActivityLogGeneration('user','Delete User'));


router.get('/get-activity-logs',verifyToken,checkPermission('Super Admin','Viewed Activity logs'),userController.getAllActivityLogs)


module.exports = router