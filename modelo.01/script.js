function carregar() {}
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    if (hora >= 2 && min >= 2) {
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    } else if (hora >= 2 && min == 1){
        msg.innerHTML = `Agora são ${hora} horas e ${min} minuto.`
    } else {
        msg.innerHTML = `Agora são ${hora} hora e ${min} minuto.`
    }
    if (hora >= 0 && hora <= 11) {
        img.src = 'imagem/img-dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagem/img-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagem/img-noite.png'
        document.body.style.background = '#515154'
    }


