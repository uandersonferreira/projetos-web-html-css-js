/*
ARRAYZ

Os arrays em JavaScript são usados paar armazenar vários valores
em uma única variável. Diferente dos objetos, que funcionam com 
propriedades ou "nomes" que você dá para os itens dentro dele, os 
arrays não possuem propriedades. O item dentro dele é encontrado pela 
posição.


Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (Lista na posição 0) vai conter o valor "arroz".
A lista[1] (Lista na posição 1) vai conter o valor "feijão".

*/

// Array literal - quando informamos os valores
const lista = [
    "arroz", // 0
    "feijão", // 1
    "macarrão", // 2
    "leite" // 3
];

const lista2 = [];
lista[0] = "Arroz";
lista[1] = "Feijão";
lista[3] = "Macarrão";

const lista3 = new Array("Arroz", "Feijão", "Macarrão");

lista[0] = "Café";

console.log(lista);

const pessoaArray = ["Uanderson", "Oliveira", 30, "Aluno"]; //Array
const pessoaObjeto = {  //objeto
    nome: "Uanderson",
    sobrenome: "Oliveira",
    idade: 22
};

console.log("pessoaObjeto.nome: " + pessoaObjeto.nome);
console.log("pessoaArray[0]: " + pessoaArray[0]);
console.log("pessoaArray.length (Tam. Array): " + pessoaArray.length);

console.log("Último elemento do array: " + pessoaArray[pessoaArray.length - 1]);


//Adiciona novo elemento ao final
pessoaArray.push("Brasileiro");

pessoaArray[8] = "Solteiro"; // Adiciona elemento na posição 8

console.log(pessoaArray);

console.log("É um array: " + Array.isArray(pessoaArray));


/*
Em JavaScript, adicionar em uma posição inexistente é permitido, e o array se ajusta automaticamente, mas isso pode levar a gaps (Posições undefined), que devem ser tratados com cuidado.

[
  "Uanderson", 
  "Oliveira", 
  30, 
  "Aluno", 
  "Brasileiro",
  undefined, 
  undefined, 
  undefined, 
  "Solteiro"
]

*/

// Métodos para Arrays
const pessoa = ["Uanderson", "Oliveira", 30, "Aluno"]; //Array
console.log(pessoa);

pessoa.pop(); //remove o último elemento do array
console.log(pessoa);

pessoa.push("Qualquer coisa"); //Adicionar um elemento na última posição do array
console.log(pessoa);

pessoa.shift(); //remove o primeiro elemento do array e os indices são reorganizados
console.log(pessoa);

pessoa.unshift("Bonitão"); //ele remove e adiciona (substitui) o elemento da primeira posição
console.log(pessoa);

delete pessoa[0]; //remover e não reorganiza os indices, a posição fica vazia
console.log(pessoa);
pessoa[0] = 'Bonitão';

//array.splice(índiceInicial, númeroDeElementosParaRemover, elemento1, elemento2, ..., elementoN);
pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2");
console.log(pessoa);
document.getElementById("texto").innerHTML = pessoa.join(" - ")

/*
Passo a Passo do Comportamento:
1° - índiceInicial = 1:
    - A inserção começa no índice 1 (antes de "Oliveira").

2° - númeroDeElementosParaRemover = 0:
    - Nenhum elemento será removido.

3° - Elementos a serem adicionados:
    - "Item adicionado 1" e "Item adicionado 2" serão adicionados a partir do índice 1.

*/

const listaItens1 =["Arroz", "Feijão", "leite"];
const listaItens2 =["Suco", "refrigerante", "carne"];
const listaItens3 =["Salgadinho"];

//Fusão/Junção de Arrays
const superLista = listaItens1.concat(listaItens2, listaItens3);

document.getElementById("texto").innerHTML = superLista.join(" - ")


const jogadores = [
    "Biro biro", //0
    "Ribamar", //1
    "Pelé", //2
    "Maradona", //3
    "Neymar", //4
    "Cristiano Ronaldo", //5
    "Vampeta", //6
    "Dimitri" //7
];

console.log(jogadores.slice(2)); //Pega todos os elementos apartir da posição 2
console.log(jogadores.slice(2, 6));//O elemento da posição 6 não é pego

jogadores.sort(); //Deixa em ordem alfabetica A-Z
console.log(jogadores);

jogadores.reverse(); // ordem inversão Z-A (1° ORDENA depois inverte)
console.log(jogadores);

const numeros = [40, 100, 1, 5, 25, 10];

console.log(numeros.sort()) 
// Saída: [1, 10, 100, 25, 40, 5] - tenta ordenar lexicograficamente

numeros.sort(function (a, b) { return a - b}); //ou
numeros.sort((a,b) => a - b);
/*
Por quê?

A função de comparação retorna:
    - Um valor negativo se a deve vir antes de b.
    - Um valor positivo se a deve vir depois de b.
    - 0 se forem iguais.
No caso de a - b, isso segue a ordem numérica crescente.
No caso de b - a, isso segue a ordem numérica Decrescente.

*/

function maiorNumero(){
    alert(Math.max.apply(null, numeros));
}

function menorNumero(){
    alert(Math.min.apply(null, numeros));
}

const maior20 = numeros.filter(filtragem);

function filtragem(value){
    return value > 20;
}


document.getElementById("texto").innerHTML = maior20.join(" - ")







