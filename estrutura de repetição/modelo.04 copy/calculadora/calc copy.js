let obs = document.getElementById('observar')
let val1 = document.getElementById('val1')
let val2 = document.getElementById('val2')
let val3 = document.getElementById('val3')
let tel = document.getElementById('monitor')
let num = document.getElementsByName('num')
let ope = document.getElementsByName('oper')
let n1 = 0
let n2 = 0
let pont = 0
let op1 = 0

function digitar() {
    if (num[0].checked && pont != 1) {
        obs.innerHTML += 1
        tel.value += 1
    } else if (num[1].checked && pont != 1) {
        obs.innerHTML += 2
        tel.value += 2
    } else if (num[2].checked && pont != 1) {
        obs.innerHTML += 3
        tel.value += 3
    } else if (num[3].checked && pont != 1) {
        obs.innerHTML += 4
        tel.value += 4
    } else if (num[4].checked && pont != 1) {
        obs.innerHTML += 5
        tel.value += 5 
    } else if (num[5].checked && pont != 1) {
        obs.innerHTML += 6
        tel.value += 6
    } else if (num[6].checked && pont != 1) {
        obs.innerHTML += 7
        tel.value += 7
    } else if (num[7].checked && pont != 1) {
        obs.innerHTML += 8
        tel.value += 8
    } else if (num[8].checked && pont != 1) {
        obs.innerHTML += 9
        tel.value += 9
    } else if (num[10].checked && pont != 1) {
        obs.innerHTML += 0
        tel.value += 0
    } else if (num[11].checked && pont != 1) {
        obs.innerHTML += '.'
        pont = 1
    } else if (num[0].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.1
        pont = 0
    } else if (num[1].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.2
        pont = 0
    } else if (num[2].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.3
        pont = 0
    } else if (num[3].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.4
        pont = 0
    } else if (num[4].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.5
        pont = 0
    } else if (num[5].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.6
        pont = 0
    } else if (num[6].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.7
        pont = 0
    } else if (num[7].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.8
        pont = 0
    } else if (num[8].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.9
        pont = 0
    } else if (num[10].checked && pont == 1) {
        tel.value = Number(tel.value) + 0.0
        pont = 0
    }
}
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
function calcular() {
    if (n1 != 0 && n2 == 0 && Number(tel.value) != 0 && op1 == 1) {
        obs.innerHTML = n1 / Number(tel.value)
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    } else if (n1 != 0 && n2 == 0 && Number(tel.value) != 0 && op1 == 2) {
        obs.innerHTML = n1 * Number(tel.value)
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    } else if (n1 != 0 && n2 == 0 && Number(tel.value) != 0 && op1 == 3) {
        obs.innerHTML = n1 - Number(tel.value)
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    } else if (n1 != 0 && n2 == 0 && Number(tel.value) != 0 && op1 == 4) {
        obs.innerHTML = n1 + Number(tel.value)
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    } else if (n2 != 0 && Number(tel.value) != 0 && op1 == 1) {
        obs.innerHTML = n2 / Number(tel.value)
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    } else if (n2 != 0 && Number(tel.value) != 0 && op1 == 2) {
        obs.innerHTML = n2 * Number(tel.value)
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    } else if (n2 != 0 && Number(tel.value) != 0 && op1 == 3) {
        obs.innerHTML = n2 - Number(tel.value)
        tel.value = 0
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    } else if (n2 != 0 && Number(tel.value) != 0 && op1 == 4) {
        obs.innerHTML = n2 + Number(tel.value)
        tel.value = 
        n1 = 0
        n2 = 0
        op1 = 0
        val1.innerHTML = n1
        val2.innerHTML = n2
        val3.innerHTML = op1
    }
}