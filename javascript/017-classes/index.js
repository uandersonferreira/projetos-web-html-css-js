/*
CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito antigo em programação e várias linguagens utilizam elas. 

Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções epeciais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as classes no JavaScript usam um método chamado cosntructor() para fabricar os objetos.

*/

class Carro {

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    buzina(){
        return this.modelo + " buzinou: Biiiiiiiii";
    }

}//class


// APENAS 1 OBJETO JÁ PRONTO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2021
}

// CONSTRUINDO UM OBJETO ATRAVÉS DE UMA FABRICA/CLASSE
const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);

console.log(uno.buzina());

console.log(gol);

gol.ano = 2014;

console.log(gol);

