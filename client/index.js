/* Importing the express module, creating an express app, importing the morgan module, and importing
the conn module. */
const express = require('express')
const app = express()
const logger = require('morgan')
const conn = require('../db/conn')

/* Importing the ClientRoutes module. */
const ClientRoutes = require('./routes/ClientRoutes')


/* Using the morgan module to log the requests. */
app.use(logger('dev'))

/* Parsing the body of the request. */
app.use(express.json())

app.use('/', ClientRoutes)


/* Syncing the database and then listening on port 3000. */
conn
    .sync()
    .then(() =>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))

