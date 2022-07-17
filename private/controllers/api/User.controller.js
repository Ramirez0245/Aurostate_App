const User_Model = require('../../models/User.model')
const EditValueValidation = require('../../../validation.js');

//COMPELETE - TEST FIRST
const User_post = async (req, res, next) => {
    try {
        console.log('USER_POST RAN')
        //VALIDATE INPUT
        const { error } = EditValueValidation.EditValueValidation(req)
        if (error) {
            const comment = error.details[0].message;
            return res.status(400).send(comment)
        }

        //GRAB USER
        const user = await User_Model.find({UserName: req.user})

        if (user.length <= 0 ) return res.status(400).send('No user found')
        
        if(user.length === 1) {
            let first = req.body.firstname
            first.replace(/^\s+|\s+$/gm,'')
            user.FirstName = first;

            let last = req.body.lastname
            last = last.replace(/^\s+|\s+$/gm,'')
            user.LastName = last
            user.Sex = req.body.sex
            user.Company = req.body.company
            user.Height = req.body.height
            user.BloodType = req.body.bloodtype
            user.PhoneNumber = req.body.phonenumber
            user.Address = req.body.address
            user.Address2 = req.body.address2

            await User_Model.updateOne({UserName: req.user}, {
                FirstName: req.body.firstname,
                LastName: req.body.lastname,
                Sex: req.body.sex, 
                Company: req.body.company,
                Height: req.body.height,
                BloodType: req.body.bloodtype,
                PhoneNumber: req.body.phonenumber,
                Address: req.body.address,
                AddressTwo: req.body.address2
            } );
            return res.status(200).send('Update complete')
        }
    } catch(error) {
        console.log('USER_POST ERROR')
        return res.status(500).send('Internal error')
    }
}

const User_get = async (req, res, next) => {
    try {
        const user = await User_Model.find({UserName: req.user})
        if (user > 1)   return res.status(500).send('Internal error')
        const details = {}
        details.firstname = user.FirstName
        details.lastname = user.LastName
        details.sex = user.Sex
        details.company = user.Company
        details.height = user.Height
        details.bloodtype = user.BloodType
        details.phonenumber = user.PhoneNumber
        details.address = user.Address
        details.address2 = user.Address2

        return details
    }catch(error) {
        console.log('USER_GET ERROR')
        return res.status(500).send('Internal error')
    }
}

const User_IsLogin = async (req, res, next) => {
    try {
        console.log('USER_ISLOGIN RAN')
        if(req.isAuthenticated()) {
            return res.status(200).send({result: true})
        }
        return res.status(200).send({result: false})
    } catch(error) {
        console.log('User_IsLogin ERROR')
        console.log(error)
        return res.status(500).send('Internal error')
    }
}

exports.User_post = User_post
exports.User_get = User_get
exports.User_IsLogin = User_IsLogin











// function singleWording(body) {
//     try {
//         const object = body;
    
//         // for (const property in object) {
//         //   console.log(`${property}: ${object[property]}`);
//         // }
//         for (const property in object) {
//             let value = object[property]
//             value = value.replace(/^\s+|\s+$/gm,'')
//             if(value.indexOf(' ') >= 0) {
//                 value = value.split(' ').pop()
//             }
//         }
//     }catch (error) {
//         return ('loopThrough Error: ' + error)
//     }

// }