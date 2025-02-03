const express = require('express');
const incomingMessage = require('../../app/controllers/incomingMessage')
const sendWhatsAppMessage = require("../../app/controllers/sendMessage")
const router = express.Router()


// get messages

router.post('/sendmessage', sendWhatsAppMessage)

router.post('/incoming', incomingMessage)

// post messages

module.exports = router;