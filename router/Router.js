const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')
const regionController = require("../controller/regionController");
const areaController = require("../controller/areaController");


const checkPermission = require('../controller/authController/permission');

const { verifyToken } = require('../controller/authController/middleware');

const ActivityLogGeneration = require('../controller/authController/activityLogController');

// login
router.post('/login',userController.login)

router.post('/verify-otp',userController.verifyOtp)

// region
router.post("/region",verifyToken,checkPermission('Super Admin','Add Region'), regionController.addRegion,ActivityLogGeneration('Super Admin','Add Region'));

router.get("/region/:regionId",verifyToken,checkPermission('Super Admin','View Region'), regionController.getRegion);

router.get("/regions",verifyToken,checkPermission('Super Admin','View Region'), regionController.getAllRegions);

router.put("/region/:regionId",verifyToken,checkPermission('Super Admin','Edit Region'), regionController.updateRegion,ActivityLogGeneration('Super Admin','Edit Region'));

router.delete("/region/:regionId",verifyToken,checkPermission('Super Admin','Delete Region'), regionController.deleteRegion,ActivityLogGeneration('Super Admin','Delete Region'));

// area
router.post("/area",verifyToken,checkPermission('Super Admin','Add Area'), areaController.addArea,ActivityLogGeneration('Super Admin','Add Area'));

router.get("/area/:areaId",verifyToken,checkPermission('Super Admin','View Area'), areaController.getArea);

router.get("/areas",verifyToken,checkPermission('Super Admin','View Area'), areaController.getAllAreas);

router.put("/area/:areaId",verifyToken,checkPermission('Super Admin','Edit Area'), areaController.updateArea,ActivityLogGeneration('Super Admin','Edit Area'));

router.delete("/area/:areaId",verifyToken,checkPermission('Super Admin','Delete Area'), areaController.deleteArea,ActivityLogGeneration('Super Admin','Delete Area'));

// router.post("/region",verifyToken,checkPermission('Super Admin','Area Manager','Region Manager','Sales Admin','Support Admin','BDAs','Supervisor','Support Agent','Add Region'), regionController.addRegion,ActivityLogGeneration('Super Admin','Area Manager','Region Manager','Sales Admin','Support Admin','BDAs','Supervisor','Support Agent','Add Region'));
// router.post("/region",verifyToken,checkPermission('SuperA','AM','RM','SalesA','SupportA','BDAs','Supervisor','SupportA','Add Region'), regionController.addRegion,ActivityLogGeneration('SuperA','AM','RM','SalesA','SupportA','BDAs','Supervisor','SupportA','Add Region'));
module.exports = router
