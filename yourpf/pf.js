let tudo = document.querySelector('.td')
let body = document.querySelector('body')
let inputs = document.querySelector('input')
let logins = document.querySelector('.login')
let pword = document.querySelector('#pword')
let unn = document.querySelector('#uname')
let ppw = document.querySelector('#pw')
let role = document.querySelector('#role')
let alterarimg = document.querySelector('#pimg')

function login() {
     tudo.style.display = 'none'
}

function logout() {
    tudo.style.display = ''
    logins.style.display = 'none'
    let un = document.querySelector('#user')
    let usernames = un.value
    let passwordd = ppw.value
    let rolee = role
    unn.innerHTML = `Username: ${usernames}`
    pword.innerHTML = `Password : ${passwordd}`
    pword.style.color = 'white'
    pword.style.display = 'none'
    rolee.style.display = 'none'
    unn.style.color = 'white'
    unn.style.display = 'none'
    
    if (usernames == 'Bione' && passwordd == 270608) {
        alterarimg.src = '/imgs/dev.png'
        rolee.innerHTML = 'Main Dev'
        rolee.style.color = 'purple'
        rolee.style.textDecoration = 'underline'
    }
}

function ancora() {
         let pwck = window.prompt('Confirm Password:')
         let pwc = pwck.value
         let password2 = ppw.value
         let hideb = document.querySelector('#show')
         if (pwck == password2) {
               unn.style.display = ''
               pword.style.display = ''
               role.style.display = ''
               hideb.style.display = 'none'
         } else {
            window.alert('Senha Incorreta')
            unn.style.display = 'none'
            pword.style.display = 'none'
            role.style.display = 'none'
         }
}