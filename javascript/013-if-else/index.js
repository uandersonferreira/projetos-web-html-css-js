/* if e else */
var interruptor = "off";

if (interruptor == "on"){
    console.log("A lâmpada está ligada");
}else{
    console.log("A lâmpada está desligada");
}


var hora = new Date().getHours();
console.log("Hora: " + hora);

if (hora < 12){
    console.log("Bom dia!");
}else if (hora < 18){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}


function verificarNome(){
    
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio!";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns, tudo certinho!";
        p.style.color = "green";
    }

}//function