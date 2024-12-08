/*
EVENTOS

Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

Principais Eventos em JavaScript:

click → Dispara quando o elemento é clicado.
dblclick → Dispara quando o elemento é clicado duas vezes rapidamente.
mouseover → Dispara quando o mouse passa sobre um elemento.
mouseout → Dispara quando o mouse sai de um elemento.
mousemove → Dispara quando o mouse se move dentro de um elemento.
mousedown → Dispara quando um botão do mouse é pressionado sobre um elemento.
mouseup → Dispara quando um botão do mouse é liberado sobre um elemento.

Eventos de Teclado:

keydown → Dispara quando uma tecla é pressionada.
keyup → Dispara quando uma tecla é liberada.
keypress → (Obsoleto) Dispara quando uma tecla é pressionada, mas não captura todas.

Eventos de Formulário:

submit → Dispara quando um formulário é enviado.
change → Dispara quando o valor de um elemento é alterado (campo de texto, select, etc.).
focus → Dispara quando um elemento recebe foco.
blur → Dispara quando um elemento perde o foco.
input → Dispara quando o valor de um campo muda (teclado, colar texto, etc.).

Eventos de Página:

load → Dispara quando a página ou elemento termina de carregar.
unload → Dispara quando a página é descarregada (obsoleto).
resize → Dispara quando a janela do navegador é redimensionada.
scroll → Dispara quando a página é rolada.

Eventos de Mídia:
play → Dispara quando a reprodução de mídia (vídeo/áudio) começa.
pause → Dispara quando a reprodução de mídia é pausada.
ended → Dispara quando a reprodução de mídia termina.
volumechange → Dispara quando o volume de mídia é alterado.

Eventos de Drag and Drop:

dragstart → Dispara quando o usuário começa a arrastar um elemento.
drag → Dispara enquanto o elemento está sendo arrastado.
dragend → Dispara quando o usuário termina de arrastar o elemento.

Outros Eventos Importantes:

contextmenu → Dispara quando o botão direito do mouse é clicado para abrir o menu de contexto.
wheel → Dispara quando o scroll do mouse é usado.
touchstart → Dispara quando um toque na tela acontece (dispositivos móveis).
touchend → Dispara quando o toque na tela termina.

*/

function eventoClick() {
    alert("Adicionou um evento de click!");

    document.body.style.background = "yellow";
}

function eventoDblClick(){
    alert("Evento de click duplo!");
    document.body.style.background = "green";
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

// onmousemove="adicionaTexto()"
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append("O mouse moveu");
}


function limpaTexto(){
    //value pois é do tipo text
    document.getElementById("campoTexto").value = "";
}

function mudou(){
   console.log("Mudou")
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}