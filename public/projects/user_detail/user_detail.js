const firstname = document.getElementById('first-name')
const lastname = document.getElementById('last-name')
const sex = document.getElementById('input-sex')
const height = document.getElementById('input-height')
const bloodtype = document.getElementById('input-blood-type')
const company = document.getElementById('input-company')
const phonenumber = document.getElementById('input-phone-number')
const address = document.getElementById('input-address')
const address2 = document.getElementById('input-address-2')
const editbtn = document.getElementById('btn-edit')
const inputsumbit = document.getElementById('input-sumbit')
const btn_logout = document.getElementById('btn-logout')

import { directory } from "../../directory/directory.js"

isLogin()

const form = document.querySelector('form')

let number = phonenumber.value

phonenumber.addEventListener('keyup', formatNumberKeyup )
editbtn.addEventListener('click', enableButton)
form.addEventListener('submit', event => {
    event.preventDefault()
    axios.post(directory.domain + directory.apiuserdetail, {
        firstname: firstname.value,
        lastname: lastname.value,
        sex: sex.value,
        height: height.value,
        bloodtype: bloodtype.value,
        company: company.value,
        phonenumber: phonenumber.value,
        address: address.value,
        address2: address2.value
    }).then( res => { 
        console.log('.THEN RES')
        console.log(res.data)
        document.getElementById('p-status').innerText = 'Submission successful, reloading page'
        location.reload()
    }).catch( err => {
        console.log('.ERROR RAN')
        console.log(err.response.data)
    })
})

function enableButton(e) {
    e.preventDefault()
    console.log('ENABLEBUTTON RAN')
    // let boolean = firstname.disable
    firstname.disabled = !firstname.disabled
    lastname.disabled = !lastname.disabled
    sex.disabled = !sex.disabled
    height.disabled = !height.disabled
    bloodtype.disabled = !bloodtype.disabled
    company.disabled = !company.disabled
    phonenumber.disabled = !phonenumber.disabled
    address.disabled = !address.disabled
    address2.disabled = !address2.disabled
    inputsumbit.disabled = !inputsumbit.disabled
}
function formatNumberKeyup(event)  {
    let isnum = /^\d+$/.test(event.key)
    let selectionstart = event.target.selectionStart
    let deletedselectionstart = event.target.selectionStart

    console.log('EVENT KEY: ' + event.key)
    console.log('SELECTIONSTART: ' + selectionstart)
    if(event.key ==='Delete' || event.key === 'Backspace' || isnum || event.key === undefined) {
        number = phonenumber.value
        if(number.length < 4) {
            while(number.indexOf('-') > -1) {
                number = number.slice(0, number.indexOf('-')) 
                + number.slice(number.indexOf('-') + 1)
            }
            phonenumber.value = number
            event.target.setSelectionRange(selectionstart, selectionstart)
            if(event.key === 'Delete' || event.key === 'Backspace') {
                event.target.setSelectionRange(deletedselectionstart, deletedselectionstart) 
            }
            return
        }
        if(number.length < 8) {
            while(number.indexOf('-')  !== -1 ) {
                number = number.slice(0, number.indexOf('-')) + number.slice(number.indexOf('-') + 1)
            }
            if(number[3] !== '-') {
                number = number.slice(0,3) + '-' + number.slice(3)
                event.target.setSelectionRange(selectionstart + 1, selectionstart + 1)
                selectionstart = selectionstart + 1
            }
            phonenumber.value = number
            event.target.setSelectionRange(selectionstart, selectionstart)
            if(event.key === 'Delete' || event.key === 'Backspace') {
                event.target.setSelectionRange(deletedselectionstart, deletedselectionstart) 
            }
            return
        }
        if(number.length < 13) {
            while(number.indexOf('-')  !== -1 ) {
                number = number.slice(0, number.indexOf('-')) + number.slice(number.indexOf('-') + 1)
            }

            if(number[3] !== '-') {
                number = number.slice(0,3) + '-' + number.slice(3)
                event.target.setSelectionRange(selectionstart + 1, selectionstart + 1)
                selectionstart = selectionstart + 1
            }
            if(number[7] !== '-') {
                number = number.slice(0,7) + '-' + number.slice(7)
                event.target.setSelectionRange(selectionstart + 1, selectionstart + 1)
                selectionstart = selectionstart + 1
            }
            phonenumber.value = number
            event.target.setSelectionRange(selectionstart, selectionstart)
            if(event.key === 'Delete' || event.key === 'Backspace') {
                event.target.setSelectionRange(deletedselectionstart, deletedselectionstart) 
            }
            return
        }
    }
    if(!isnum) { phonenumber.value = number }
}

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
        console.log('isLOGIN .THEN RAN')
        if(res.data.result) {
            btn_logout.style.display = "block"
        }
    }).catch(err => {
        console.log(err)
    })
    return
}