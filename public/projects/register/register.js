const userName = document.getElementById('input-username')
const email = document.getElementById('input-email')
const password = document.getElementById('input-password')
const repeatPassword = document.getElementById('input-repeat-password')
const status = document.getElementById('p-status')
const btn_logout = document.getElementById('btn-logout')

const form = document.querySelector('form')

isLogin()

import { directory } from '../../directory/directory.js'

form.addEventListener('submit', async (event) => {
    console.log('FORM RAN')
    event.preventDefault();
    await axios.post(directory.domain + directory.apiregister, {
        email: email.value,
        username: userName.value,
        password: password.value,
        repeatpassword: repeatPassword.value
    }).then( res => {
        console.log('REGISTER .THAN')
        console.log(res.data)
        status.innerText = res.data
        status.style.color = 'blue';
    }).catch( err => {
        console.log('REGISTER .ERR')
        status.innerText = err.response.data
        status.style.display = 'block';
        status.style.color = 'red';
    })
})

btn_logout.addEventListener('click', () => {
    axios.delete(directory.domain + directory.apilogout
    ).then( () => {
        location.reload()
    }).catch( err => {
    })
})

async function isLogin() {
    await axios.get(directory.domain + directory.apiislogin)
    .then( res => {
        if(res.data.result) {
            btn_logout.style.display = "block"
        }
    }).catch(err => {
        console.log(err)
    })
    return
}