const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')

const checkPermission = require('../controller/permission');
const { verifyToken } = require('../controller/middleware');

router.post('/login',checkPermission(),userController.login)

router.post('/verify-otp',checkPermission(),userController.verifyOtp)


module.exports = router