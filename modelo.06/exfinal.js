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

function inList(n, list) {
    if (list.indexOf(Number(n)) != -1) {
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
    num.value = ' '
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert(`adicione valores antes de finalizar`)
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos] 
            }
        }
        media = soma / valores.length
        valores.sort()
        res.innerHTML += `<p>Ao todo, temos ${valores.length} valores cadastrados.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valores cadastrados é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores cadastrados é ${media}</p>`
    }
}