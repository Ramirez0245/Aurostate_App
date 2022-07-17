const Home = require('../../controllers/pages/Home.controller');
const express = require('express');

const router = express.Router();

router.get('/',  Home.Home_get);

module.exports = router; 
