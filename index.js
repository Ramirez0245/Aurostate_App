if ( process.env.NODE_ENV = 'production') {
    console.log('Hello from process.env if statment');
    
    require('dotenv').config();
    console.log(process.env.SESSION_SECRET);
}

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path');

// API
const RegisterUser_API_Route = require('./private/routes/api/RegisterUser.route')
const LoginUser_API_Route = require('./private/routes/api/LoginUser.route')
const LogoutUser_API_Route = require('./private/routes/api/LogoutUser.route')
const User_API_Route = require('./private/routes/api/User.route')

// ROUTES
const Home_Route = require('./private/routes/pages/Home.route')
const Projects_Route = require('./private/routes/pages/Project.route')
const About_Route = require('./private/routes/pages/About.route')
const Contact_Router = require('./private/routes/pages/Contact.route')

// MODEL
const User_Model = require('./private/models/User.model');

// AUTH IMPORTS
const passport = require('passport');
const initializePassport = require('./passport-config');
const flash = require('express-flash');
const session = require('express-session');
const methodOveride = require('method-override');

// MONGOOSE DATABASE CONNECTION
const mongoose = require('mongoose');
connectToHostDatabase().catch(err => console.log(err));
async function connectToHostDatabase() {
    mongoose.connection.close();
    await mongoose.connect(process.env.DATABASE_CONNECTION);
    console.log('After await mongoose.connect');
}

// USE 
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// VIEW ENGINE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')));

// USE PASSPORT AUTH
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOveride('_method'))

//AUTH
initializePassport(passport, 
    async email  => { 
        const queryEmail = await User_Model.findOne({Email: email})
        if(queryEmail == null) {
            const queryUsername = await User_Model.findOne({UserName: email})
            return queryUsername;
        }
        return queryEmail;
    },
    async id => { 
        const query = await User_Model.find({_id: id})
        return query[0].UserName;
    }
);

// API
app.use('/api/register', RegisterUser_API_Route);
app.use('/api/login', LoginUser_API_Route);
app.use('/api/logout', LogoutUser_API_Route)
app.use('/api/user', User_API_Route);

// ROUTES
app.use('/', Home_Route);
app.use('/projects', Projects_Route)
app.use('/about', About_Route)
app.use('/contact', Contact_Router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

