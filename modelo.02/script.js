function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth() + 1
    var dia = data.getDate()
    var anasc = document.querySelector('input#txtano')
    var mnasc = document.querySelector('input#txtmes')
    var dnasc = document.querySelector('input#txtdia')
    var img = document.getElementById('imagem')
    var res = document.getElementById('res')
    var alg1 = ano
    var alg2 = mes / 100
    var alg3 = dia / 10000
    var alg4 = Number(anasc.value)
    var alg5 = Number(mnasc.value) / 100
    var alg6 = Number(dnasc.value) /10000
    var idade = (alg1 + alg2 + alg3) - (alg4 + alg5 + alg6)
    var genero = document.getElementsByName('radsex')
    anasc
    if (genero[0].checked) {
        var sex = 'masculino'
    } else {
        var sex = 'feminino'
    }
    if (Math.trunc(idade) <= 1) {
        var ano_ou_s = 'ano'
    } else {
        var ano_ou_s = 'anos'
    }
    if (genero[0].checked && Math.trunc(idade) <= 9) {
        img.src = 'imagem/img-menino.png'
        document.body.style.backgroundColor = ' rgb(93, 95, 79)'
        /*menino*/
    } else if (genero[0].checked && Math.trunc(idade) >= 10 && Math.trunc(idade) <= 17) {
        img.src = 'imagem/img-h-adolecente.png'
        document.body.style.backgroundColor = ' rgb(93, 95, 79)'
        /*h-adolecente*/
    } else if (genero[0].checked && Math.trunc(idade) >= 18 && Math.trunc(idade) <= 59) {
        img.src = 'imagem/img-homem.png'
        document.body.style.backgroundColor = 'rgb(120, 129, 136)'
        /*adulto*/
    } else if (genero[0].checked && Math.trunc(idade) >= 60) {
        img.src = 'imagem/img-idoso.png'
        /*idoso*/
        document.body.style.backgroundColor = ''
    } else if (genero[1].checked && Math.trunc(idade) <= 9) {
        img.src = 'imagem/img-menina.png'
        document.body.style.backgroundColor = ''
        /*menina*/
    } else if (genero[1].checked && Math.trunc(idade) >= 10 && Math.trunc(idade) <= 17) {
        img.src = 'imagem/img-m-adolecente.png'
        document.body.style.backgroundColor = ''
        /*m-adolecente*/
    } else if (genero[1].checked && Math.trunc(idade) >= 18 && Math.trunc(idade) <= 60) {
        img.src = 'imagem/img-mulher.png'
        document.body.style.backgroundColor = ''
        /*mulher*/
    } else {
        img.src = 'imagem/img-idosa.png'
        /*idosa*/
        document.body.style.backgroundColor = ''
    }
    if (alg4 > ano || alg4 == 0) {
        alert('ERRO! Verifique os dados e tente novamente')
    } else {
        res.style.textAlign = 'center'
        res.innerHTML = `Individuo do gênero ${sex} de ${Math.trunc(idade)} ${ano_ou_s} de idade detectado`
    }
}