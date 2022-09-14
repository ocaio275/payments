const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const conn = require('../db/conn')
const logger = require('morgan')

const PaymentRoutes = require('./routes/PaymentRoutes')
app.use(logger('dev'))

app.use(express.json())

app.use('/payment', PaymentRoutes)

conn.sync().then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err))