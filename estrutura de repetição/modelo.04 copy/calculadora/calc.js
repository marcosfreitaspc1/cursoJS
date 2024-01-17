let obs = document.getElementById('observar')
let val1 = document.getElementById('val1')
let val2 = document.getElementById('val2')
let val3 = document.getElementById('val3')
let tel = document.getElementById('monitor')
let num = document.getElementsByName('num')
let ope = document.getElementsByName('oper')
let n1 = 0
let n2 = 0
let op1 = 0

function digitar() {
    if (num[0].checked) {
        obs.innerHTML += 1
        tel.value += 1
    } else if (num[1].checked) {
        obs.innerHTML += 2
        tel.value += 2
    } else if (num[2].checked) {
        obs.innerHTML += 3
        tel.value += 3
    } else if (num[3].checked) {
        obs.innerHTML += 4
        tel.value += 4
    } else if (num[4].checked) {
        obs.innerHTML += 5
        tel.value += 5 
    } else if (num[5].checked) {
        obs.innerHTML += 6
        tel.value += 6
    } else if (num[6].checked) {
        obs.innerHTML += 7
        tel.value += 7
    } else if (num[7].checked) {
        obs.innerHTML += 8
        tel.value += 8
    } else if (num[8].checked) {
        obs.innerHTML += 9
        tel.value += 9
    } else if (num[9].checked) {
        obs.innerHTML += 0
        tel.value += 0
    } else if (num[10].checked) {
        obs.innerHTML += '00'
        tel.value += 0
        tel.value += 0
    } else if (num[11].checked) {
        obs.innerHTML += '.'
    }
}

// function sinal(n) {
//     if (Number(n) != 0) {
//         return true
//     } else {
//         return false
//     }
// }
// function zerar(n) {
//     if (Number(n) == 0) {
//         return true
//     } else {
//         return false
//     }
// }
// function operar() {
//     if (sinal(tel.value)) {
//         if (ope[0].checked) {
//             obs.innerHTML += '&div;'
//             op1 = 1
//         } else if (ope[1].checked) {
//             obs.innerHTML += '&times;'
//             op1 = 2
//         } else if (ope[2].checked) {
//             op1 = 3
//         } else if (ope[3].checked) {
//             obs.innerHTML += '&plus;'
//             op1 = 4
//         }
//     }
// }
// function limpa() {
//     if (zerar(n1)) {
//         n1 = Number(tel.value)
//         val1.innerHTML = n1
//         tel.value = 0
//     } else if (!zerar(n1)) {
//         n2 = n1
//         n1 = 0
//         val2.innerHTML = n2
//     }
// }


// function operar() {
//     if (ope[0].checked && Number(tel.value) != 0) {
//         if (n1 == 0 && n2 == 0) {
//             obs.innerHTML += '&div;'
//             n1 = Number(tel.value)
//             tel.value = 0
//             op1 = 1
//             val1.innerHTML = n1
//             val3.innerHTML = op1
//         } else if (n1 != 0 && n2 == 0) {
//             if (n2 == 0) {
//                 obs.innerHTML += '&div;'
//                 n2 = Number(tel.value) / n1
//                 n1 = 0
//                 val2.innerHTML = n2
//                 tel.value = 0
//             } else if (n2 == 0) {
//                 obs.innerHTML += '&div;'
//                 n1 = Number(tel.value)
//                 tel.value = 0
//                 n2 = n2 / n1
//                 val2.innerHTML = n2
//             }
//         }
//     } else if (ope[1].checked && Number(tel.value) != 0) {
        
//     } else if (ope[2].checked && Number(tel.value) != 0) {
        
//     } else if (ope[3].checked && Number(tel.value) != 0) {
        
//     }
// }

function operar() {
    if (ope[0].checked && Number(tel.value) != 0) {
        obs.innerHTML += '&div;'
        if (n1 == 0) {
            n1 = Number(tel.value)
            op1 = 1
            tel.value = 0
            val1.innerHTML = n1
            val3.innerHTML = op1
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / Number(tel.value)
                n1 = 0
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n1 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n1 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n1 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n2 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n2 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n2 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 1
                tel.value = 0
            }
        }
    } else if (ope[1].checked && Number(tel.value) != 0) {
        obs.innerHTML += '&times;'
        if (n1 == 0) {
            n1 = Number(tel.value)
            op1 = 2
            tel.value = 0
            val1.innerHTML = n1
            val3.innerHTML = op1
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n1 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n1 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n1 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n2 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n2 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n2 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 2
                tel.value = 0
            }
        }
    } else if (ope[2].checked && Number(tel.value) != 0) {
        obs.innerHTML += '&minus;'
        if (n1 == 0) {
            n1 = Number(tel.value)
            op1 = 3
            tel.value = 0
            val1.innerHTML = n1
            val3.innerHTML = op1
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n1 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n1 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n1 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n2 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n2 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n2 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 3
                tel.value = 0
            }
        }
    } else if (ope[3].checked && Number(tel.value) != 0) {
        obs.innerHTML += '&plus;'
        if (n1 == 0) {
            n1 = Number(tel.value)
            op1 = 4
            tel.value = 0
            val1.innerHTML = n1
            val3.innerHTML = op1
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n1 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n1 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n1 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            } else if (op1 == 2) {
                n2 = n2 * Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            } else if (op1 == 3) {
                n2 = n2 - Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            } else if (op1 == 4) {
                n2 = n2 + Number(tel.value)
                val1.innerHTML = n1
                val2.innerHTML = n2
                op1 = 4
                tel.value = 0
            }
        }
    }
}