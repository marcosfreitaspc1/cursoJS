function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
        if (f > i && p > 0) {
            //contagem crescente
            resultado.innerHTML = 'Contando:'
            for(let c = i; c <= f; c = c + p)
            resultado.innerHTML += ` ${c} \u{1F449},`
            resultado.innerHTML += ` ...` 
        } else if (f < i && p > 0 || f > i) {
            //contagem regressiva
            resultado.innerHTML = 'Contando:'
            for(let c = i; c >= f; c = c - p)
            resultado.innerHTML += ` ${c} \u{1F449},`
            resultado.innerHTML += ` ...` 
        } else if (p == 0) {
            passo.style.color = 'red'
            passo.type = 'text'
            passo.value = '[ERRO!] O valor inserido deve ser maior que "0"'
        } else {
            fim.style.color = 'red'
            fim.type = 'text'
            fim.value = '[ERRO!] O valor de inicio e fim não podem ser iguais'
            inicio.style.color = 'red'
            inicio.type = 'text'
            inicio.value = '[ERRO!] O valor de inicio e fim não podem ser iguais'
        }
    }
function reverter() {
    passo.type = 'number'
    passo.style.color = 'black'
    inicio.type = 'number'
    inicio.style.color = 'black'
    fim.type = 'number'
    fim.style.color = 'black'
}
function saltar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var labelin = document.getElementById('labi')
    inicio.saltar
}