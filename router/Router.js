const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')

const regionManagerController = require('../controller/regionManagerController')

const areaManagerController = require('../controller/areaManagerController')

const bdaController = require('../controller/bdaController')


const checkPermission = require('../controller/authController/permission');

const { verifyToken } = require('../controller/authController/middleware');

const ActivityLogGeneration = require('../controller/authController/activityLogController');

// User
router.post('/user',verifyToken,checkPermission('Add User'),userController.addUser,ActivityLogGeneration('Add User'))

router.get("/users",verifyToken,checkPermission('View User'), userController.getAllUsers);

router.get("/user/:userId",verifyToken,checkPermission('View User'), userController.getUser);

router.put("/user/:userId",verifyToken,checkPermission('Edit User'), userController.updateUser,ActivityLogGeneration('Edit User'));

router.delete("/user/:userId",verifyToken,checkPermission('Delete User'), userController.deleteUser,ActivityLogGeneration('Delete User'));

// Region manager
router.get("/region-manager-check/:id",verifyToken,checkPermission('Add Area Manager'), regionManagerController.addRegionManagerCheck);

router.post('/region-manager',verifyToken,checkPermission('Add Region Manager'),regionManagerController.addRegionManager,ActivityLogGeneration('Add Region Manager'))

router.get("/region-managers",verifyToken,checkPermission('View Region Manager'), regionManagerController.getAllRegionManager);

router.get("/region-managers/:id",verifyToken,checkPermission('View Region Manager'), regionManagerController.getRegionManager);

router.put("/region-managers/:id",verifyToken,checkPermission('Edit Region Manager'), regionManagerController.editRegionManager,ActivityLogGeneration('Edit Region Manager'));

router.get("/region-manager/:id/details",verifyToken,checkPermission('View Region Manager'), regionManagerController.getRegionManagerDetails);

router.delete("/region-managers/:id",verifyToken,checkPermission('Delete Region Manager'), regionManagerController.deleteRegionManager,ActivityLogGeneration('Delete Region Manager'));

// Area manager
router.put("/area-manager-check",verifyToken,checkPermission('Add Area Manager'), areaManagerController.addAreaManagerCheck);

router.post('/area-manager',verifyToken,checkPermission('Add Area Manager'),areaManagerController.addAreaManager,ActivityLogGeneration('Add Area Manager'))

router.get("/area-managers",verifyToken,checkPermission('View Area Manager'), areaManagerController.getAllAreaManager);

router.get("/area-managers/:id",verifyToken,checkPermission('View Area Manager'), areaManagerController.getAreaManager);

router.put("/area-managers/:id",verifyToken,checkPermission('Edit Area Manager'), areaManagerController.editAreaManager,ActivityLogGeneration('Edit Area Manager'));

router.delete("/area-managers/:id",verifyToken,checkPermission('Delete Area Manager'), areaManagerController.deleteAreaManager,ActivityLogGeneration('Delete Area Manager'));

router.get('/area-manager/:id/details',verifyToken,checkPermission('View Area Manager'), areaManagerController.getAreaManagerDetails);

// BDA
// Area manager
router.put("/bda-check",verifyToken,checkPermission('Add BDA'), bdaController.bdaCheck);

router.get("/bda-details/:id",verifyToken,checkPermission('View BDA'), bdaController.getBdaDetails);

router.get("/bda-details/:id/customers",verifyToken,checkPermission('View BDA'), bdaController.getLeadDetails);

router.post('/bda',verifyToken,checkPermission('Add BDA'),bdaController.addBda,ActivityLogGeneration('Add BDA'))

router.get("/bda",verifyToken,checkPermission('View BDA'), bdaController.getAllBda);

router.get("/bda/:id",verifyToken,checkPermission('View BDA'), bdaController.getBda);

router.put("/bda/:id",verifyToken,checkPermission('Edit BDA'), bdaController.editBda,ActivityLogGeneration('Edit BDA'));

router.delete("/bda/:id",verifyToken,checkPermission('Delete BDA'), bdaController.deleteBda,ActivityLogGeneration('Delete BDA'));

router.get('/get-activity-logs',verifyToken,checkPermission('View logs'),userController.getAllActivityLogs)


module.exports = router