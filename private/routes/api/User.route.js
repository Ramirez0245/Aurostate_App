const express = require('express')
const User = require('../../controllers/api/User.controller')
const router = express.Router()

router.post('/', checkAuthenticated ,User.User_post)
router.get('/', checkAuthenticated ,User.User_get)
router.get('/islogin', User.User_IsLogin )

function checkAuthenticated(req, res, next) {
    console.log('checkAuthenticated ran')
    if(req.isAuthenticated()) {
        return next()
    }
    return res.send('Please login first')
}

module.exports = router