let menu = document.querySelector('.menu')
function menubar() {
    menu.style.transform = 'translateX(-100%)'
    menu.style.transitionDuration = '0.3s'
}

function recolher() {
    let recolhe = document.querySelector('#butaorecolher')
    menu.style.transform = 'translateX(100%)'
}