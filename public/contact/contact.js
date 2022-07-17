const btn_logout = document.getElementById('btn-logout')

import { directory } from "../../directory/directory.js"

isLogin()

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
            console.log('AXIOS RAN .THEN ')
            btn_logout.style.display = "block"
        }
    }).catch(err => {
        console.log(err)
    })
    return
}