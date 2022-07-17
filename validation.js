const Joi = require('joi');

const UserValidation = req =>
{
    const schema = Joi.object
    ({
        username: Joi.string().min(4).max(26).required(),
        email: Joi.string().min(4).max(26).required(),
        password: Joi.string().min(7).max(16).required(),
        repeatpassword: Joi.ref('password'),
    }); 
    return schema.validate(req.body)
}
const EditValueValidation = req =>
{
    const schema = Joi.object
    ({
        firstname: Joi.string().min(0).max(26),
        lastname: Joi.string().min(0).max(26),
        sex: Joi.string().min(0).max(16),
        company: Joi.string().min(0).max(36),
        height: Joi.string().min(0).max(30),
        bloodtype: Joi.string().min(0).max(30),
        phonenumber: Joi.string().min(0).max(30),
        address: Joi.string().min(0).max(30),
        address2: Joi.string().min(0).max(30)
    }); 
    return schema.validate(req.body)
} 

module.exports.UserValidation = UserValidation;
module.exports.EditValueValidation = EditValueValidation;