/**
 * Código criado a partir do tutorial-"Projeto Gerador de QRCode - HTML/CSS/JS" ,do canal do YouTube da CrisTech
 * Link:https://www.youtube.com/watch?v=UOIDhGCGCio
 * 
 * Este projeto têm como objetivo o estudo da linguagem JavaScript, juntamente com a manipulação do HTML5 e do CSS3.
 *  
 *             --- Neste projeto foi utilizado---
 * -Liguagem JavaScript
 * -HTML5 e CSS3
 * -Google Fonts
 * -Gerador de Grandient(https://cssgradient.io/)
 * -API- QR Code Generator(https://goqr.me/api/doc/create-qr-code/)
 */

const inputValue = document.querySelector('#inputValue');//pegando o elemnto que vai conter a url inseria pelo usuário pelo id
const btnValue = document.querySelector('#btnValue');//pegando o botão Gerar QRcode pelo id
const imgQrCode = document.querySelector('#imgQrCode');//pegando a tag da imagem que vai ficar o QRcode
const wrapper = document.querySelector('.wrapper');//pegando toda a div que comporta os elementos do exemplo
let valueDefault;

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    //O método trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto.
    //no caso irá elimir algum espaço caso o usuário insira na hora de colocar a url 

    if(!qrcodeValue || qrcodeValue === valueDefault) return;//se o valor de qrcodeValue for diferente da url, no caso null ou ser
                                                            //for igual ao valorDefault(null), não irá fazer nada. 
    valueDefault = qrcodeValue;// atribui a url inserida pelo usuário ao valor default, sendo assim, o valorDefault passa a conter o valor da url, deixando de ser null

    btnValue.innerText = 'Gerando QR Code...'//mudar o texto dinamicamente qaundo o usuário clicar no botão gerar QRcode
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`//link tirado da documentação 
    /* // https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 
        Basicamente, para que seja gerado o QRcode do link que o usuário deseja é necessário trocar o "Example" pelo link inserido
        pelo usuário, por isso, está sendo inserido a variavel valueDefault que comporta o link. Lembrando que para inserir váriaveis 
        é necessário o uso de crases `exemplo ${váriavel}`.
    */
    
    imgQrCode.addEventListener('load', () => {
        /*'load' foi inserido para garantir que a função só seja executada, depois que tudo antes 
        dela seja carregado primeiro.
         */
                                               
        wrapper.classList.add('active');//está inserido a classe active a div wrapper
        btnValue.innerText = 'Gerar QRCode'// está voltando a mensagem padrão depois que gerar o QRcode. 
    })
})

/*
function codificar() {
	var reg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?|magnet:\?xt=urn:btih:/
	var valor = document.getElementById("teste").value;
	var encode = window.btoa(valor);

	if (reg.test(valor)) {
		document.getElementById("saida").innerHTML = encode;
	} else {
		alert("Url Invalido");
	}
}
*/