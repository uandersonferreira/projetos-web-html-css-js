/* 
 SetTimeout e SetInterval

## Sintaxe:

setTimeout(callback, delay, ...args);

callback: A função que será executada.
delay: Tempo em milissegundos antes de executar a função.
...args: Argumentos opcionais para a função callback.

## setInterval
###Sintaxe:

setInterval(callback, delay, ...args);

callback: A função que será executada.
delay: Intervalo de tempo em milissegundos entre as execuções.
...args: Argumentos opcionais para a função callback.


*/

function ativarContagemSetTimeout() {
    document.getElementById("tempo").innerHTML = "Começou a contar!"

    //ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
    tempo = setTimeout(function () {
        document.getElementById("tempo").innerHTML = "Executou o  setTimeout!"
        document.body.style.background = "red";
    }, 3000);

    /*
        Variável Global Implícita:

        Dentro da função ativarContagem, a linha tempo = setTimeout(...) cria uma variável tempo sem var, let ou const.

        Sem estas palavras-chave, tempo é tratada como uma variável global, acessível em qualquer parte do código, incluindo outras funções como pararContagem.
    */
}

function ativarContagemSetInterval() {
    tempo2 = setInterval(function(){
        var cronometro = document.getElementById("tempo2").innerHTML;
        var soma = parseInt(cronometro) - 1; 
        if (soma === 0){
            document.getElementById("tempo2").innerHTML = "Tempo esgotado";
            pararContagemSetInterval();
        }else{
            document.getElementById("tempo2").innerHTML = soma;
        }
        
    }, 1000);
}

function pararContagem() {
    clearTimeout(tempo);
}

function pararContagemSetInterval() {
    clearInterval(tempo2);
}