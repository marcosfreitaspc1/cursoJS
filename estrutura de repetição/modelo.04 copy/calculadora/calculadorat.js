let obs = document.getElementById('observar')
let num = document.getElementsByName('num')
let num1 = document.getElementById('n1')
let ope = document.getElementsByName('oper')
let p1 = document.getElementById('p1')
let nume = '0'
let tel = 0
let n1 = 0
let n2 = 0
let n3 = 1
let pont = 0
let op1 = 0

function digitar() {
    if (num[0].checked) {
        obs.innerHTML += '1'
        nume += '1'
        tel = Number(nume)
        p1.style.boxShadow = 'inset 3px 3px 6px #000000f4'
    } else if (num[1].checked) {
        obs.innerHTML += '2'
        nume += '2'
        tel = Number(nume)
    } else if (num[2].checked) {
        obs.innerHTML += '3'
        nume += '3'
        tel = Number(nume)
    } else if (num[3].checked) {
        obs.innerHTML += '4'
        nume += '4'
        tel = Number(nume)
    } else if (num[4].checked) {
        obs.innerHTML += '5'
        nume += '5'
        tel = Number(nume)
    } else if (num[5].checked) {
        obs.innerHTML += '6'
        nume += '6'
        tel = Number(nume)
    } else if (num[6].checked) {
        obs.innerHTML += '7'
        nume += '7'
        tel = Number(nume)
    } else if (num[7].checked) {
        obs.innerHTML += '8'
        nume += '8'
        tel = Number(nume)
    } else if (num[8].checked) {
        obs.innerHTML += '9'
        nume += '9'
        tel = Number(nume)
    } else if (num[9].checked) {
        obs.innerHTML += '0'
        nume += '0'
        tel = Number(nume)
    } else if (num[10].checked) {
        obs.innerHTML += '00'
        nume += '00'
        tel = Number(nume)
    } else if (num[11].checked && pont == 0) {
        if (Number(nume) == 0) {
            obs.innerHTML += '0.'
            nume += '0.'
            pont = 1
        } else if (Number(nume) != 0) {
            obs.innerHTML += '.'
            nume += '.'
            pont = 1
        }
    }
}
function operar() {
    if (ope[0].checked && tel != 0) {
        obs.innerHTML += '&div;'
        if (n1 == 0) {
            n1 = tel
            nume = 0
            tel = 0
            op1 = 1
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / tel
                nume = 0
                tel = 0
                op1 = 1
            } else if (op1 == 2) {
                n2 = n1 * tel
                nume = 0
                tel = 0
                op1 = 1
            } else if (op1 == 3 && n3 == 0 && n1 - tel == 0) {
                n2 = n1 - tel
                op1 = 1
                nume = 0
                tel = 0
                n3 = 1
            } else if (op1 == 4) {
                n2 = n1 + tel
                op1 = 1
                nume = 0
                tel = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / tel
                op1 = 1
                nume = 0
                tel = 0
            } else if (op1 == 2) {
                n2 = n2 * tel
                op1 = 1
                nume = 0
                tel = 0
            } else if (op1 == 3) {
                n2 = n2 - tel
                op1 = 1
                nume = 0
                tel = 0
            } else if (op1 == 4) {
                n2 = n2 + tel
                op1 = 1
                nume = 0
                tel = 0
            }
        }
    } else if (ope[1].checked && tel != 0) {
        obs.innerHTML += '&times;'
        if (n1 == 0) {
            n1 = tel
            nume = 0
            tel = 0
            op1 = 2
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / tel
                nume = 0
                tel = 0
                op1 = 2
            } else if (op1 == 2) {
                n2 = n1 * tel
                nume = 0
                tel = 0
                op1 = 2
            } else if (op1 == 3 && n3 == 0 && n1 - tel == 0) {
                n2 = n1 - tel
                op1 = 2
                nume = 0
                tel = 0
                n3 = 1
            } else if (op1 == 4) {
                n2 = n1 + tel
                op1 = 2
                nume = 0
                tel = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / tel
                op1 = 2
                nume = 0
                tel = 0
            } else if (op1 == 2) {
                n2 = n2 * tel
                op1 = 2
                nume = 0
                tel = 0
            } else if (op1 == 3) {
                n2 = n2 - tel
                op1 = 2
                nume = 0
                tel = 0
            } else if (op1 == 4) {
                n2 = n2 + tel
                op1 = 2
                nume = 0
                tel = 0
            }
        }
    } else if (ope[2].checked && tel != 0) {
        obs.innerHTML += '&minus;'
        if (n1 == 0) {
            n1 = tel
            nume = 0
            tel = 0
            op1 = 3
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / tel
                nume = 0
                tel = 0
                op1 = 3
            } else if (op1 == 2) {
                n2 = n1 * tel
                nume = 0
                tel = 0
                op1 = 3
            } else if (op1 == 3 && n3 == 0 && n1 - tel == 0) {
                n2 = n1 - tel
                op1 = 3
                nume = 0
                tel = 0
                n3 = 1
            } else if (op1 == 4) {
                n2 = n1 + tel
                op1 = 3
                nume = 0
                tel = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / tel
                op1 = 3
                nume = 0
                tel = 0
            } else if (op1 == 2) {
                n2 = n2 * tel
                op1 = 3
                nume = 0
                tel = 0
            } else if (op1 == 3) {
                n2 = n2 - tel
                op1 = 3
                nume = 0
                tel = 0
            } else if (op1 == 4) {
                n2 = n2 + tel
                op1 = 3
                nume = 0
                tel = 0
            }
        }
    } else if (ope[3].checked && tel != 0) {
        obs.innerHTML += '&plus;'
        if (n1 == 0) {
            n1 = tel
            nume = 0
            tel = 0
            op1 = 4
        } else if (n1 != 0 && n2 == 0) {
            if (op1 == 1) {
                n2 = n1 / tel
                nume = 0
                tel = 0
                op1 = 4
            } else if (op1 == 2) {
                n2 = n1 * tel
                nume = 0
                tel = 0
                op1 = 4
            } else if (op1 == 3 && n3 == 0 && n1 - tel == 0) {
                n2 = n1 - tel
                op1 = 4
                nume = 0
                tel = 0
                n3 = 1
                val3.innerHTML = n3
            } else if (op1 == 4) {
                n2 = n1 + tel
                op1 = 4
                nume = 0
                tel = 0
            }
        } else if (n1 != 0 && n2 != 0) {
            if (op1 == 1) {
                n2 = n2 / tel
                op1 = 4
                nume = 0
                tel = 0
            } else if (op1 == 2) {
                n2 = n2 * tel
                op1 = 4
                nume = 0
                tel = 0
            } else if (op1 == 3) {
                n2 = n2 - tel
                op1 = 4
                nume = 0
                tel = 0
            } else if (op1 == 4) {
                n2 = n2 + tel
                op1 = 4
                nume = 0
                tel = 0
            }
        }
    // } else if (n3 != 0) {
    //     if (ope[0].checked) {
    //         n1 = 0
    //         n2 = 0
    //         n3 = 0
    //         val1.innerHTML = n1
    //         val2.innerHTML = n2
    //         val3.innerHTML = n3
    //     } else if (ope[1].checked) {
    //         n1 = 0
    //         n2 = 0
    //         n3 = 0
    //         val1.innerHTML = n1
    //         val2.innerHTML = n2
    //         val3.innerHTML = n3
    //     } else if (ope[2].checked) {
    //         n1 = tel
    //         n2 = 0
    //         n3 = 0
    //         val1.innerHTML = n1
    //         val2.innerHTML = n2
    //         val3.innerHTML = n3
    //     } else if (ope[3].checked) {
    //         n1 = tel
    //         n2 = 0
    //         n3 = 0
    //         val1.innerHTML = n1
    //         val2.innerHTML = n2
    //         val3.innerHTML = n3
    //     }
    }
}
function calcular() {
    if (n1 != 0 && n2 == 0 && tel != 0 && op1 == 1) {
        obs.innerHTML = n1 / tel
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
    } else if (n1 != 0 && n2 == 0 && tel != 0 && op1 == 2) {
        obs.innerHTML = n1 * tel
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
    } else if (n1 != 0 && n2 == 0 && tel != 0 && op1 == 3) {
        obs.innerHTML = n1 - tel
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
    } else if (n1 != 0 && n2 == 0 && tel != 0 && op1 == 4) {
        obs.innerHTML = n1 + tel
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
    } else if (n2 != 0 && tel != 0 && op1 == 1) {
        obs.innerHTML = n2 / tel
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
    } else if (n2 != 0 && tel != 0 && op1 == 2) {
        obs.innerHTML = n2 * tel
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
    } else if (n2 != 0 && tel != 0 && op1 == 3) {
        obs.innerHTML = n2 - tel
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
    } else if (n2 != 0 && tel != 0 && op1 == 4) {
        obs.innerHTML = n2 + tel
        tel.value = 
        n1 = 0
        n2 = 0
        op1 = 0
    }
}
