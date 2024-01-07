function media() {
    let tt1 = document.querySelector('#tt1')
    let tt2 = document.querySelector('#tt2')
    
    let sr1 = Number(tt1.value)
    let sr2 = Number(tt2.value)

    let se1 = document.querySelector('#t1')
    let se2 = document.querySelector('#t2')
    let div = document.querySelector('#md')
    let ar = document.querySelector('#ar')
    let body = document.querySelector('body')
    let falta = document.querySelector('#falta')
    let mde = document.querySelector('#escola')
    let escola = (mde.value)
    let s1 = Number(se1.value)
    let s2 = Number(se2.value)
  
    let media = (((s1*sr1) + (s2*sr2))/(sr1 + sr2))
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