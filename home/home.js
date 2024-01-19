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
    let pw = document.querySelector('#pw')
    let password = pw.value
    let hello = document.querySelector('#hello')
    hello.innerHTML = `Ola , ${username}
    <img  id="userpic" src="/imgs/17004.png">
    `
    if (username && password) {

    } else {
        alert('Preencha todos campos abaixo')
        logins.style.display = ''
        tudo.style.display = 'none'
    }
}

