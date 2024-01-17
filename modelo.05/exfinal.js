let num = document.querySelector('input#num')
let list = document.querySelector('select#sel')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado,`
        list.appendChild(item)
    } else { 
        window.alert('valor inválido ou já está na lista.')
    }
}