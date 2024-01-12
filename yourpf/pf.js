let tudo = document.querySelector('.td')
let body = document.querySelector('body')
let inputs = document.querySelector('input')
let logins = document.querySelector('.login')
let pword = document.querySelector('#pword')
let unn = document.querySelector('#uname')
let ppw = document.querySelector('#pw')
    let password = ppw.value

function login() {
     tudo.style.display = 'none'
}

function logout() {
    tudo.style.display = ''
    logins.style.display = 'none'
    let un = document.querySelector('#user')
    let usernames = un.value
    let passwordd = ppw.value
    unn.innerHTML = `Username: ${usernames}`
    pword.innerHTML = `Password : ${passwordd}`
    pword.style.color = 'white'
    pword.style.display = 'none'
    unn.style.color = 'white'
    unn.style.display = 'none'
}

function ancora() {
         let pwck = window.prompt('Confirm Password:')
         let pwc = pwck.value
         let password2 = password.value
         let hideb = document.querySelector('#show')
         if (pwc == password2) {
               unn.style.display = ''
               pword.style.display = ''
               hideb.style.display = 'none'
         } else {
            window.alert('Senha Incorreta')
         }
}