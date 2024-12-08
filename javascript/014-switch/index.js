/* 
SWITCH

É usado para realizar diferentes ações com base em diferentes condições
no mesmo bloco de verificação. Caso a condição não seja compatível 
não será executada e o valor padrão será acionado.

Sintaxe :

switch (expressão) {
  case valor1:
    // Código a ser executado se a expressão === valor1
    break; 
  case valor2:
    // Código a ser executado se a expressão === valor2
    break;
  default:
    // Código a ser executado se nenhum case for correspondente
}

expressão: O valor que será comparado nos case.
case: Cada alternativa possível para a expressão.
break: Evita que o código "caia" nos próximos cases. Se omitido, o fluxo continua para o próximo case (behavior chamado de "fallthrough").
default: Opcional, executa caso nenhum dos case seja verdadeiro.

*/

function verificarCor() {
    let cor = document.getElementById("cor").value;

    //switch:
    // - faz as comparações com '===' (verifica valor e tipo desse valor)
    // - Case sensitive 

    cor = cor.toLowerCase(); //tudo minusculo, conforme os valores dos case

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;

        default:
            document.body.style.backgroundColor = "white";
            let p = document.getElementById("teste");
            p.innerHTML = "Nenhuma cor disponível para: " + cor;
    }

}//function


function diaDaSemana() {
    var dia = new Date().getDay();
    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "Hoje é Domingo!";
            break;
        case 1:
            document.getElementById("teste").innerHTML = "Hoje é Segunda!";
            break;
        case 2:
            document.getElementById("teste").innerHTML = "Hoje é Terça!";
            break;
        case 3:
            document.getElementById("teste").innerHTML = "Hoje é Quarta!";
            break;
        case 4:
            document.getElementById("teste").innerHTML = "Hoje é Quinta!";
            break;
        case 5:
            document.getElementById("teste").innerHTML = "Hoje é Sexta!";
            break;
        case 6:
            document.getElementById("teste").innerHTML = "Hoje é Sábado!";
            break;
        default:
            document.getElementById("teste").innerHTML = "Não sei que dia é...!";
    }

}



