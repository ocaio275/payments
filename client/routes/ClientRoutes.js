const router = require('express').Router()

const ClientController = require('../controller/ClientController')

router.post('/client', ClientController.webHook)

module.exports = router