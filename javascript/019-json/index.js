/** 
    JSON 

JSON significa JavaScript Object Notation que traduzindo pro protuguês fica algo como notção de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON  no JavaScript usamos dois métodos:

JSON.parse() -> converte texto no padrão JSON em ojetos
JSON.stringify() -> converte objetos (JS) em texto padão JSON

 */

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2020,
    motor: ["1.6", "1.4", "1.0"]
}

// CONVERTEU PARA TEXTO FORMATO JSON
let texto = JSON.stringify(carro);

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById("area").innerHTML = texto;

console.log(texto.modelo); //Dar erro, pois é um texto em formato json e não um objeto JS.

//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto); 

//PEGAMSO UM VALOR DESSE OBJETO
console.log(obj.modelo);

//PEGAMSO UM VALOR DESSE OBJETO
console.log(obj.motor[1]);

// =============================

function buscarCep(){
    let input  = document.getElementById("cep").value;
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function (){
       //document.getElementById("texto").innerHTML = this.responseText;
        
        // TRANSFORMAMOS O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);

        //PEGAMOS OS VALORES QUE PRECISAVAMOS
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.estado;

        document.getElementById("texto").innerHTML =  "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;

    }
}

function buscarCepForm() {
    let input = document.getElementById("cep-form").value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
      if (ajax.status === 200) {
        // Transformamos o texto em objeto
        let obj = JSON.parse(this.responseText);

        // Preenchendo os campos
        document.getElementById("logradouro").value = obj.logradouro || "Não encontrado";
        document.getElementById("cidade").value = obj.localidade || "Não encontrado";
        document.getElementById("estado").value = obj.uf || "Não encontrado";
      } else {
        alert("Erro ao buscar o CEP. Verifique o CEP informado.");
      }
    };
  }



/**
 * const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/77024146/json/');
ajax.send();

ajax.onload = function (){
    document.getElementById('area2').innerHTML = this.responseText;

    let obj = JSON.parse(this.responseText);
    console.log(obj.ddd);
}

 */


