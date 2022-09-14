const router = require('express').Router()

const PaymentController = require('../controller/PaymentController')

router.post('/create', PaymentController.createPayment)
router.get('/', PaymentController.getPayment)

module.exports = router