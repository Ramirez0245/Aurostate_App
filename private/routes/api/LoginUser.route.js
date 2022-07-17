const express = require('express');
const Login = require('../../controllers/api/LoginUser.controller')

const router = express.Router();

router.post('/', Login.checkAuthenticated, Login.Login_user_passport_post);
router.post('/', Login.checkAuthenticated, Login.Login_user_get)

module.exports = router; 