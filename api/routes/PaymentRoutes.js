/* Creating a new router object. */
const router = require('express').Router()

/* Importing the PaymentController.js file. */
const PaymentController = require('../controller/PaymentController')

/* This is a route. It is a way to tell the server what to do when a user goes to a certain URL. */
router.post('/create', PaymentController.createPayment)
router.get('/', PaymentController.getPayment)

/* Exporting the router object so that it can be used in other files. */
module.exports = router