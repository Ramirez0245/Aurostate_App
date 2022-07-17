const { directory } = require('../directory/directory.js')
const path = directory.public_ejs_render_paths
const links = directory.links

const Edit_Get = (req, res, next) => {
    return res.render(path.edit, {
        link_url_home: links.home,
        link_url_project: links.projects,
        link_url_about: links.about,
        link_url_contact: links.contact,
        link_url_register: links.register
    })
}

exports.Edit_Get = Edit_Get