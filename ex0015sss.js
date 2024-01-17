/*condição múltipla*/
/* dentro de cada bloco precisa-se de um comando break, a chava é uma expressão que executara cada comando ate encontrar o resultado correspondente, é necessario que esse valor resultante exista*/
var agora = new Date()
var dia = agora.getDay()
switch (dia) {
    case 0:
    console.log(`domingo`)   
        break;
        case 1:
    console.log(`segunda`)   
        break;
        case 2:
    console.log(`terça`)   
        break;
        case 3:
    console.log(`quarta`)   
        break;
        case 4:
    console.log(`quinta`)   
        break;
        case 5:
    console.log(`sexta`)   
        break;
        case 6:
    console.log(`sabado`)   
        break;

    default:
        console.log(`dia invalido`)
        break;
}