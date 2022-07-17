const userName = document.getElementById('input-username')
const password = document.getElementById('input-password')
const status = document.getElementById('p-status')
const btn_logout = document.getElementById('btn-logout')
const btn_login = document.getElementById('input-login')
import { directory } from "../../directory/directory.js" 

const form = document.querySelector('form')

isLogin()

form.addEventListener('submit', (event) => {
    event.preventDefault() 

    axios.post(directory.domain + directory.apilogin, {
        email: userName.value,
        password: password.value
    }).then( res => {
        console.log('.THEN LOGIN')
        status.style.color = 'blue'
        status.innerText = 'Login successful, reloading page'
        setTimeout(() => {
            location.reload()
        }, 2000);
    }).catch( err => {
        status.innerText = 'Username or password is incorrect'
    })
})

btn_logout.addEventListener('click', () => {
    axios.delete(directory.domain + directory.apilogout
    ).then( () => {
        location.reload()
    }).catch( err => {
        status.innerText = err.response
    })
})

async function isLogin() {
    await axios.get(directory.domain + directory.apiislogin)
    .then( res => {
        if(res.data.result) {
            btn_login.disabled  = true
            btn_logout.style.display = "block"
        }
    }).catch(err => {
        console.log(err)
    })
    return
}