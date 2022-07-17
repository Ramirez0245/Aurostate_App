const main = 'main'
const projects = 'projects'
const extention = 'ejs'

const domain = 'http://localhost:5000/'

const directory = {
    public_ejs_render_paths: {
        home: `home/home.${extention}`,
        projects: `projects/projects.${extention}`,
        about: `about/about.${extention}`,
        contact: `contact/contact.${extention}`,

        login: `projects/login/login.${extention}`,
        register: `projects/register/register.${extention}`,
        edit: `projects/edit/edit.${extention}`,
        user_detail: `projects/user_detail/user_detail.${extention}`
    },
    links: {
        home: domain,
        about: domain + 'about',
        contact: domain + 'contact',
        projects: domain + 'projects',
        login: domain + 'projects/login',
        register: domain + 'projects/register',
        edit: domain + 'projects/edit',
        user_detail: domain + 'projects/user_detail'
    }
}

exports.directory = directory