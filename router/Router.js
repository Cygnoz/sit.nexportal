const express = require("express")

const router = new express.Router()

const TicketController = require('../controller/ticketsController')

const checkPermission = require('../controller/authController/permission');

const { verifyToken } = require('../controller/authController/middleware');

const ActivityLogGeneration = require('../controller/authController/activityLogController');


router.post('/ticket',verifyToken,checkPermission('Add Ticket'),TicketController.addTicket,ActivityLogGeneration('Add Ticket'))

router.get('/tickets',verifyToken,checkPermission('View Ticket'),TicketController.getAllTickets)

router.get('/ticket/:ticketId',verifyToken,checkPermission('View Ticket'),TicketController.getTicket)

router.get('/getCustomers',TicketController.getCustomers)

router.put('/ticket/:ticketId',verifyToken,checkPermission('Edit Ticket'),TicketController.updateTicket)

// router.delete('/delete-ticket/:ticketId',verifyToken,checkPermission('Delete Ticket'),TicketController.deleteTicket)


module.exports = router
