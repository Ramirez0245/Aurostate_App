const About = require('../../controllers/pages/About.controller')
const express = require('express')

const router = express.Router()

router.get('/', About.About_get)

module.exports = router