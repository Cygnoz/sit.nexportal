require('dotenv').config()

const express = require('express')

const cors = require('cors')

const server = express()

const Router = require("./router/Router")

require('./database/connection/connection')

server.use(cors())

server.use(express.json())

server.use(Router)

const PORT = 3004

server.get('/',(req,res)=>{
    res.status(200).json("BillBizz Sales and Support server started - Tickets")
})

server.listen(PORT,()=>{
    console.log(`BillBizz Sales and Support server tickets started at port : ${PORT}`);

})

