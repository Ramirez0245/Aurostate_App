const { directory } = require('./directory/directory.js')
const path = directory.public_ejs_render_paths
const links = directory.links

const Project_Get = (req, res, next) => {
    return res.render(path.projects, {
        link_url_home: links.home,
        link_url_project: links.projects,
        link_url_about: links.about,
        link_url_contact: links.contact,
        link_url_login: links.login,
        link_url_register: links.register,
        link_url_edit: links.edit,
        link_url_user_detail: links.user_detail
    })
}

exports.Project_Get = Project_Get