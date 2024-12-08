/* 
LAÇO DE REPETIÇÃO FOR

Laços oferecem um jeito fácil e rápido de executar uma ação
repetidas vezes.

for (inicialização; condição; incremento) {
  // Código a ser executado em cada iteração
}

inicialização: Declara e inicializa uma variável de controle.
condição: Avaliada antes de cada iteração; se for true, o loop continua.
incremento: Executado após cada iteração, atualiza a variável de controle.

*/

for (let i = 0; i < 101; i++) {
    document.getElementById("teste").innerHTML += i + ", ";
}


/*
// VAI DE 1900 ATÉ 2021 - CRESCENTE
for (let i = 1900; i <= 2021; i++){
    let select = document.getElementById("ano");
    select.innerHTML += "<option value'" + i + "'>" + i + "</option>";
}
*/


// VAI DO ANO ATUAL ATÉ 1900 - DECRESCENTE
var ano = new Date().getFullYear();
for (let i = ano; i >= 1900; i--) {
    let select = document.getElementById("ano");
    select.innerHTML += "<option value'" + i + "'>" + i + "</option>";
}


const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++){
    let p = document.getElementById("teste2");
    p.innerHTML += carros[i] + " | ";
}







