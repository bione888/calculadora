function media() {
    let tt1 = document.querySelector('#tt1')
    let tt2 = document.querySelector('#tt2')
    let tt3 = document.querySelector('#tt3')
    
    let tr1 = Number(tt1.value)
    let tr2 = Number(tt2.value)
    let tr3 = Number(tt3.value)

    let tri1 = document.querySelector('#t1')
    let tri2 = document.querySelector('#t2')
    let tri3 = document.querySelector('#t3')
    let div = document.querySelector('#md')
    let ar = document.querySelector('#ar')
    let body = document.querySelector('body')
    let falta = document.querySelector('#falta')
    let mde = document.querySelector('#escola')
    let escola = (mde.value)
    let t1 = Number(tri1.value)
    let t2 = Number(tri2.value)
    let t3 = Number(tri3.value)

    let media = (((t1*tr1) + (t2*tr2) + (t3*tr3))/(tr1 + tr2 + tr3))
    let faltando = (escola - media)
    div.innerHTML = `A sua média e de ${media.toFixed(2)}<br>`
    if (media >= escola) {
             ar.innerHTML = '(Aprovado!)'
             body.style.background = 'green'
             falta.innerHTML = ''
             tri1.style.backgroundColor = 'green'
             tri2.style.backgroundColor = 'green'
             tri3.style.backgroundColor = 'green'
             mde.style.backgroundColor = 'green'
             tt1.style.backgroundColor = 'green'
             tt2.style.backgroundColor = 'green'
             tt3.style.backgroundColor = 'green'
    } else {
             ar.innerHTML = '(Reprovado!)'
             body.style.background = 'red'
             falta.innerHTML = `para ser aprovado falta(m) ${faltando.toFixed(2)} ponto(s)`
             tri1.style.backgroundColor = 'red'
             tri2.style.backgroundColor = 'red'
             tri3.style.backgroundColor = 'red'
             mde.style.backgroundColor = 'red'
             tt1.style.backgroundColor = 'red'
             tt2.style.backgroundColor = 'red'
             tt3.style.backgroundColor = 'red'
    }
    

    

}