const express = require("express")

const router = new express.Router()



const checkPermission = require('../controller/authController/permission');

const { verifyToken } = require('../controller/authController/middleware');

const ActivityLogGeneration = require('../controller/authController/activityLogController');

const leadController = require('../controller/leadsController')

//add lead
router.post('/leads',verifyToken,checkPermission('Add Lead'),leadController.addLead,ActivityLogGeneration('Add Lead'))

router.get('/leads',verifyToken,checkPermission('View Lead'),leadController.getAllLeads) 

router.get('/lead/:leadId',verifyToken,checkPermission('View Lead'),leadController.getLead)

router.put('/lead/:id',verifyToken,checkPermission('Edit Lead'),leadController.editLead,ActivityLogGeneration('Edit Lead'))

// router.delete('/delete-lead/:leadId',verifyToken,checkPermission('Delete User'),leadController.deleteLead,ActivityLogGeneration('Delete Lead'))


module.exports = router

