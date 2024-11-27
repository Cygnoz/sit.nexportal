const express = require("express")

const router = new express.Router()



const checkPermission = require('../controller/authController/permission');

const { verifyToken } = require('../controller/authController/middleware');

const ActivityLogGeneration = require('../controller/authController/activityLogController');


module.exports = router