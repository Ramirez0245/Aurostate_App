const {directory} = require('./directory/directory.js')
const path = directory.public_ejs_render_paths
const links = directory.links

const Contact_get = (req, res, next) => {
    try {
        return res.render(path.contact, {
            link_url_home: links.home,
            link_url_project: links.projects,
            link_url_about: links.about,
            link_url_contact: links.contact
            })
    }
    catch (err) {
        res.send(err)
    }

}

exports.Contact_get = Contact_get