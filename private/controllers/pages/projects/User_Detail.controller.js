const User_Model = require('../../../models/User.model.js')
const { directory } = require('../directory/directory.js')
const path = directory.public_ejs_render_paths
const links = directory.links

const User_Detail_Get = async (req, res, next) => {
    const user = await User_Model.find({UserName: req.user})
    const details = omitdetails(user[0])

    return res.render(path.user_detail, {
        link_url_home: links.home,
        link_url_project: links.projects,
        link_url_about: links.about,
        link_url_contact: links.contact,
        link_url_login: links.login,
        link_url_register: links.register,

        user_first: details.firstname,
        user_last: details.lastname,
        user_sex: details.sex,
        user_company: details.company,
        user_height: details.height,
        user_bloodtype: details.bloodtype,
        user_phonenumber: details.phonenumber,
        user_address: details.address,
        user_address2: details.address2
    })
}
function omitdetails(user) {
    try {
        console.log(user)
        const info = {
            firstname: user.FirstName,
            lastname: user.LastName,
            sex: user.Sex,
            company: user.Company,
            height: user.Height,
            bloodtype: user.BloodType,
            phonenumber: user.PhoneNumber,
            address: user.Address,
            address2: user.AddressTwo
        }
        console.log(info)
        return info
    }catch(error) {
        
        return error
    }
}
function formatPhoneNumber(phonenumber) {
    let indexOfTheFristTerm = phonenumber.indexOf('(')
    
}
exports.User_Detail_Get = User_Detail_Get