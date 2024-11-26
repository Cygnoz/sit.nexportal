const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')
const regionController = require("../controller/regionController");

const checkPermission = require('../controller/permission');
const { verifyToken } = require('../controller/middleware');

router.post('/login',userController.login)

router.post('/verify-otp',userController.verifyOtp)

router.post("/region", regionController.addRegion);

router.get("/region/:regionCode", regionController.getRegion);

router.get("/regions", regionController.getAllRegions);

router.put("/region/:regionCode", regionController.updateRegion);

router.delete("/region/:regionCode", regionController.deleteRegion);

module.exports = router