let newsrc = document.querySelector('#afterimg')
let butaofinal = document.querySelector('#altere')
let butaodealterar = document.querySelector('#alt')
newsrc.style.display = 'none'
butaofinal.style.display = 'none'

function alterar() {
    newsrc.style.display = ''
    butaodealterar.style.display = 'none'
    butaofinal.style.display = ''
}

function imagem() {
    imgsrc = newsrc.value
    alterarimg.src = `${imgsrc}`
    butaofinal.style.display = 'none'
    newsrc.style.display = 'none'
    butaodealterar.style.display = ''
}