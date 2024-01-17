function gerar() {
        let numero = document.getElementById('num')
        let n = Number(numero.value)
        let m = 1 
        let tab = document.getElementById
        ('tabsel')
    if (n !== 0) {
            tab.innerHTML = ' '
            for (let c = m; c <= 9; c++) {
                let opt = document.createElement('option')
                tab.appendChild(opt)
                let conta = c * n
                opt.value = `tab${c}`
                opt.innerHTML = ` ${n} x ${c} = ${c * n}`
            }
        } else if (n == 0) {
                tab.innerHTML = ' '
                for (let c = m; c <= 9; c++) {
                    let opt = document.createElement('option')
                    tab.appendChild(opt)
                    let conta = c * m
                    opt.value = `tab${c}`
                    opt.innerHTML = ` ${0} x ${c} = ${c * 0}`
                }
                }
        }
let numero = document.getElementById('num')
let n = Number(numero.value)
let m = 1
let tab = document.getElementById('tabsel')
if (n == 0) {
for (let c = m; c <= 9; c++) {
    let opt = document.createElement('option')
    tab.appendChild(opt)
    let conta = c * m
    opt.value = `tab${c}`
    opt.innerHTML = ` ${0} x ${c} = ${c * 0}`
}
} 