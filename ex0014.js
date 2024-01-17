/*estrutura aninhada*/
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
if (hora >=2 && min >=2) {
    console.log(`são exatamente ${hora} horas e ${min} minutos`)
} else if (hora >=2 && min == 1) { console.log(`são exatamente ${hora} horas e ${min} minuto`)
} else if (hora == 1 && min >= 2) {
    console.log(`são exatamente ${hora} hora e ${min} minutos`)
} else {
    console.log(`são exatamente ${hora} hora e ${min} minuto`)
    }

