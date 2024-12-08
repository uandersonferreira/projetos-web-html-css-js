// Variáveis

// DECLARAÇÃO DE VARIÁVEIS
var a, b, c;

// ATRIBUIÇÃO DOS VALORES;
var a = 2;

b = 3;
c = a + b;

var a = 5;

//alert(a);

// DECLARAÇÃO DE VARIÁVEIS
//var dataNascimento, sobrenome_pessoa, $nome, _idade; SÃO VÁLIDOS
var nome, sobrenome, nomeCompleto, idade, pessoa;

// ATRIBUIÇÃO DOS VALORES;
nome = "Uanderson";
sobrenome = "Oliveira";
idade = 22;

nomeCompleto = nome + " " + sobrenome;

//Concatenar numerico + string da erro se feita assim
pessoa = idade + 10 + nome; 
pessoa = nome + idade + 10; 


document.getElementById("texto").innerHTML = pessoa;


// Usando var
var mensagem = "Olá, mundo!"; // Escopo global
console.log("Usando var:", mensagem);

if (true) {
    var mensagem = "Olá, JavaScript!"; // Redeclara no mesmo escopo
    console.log("Dentro do bloco com var:", mensagem);
}
console.log("Fora do bloco com var (alterado):", mensagem); // 'var' foi alterado no escopo global

document.write("<h3>Usando var: </h3>");
document.write(mensagem + "<br>");

// Usando let
let saudacao = "Bem-vindo ao mundo do let!";
console.log("Usando let:", saudacao);

if (true) {
    let saudacao = "Escopo de bloco é seguro com let!";
    console.log("Dentro do bloco com let:", saudacao); // Variável diferente
}
console.log("Fora do bloco com let (inalterado):", saudacao); // Escopo original não foi alterado

document.write("<h3>Usando let: </h3>");
document.write(saudacao + "<br>");

// Usando const
const PI = 3.14159; // Valor imutável
console.log("Usando const:", PI);

try {
    // Tentativa de alterar uma constante
    PI = 3.14;
} catch (e) {
    console.error("Erro ao tentar alterar const:", e.message); // Mensagem de erro
}

document.write("<h3>Usando const: </h3>");
document.write("O valor de PI é: " + PI + "<br>");



/*
var a, b, c;

a, b,c -> são undefinded por default pois não possui valores.

c = a + b; -> ao realizar qualquer operação com variaveis vazias da erro de NaN pois não consegue identificar o que são os dados da operação.

O var permite que o valor da variavel seja alterado em qualquer lugar do código:

var a, b, c;
var a = 2;
b = 3;
c = a + b;
var a = 5;
alert(a);



*/



