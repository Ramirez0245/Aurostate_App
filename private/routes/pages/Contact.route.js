const Contact = require('../../controllers/pages/Contact.controller')
const express = require('express')

const router = express.Router()

router.get('/', Contact.Contact_get)

module.exports = router