function tabuadaSub(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ""
        
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            res.appendChild(item)
        }
    }
}
function tabuadaAdi(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ""
        
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}
function tabuadaMul(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('seltab')

    if(num.value.lenght == 0){
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}