let num = [5,6,7,8,9,12,34,54,15,2]
num.push(n) /*acrescentar outro valor a variavel*/
let n = 37
console.log(num)
// num.length /*numero de elementos na variavel*/
// num.Sort() /*coloca os elementos em ordem crescente*/
// for(let pos = 0; pos < num.length; pos++) {
//     console.log(` a posição ${pos} tem o valor ${num[pos]}`)
// } /*motrar quantas chaves um alway possui*/
for(let pos in num) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
     //código de repetição simplificado 
// num.indexOf(7) /*busca a posição onde o valor 7 se encontra se o valor não for encontrado ele retorna o valor -1*/
// console.log(num.indexOf(7))
