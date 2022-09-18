/* Importing the required modules. */
const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const conn = require('../db/conn')
const logger = require('morgan')
require('./helper/backup-database')


/* Importing the PaymentRoutes.js file from the routes folder. */
const PaymentRoutes = require('./routes/PaymentRoutes')

/* A middleware that logs the requests to the console. */
app.use(logger('dev'))

/* A middleware that parses the incoming request body and makes it available as a JavaScript object. */
app.use(express.json())

/* Telling the app to use the PaymentRoutes.js file from the routes folder. */
app.use('/payment', PaymentRoutes)

/* Syncing the connection to the database and then listening to the port 5000. */
conn.sync().then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err))