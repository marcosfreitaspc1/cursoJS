// let num = [1,4,3] /*variavel composta*/
// console.log(num) 
// num[3] = 5 /*adicionar o numero 5 na posição 3*/
// console.log(num)
// num.push(8) /*adiciona o numero 8 na ultima posição*/
// console.log(num)
// num.sort() /*coloca os algaritimos em ordem crescente*/
// console.log(num)
// num.length /* da o comprimento do vetor
// console.log(num)*/
// console.log(`${num.length}`)
// console.log(`${num[4]}`) /*localiza o elemento que esta na posição quatro*/
 let valores = [1,2,3,4,5,6,7,8,9,10]
// for (let posi = 0; posi < valores.length; posi++) {
//     console.log(`A posição ${posi} recebe o valor ${valores[posi]}`)
// }
for ( let pos in valores) {
    console.log(`A posição ${pos} recebe valor ${valores[pos]}`)
}
// console.log(valores.indexOf(6)) /* procura o valor correspondente a posição pedida*/

let number = [7,8,4,10,34,2,3,9,0,23,42]
number.sort()
console.log(`o vetor possui ${number.length} posições`)
console.log(`O primeiro valor é ${number[0]}`)
let pos = number.indexOf(7)
console.log(`Onvalor 7 esta na posição ${pos}`)
if (pos < 0) {
    console.log(`O valor não foi encontrado no sistema!`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}

