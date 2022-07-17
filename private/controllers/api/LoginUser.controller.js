const passport = require('passport');

const Login_user_passport_post = passport.authenticate('local', {
    successRedirect: '/projects/login',
    // failureRedirect: '/fail',
    failureFlash: true 
})

const Login_user_get = async (req, res, next) => {
    try{
        if(req.isAuthenticated()) { res.send(200, {result: true})}
        res.send(200, {result: false})
    } catch(error) {
        console.log(err)
        return res.status(500).send('Internal error');
    }
}

function checkAuthenticated(req, res, next) {
    console.log('checkAuthenticated ran')
    if(req.isAuthenticated()) {
        return res.send('Already logged in')
    }
    return next() 
}

exports.Login_user_passport_post = Login_user_passport_post;
exports.Login_user_get = Login_user_get;
exports.checkAuthenticated = checkAuthenticated;