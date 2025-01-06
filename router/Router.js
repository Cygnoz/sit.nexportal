

const express = require("express")
 
const router = new express.Router()
 
 
 
const checkPermission = require('../controller/authController/permission');
 
const { verifyToken } = require('../controller/authController/middleware');
 
const ActivityLogGeneration = require('../controller/authController/activityLogController');
 
const leadController = require('../controller/leadsController')
 
const licenserController = require('../controller/licenserController')
 
 
//add lead
router.post('/leads',verifyToken,checkPermission('Add Lead'),leadController.addLead,ActivityLogGeneration('Add Lead'))
 
router.get('/leads',verifyToken,checkPermission('View Lead'),leadController.getAllLeads)
 
router.get('/lead/:leadId',verifyToken,checkPermission('View Lead'),leadController.getLead)
 
router.put('/lead/:id',verifyToken,checkPermission('Edit Lead'),leadController.editLead,ActivityLogGeneration('Edit Lead'))
 
router.delete('/lead/:leadId',verifyToken,checkPermission('Delete Lead'),leadController.deleteLead,ActivityLogGeneration('Delete Lead'))
 
router.get('/client/:id',verifyToken,checkPermission('View Trial'),leadController.getClientDetails)
 
//Trial
router.put('/trial/:leadId',verifyToken,checkPermission('Convert Trial'),leadController.convertLeadToTrial,ActivityLogGeneration('Convert Trial'))
 
router.get('/trial',verifyToken,checkPermission('View Trial'),leadController.getAllTrials)
 
router.put('/trials/:trialId',verifyToken,checkPermission('Convert Licenser'),leadController.convertTrialToLicenser,ActivityLogGeneration('Convert Licenser'))
 
router.post("/trial/:trialId",verifyToken,checkPermission('Extend Trial'),leadController.extendTrialDuration, ActivityLogGeneration('Extend Trial'));

router.get("/customer/statistics",verifyToken,leadController.getStatistics)
 
//add licenser
router.post('/licenser',verifyToken,checkPermission('Add Licenser'),licenserController.addLicenser,ActivityLogGeneration('Add Licenser'))
 
router.get('/licenser',verifyToken,checkPermission('View Licenser'),licenserController.getAllLicensers)
 
router.get('/licenser/:licenserId',verifyToken,checkPermission('View Licenser'),licenserController.getLicenser)
 
router.put('/licenser/:id',verifyToken,checkPermission('Edit Licenser'),licenserController.editLicenser,ActivityLogGeneration('Edit Licenser'))
 
// router.delete('/licenser/:licenserId',verifyToken,checkPermission('Delete Licenser'),leadController.deleteLead,ActivityLogGeneration('Delete Licenser'))
 
 
module.exports = router