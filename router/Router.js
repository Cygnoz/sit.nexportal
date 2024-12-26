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

// router.delete('/delete-lead/:leadId',verifyToken,checkPermission('Delete User'),leadController.deleteLead,ActivityLogGeneration('Delete Lead'))

router.get('/client/:id',leadController.getClientDetails)

router.put("/trial/:leadId", leadController.extendTrialDuration);


//Trial
router.put('/trial/:leadId',leadController.convertLeadToTrial)

router.get('/trial',leadController.getAllTrials)

router.put('/trials/:trialId',leadController.convertTrialToLicenser)



//add licenser
router.post('/licenser',verifyToken,checkPermission('Add Licenser'),licenserController.addLicenser,ActivityLogGeneration('Add Licenser'))

router.get('/licenser',verifyToken,checkPermission('View Licenser'),licenserController.getAllLicesner) 

router.get('/licenser/:licenserId',verifyToken,checkPermission('View Licenser'),licenserController.getLicenser)

router.put('/licenser/:id',verifyToken,checkPermission('Edit Licenser'),licenserController.editLicenser,ActivityLogGeneration('Edit Licenser'))

// router.delete('/delete-lead/:leadId',verifyToken,checkPermission('Delete User'),leadController.deleteLead,ActivityLogGeneration('Delete Lead'))

module.exports = router

