
let tudo = document.querySelector('.td')
let body = document.querySelector('body')
let inputs = document.querySelector('input')
let logins = document.querySelector('.login')

function login() {
     tudo.style.display = 'none'
}

function logout() {
    tudo.style.display = ''
    logins.style.display = 'none'
    let un = document.querySelector('#user')
    let username = un.value
    let passw = document.querySelector('#pw')
    let pw = passw.value
    let hello = document.querySelector('#uname')
    let pass = document.querySelector('#pword')

    hello.innerHTML = `Ola , ${username}`
    pass.innerHTML = `Senha : ${pw}`
}