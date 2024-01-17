function gerar() {
    let numero = document.getElementById('num')
    let n = Number(numero.value)
    let tab = document.getElementById
    ('tabsel')
if (n !== 0 || n == 0) {
        let numb = [1,2,3,4,5,6,7,8,9]
        tab.innerHTML = ' '
        for (let pos in numb) {
            let opt = document.createElement('option')
            tab.appendChild(opt) 
            opt.innerHTML = ` ${n} x ${numb[pos]} = ${numb[pos] * n}`
        }
    }
}
let numb = [1,2,3,4,5,6,7,8,9]
let tab = document.getElementById('tabsel')
for (let pos in numb) {
    let opt = document.createElement('option')
    tab.appendChild(opt) 
    opt.innerHTML = ` ${0} x ${numb[pos]} = ${numb[pos] * 0}`
}
