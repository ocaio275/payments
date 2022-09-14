/* Creating a route for the webhook. */
const router = require('express').Router()

/* Importing the ClientController.js file. */
const ClientController = require('../controller/ClientController')

/* Creating a route for the webhook. */
router.post('/client', ClientController.webHook)

module.exports = router