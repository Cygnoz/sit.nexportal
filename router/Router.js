const express = require("express")

const router = new express.Router()



const checkPermission = require('../controller/permission');
const { verifyToken } = require('../controller/middleware');



module.exports = router