const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')

const checkPermission = require('../controller/permission');
const { verifyToken } = require('../controller/middleware');

router.post('/add-user',verifyToken,checkPermission('Super Admin','Added User'),userController.addUser)

router.get('/get-activity-logs',verifyToken,checkPermission('Super Admin','viewed Activity logs'),userController.getAllActivityLogs)


module.exports = router