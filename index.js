require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/routing')
require('./config/db')

const taskManager = express()
taskManager.use(cors())
taskManager.use(express.json())
taskManager.use(router)

const PORT = 3000 || process.env.PORT

taskManager.listen(PORT,()=>{
    console.log("Server strated listening");
})

taskManager.get('/',(req,res)=>{
    res.status(200).send("Server strated listening")
})