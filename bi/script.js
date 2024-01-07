function media() {
    let tt1 = document.querySelector('#tt1')
    let tt2 = document.querySelector('#tt2')
    let tt3 = document.querySelector('#tt3')
    let tt4 = document.querySelector('#tt4')
    
    let bm1 = Number(tt1.value)
    let bm2 = Number(tt2.value)
    let bm3 = Number(tt3.value)
    let bm4 = Number(tt4.value)

    let bi1 = document.querySelector('#t1')
    let bi2 = document.querySelector('#t2')
    let bi3 = document.querySelector('#t3')
    let bi4 = document.querySelector('#t4')
    let div = document.querySelector('#md')
    let ar = document.querySelector('#ar')
    let body = document.querySelector('body')
    let falta = document.querySelector('#falta')
    let mde = document.querySelector('#escola')
    let escola = (mde.value)
    let b1 = Number(bi1.value)
    let b2 = Number(bi2.value)
    let b3 = Number(bi3.value)
    let b4 = Number(bi4.value)
  
    let media = (((b1*bm1) + (b2*bm2) + (b3*bm3) + (b4*bm4))/(bm1 + bm2 + bm3 + bm4))
    let faltando = (escola - media)
    div.innerHTML = `A sua média e de ${media.toFixed(2)}<br>`
    if (media >= escola) {
             ar.innerHTML = '(Aprovado!)'
             body.style.background = 'green'
             falta.innerHTML = ''
    } else {
             ar.innerHTML = '(Reprovado!)'
             body.style.background = 'red'
             falta.innerHTML = `para ser aprovado falta(m) ${faltando.toFixed(2)} ponto(s)`
    }
    

    

}