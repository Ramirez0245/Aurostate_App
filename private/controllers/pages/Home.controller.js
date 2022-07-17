const { directory } = require('./directory/directory.js')
const path = directory.public_ejs_render_paths
const links = directory.links

const Home_get = async (req, res, next ) => {
    return res.render(path.home, {
        link_url_home: links.home,
        link_url_project: links.projects,
        link_url_about: links.about,
        link_url_contact: links.contact
        });
}

exports.Home_get = Home_get;
