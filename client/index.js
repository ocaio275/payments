const express = require('express')
const app = express()
const logger = require('morgan')
const conn = require('../db/conn')

const ClientRoutes = require('./routes/ClientRoutes')

app.use(logger('dev'))
app.use(express.json())

app.use('/', ClientRoutes)


conn
    .sync()
    .then(() =>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))

