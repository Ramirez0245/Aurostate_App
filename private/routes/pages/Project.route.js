const Projects = require('../../controllers/pages/Project.controller')
const Login = require('../../controllers/pages//projects/Login.controller')
const Edit = require('../../controllers/pages/projects/Edit.controller')
const User_Detail = require('../../controllers/pages/projects/User_Detail.controller')
const Register = require('../../controllers/pages/projects/Register.controller')
const express = require('express')

const router = express.Router()

router.get('/', Projects.Project_Get)
router.get('/login', Login.Login_Get)
router.get('/edit', Edit.Edit_Get)
router.get('/register', Register.Register_Get)
router.get('/user_detail', checkAuthenticated, User_Detail.User_Detail_Get)

module.exports = router

function checkAuthenticated(req, res, next) {
    console.log('checkAuthenticated ran')
    if(req.isAuthenticated()) {
        return next()
    }
    return res.send('Please login first')
}