function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = "Resultado da function: " + soma(10, 23);

function realParaDolar (real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.97;

var total = realParaDolar(valorReal, cotacao);

console.log("o valor em real é R$: " + valorReal + " o valor em dólar USD é: " + total);

function alertaHello(){
    alert("Olá, pessoal");
}

//Chamando a function, e ela será executada assim que a página html que tiver esse script for carregada/solicitada.
// alertaHello();

function paraCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
}

var temperaturaEmCelsius = paraCelsius(77);

console.log("A temperatura é de " + temperaturaEmCelsius + " graus celsius");

