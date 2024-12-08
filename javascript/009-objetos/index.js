/*
OBJETOS

Objetos são basicamente variáveis com muitos valores dentro.

ex: 
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
}

Os valores dentro de um objeto são chamados de propriedades.

Objetos também podem ter métodos. É um método é um fução colocada dentro de uma propriedade.

*/

//Objeto Literal- quando informamos os valores das propriedades
//variavel:
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){
        alert("Biiiiiiiiiii")
    },
    completo: function(){
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo
        // this.marca para pegar propriedades do proprio Objeto
    }
};

console.log(carro); //Imprime o objeto inteiro
console.log(carro.ano); //Imprime um valor  de uma propriedade desse objeto (Forma mais comun)
console.log(carro["marca"]); // 2° Forma de imprimir o valor da propriedade

//carro.buzina();
console.log(carro.completo());






