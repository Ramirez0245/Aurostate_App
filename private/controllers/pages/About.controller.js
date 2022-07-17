const { directory } = require('./directory/directory.js')
const path_ejs = directory.public_ejs_render_paths
const links = directory.links

const About_get = (req, res, next) => {
    return res.render(path_ejs.about, {
        link_url_home: links.home,
        link_url_project: links.projects,
        link_url_about: links.about,
        link_url_contact: links.contact
    })
}

exports.About_get = About_get