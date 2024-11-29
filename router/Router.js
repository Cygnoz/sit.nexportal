const express = require("express")

const router = new express.Router()



// const checkPermission = require('../controller/authController/permission');

// const { verifyToken } = require('../controller/authController/middleware');

// const ActivityLogGeneration = require('../controller/authController/activityLogController');

const leadController = require('../controller/leadsController')

//add lead
router.post('/add-lead',leadController.addLead)

router.get('/get-all-lead',leadController.getAllLeads)

router.get('/get-lead/:leadId',leadController.getLead)

router.put('/update-lead/:leadId',leadController.updateLead)

router.delete('/delete-lead/:leadId',leadController.deleteLead)

module.exports = router
