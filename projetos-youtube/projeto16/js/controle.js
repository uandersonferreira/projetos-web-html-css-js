let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valoInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valoInput !== "") && (valoInput !== null) &&
        (valoInput !== undefined)) {

        ++contador;

        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <span id="icone_${contador}" class="mdi mdi-circle-outline"></span>
            </div>
            <div id="nome_${contador}" class="item-nome" onclick="marcarTarefa(${contador})">
                ${valoInput}
            </div>
            <div class="item-botao">
                <button class="edit" onclick="editar(${contador})">
                    <span class="mdi mdi-pencil"></span> Editar
                </button>
                <button class="delete" onclick="deletar(${contador})">
                    <span class="mdi mdi-delete"></span> Deletar
                </button>
            </div>
        </div>`;

        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERAR O CAMPO DE ENTRADA DE INPUT
        input.value = "";
        input.focus(); //volta o foco para o campo de input

    }//if
}//function


function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


//Antes de marcar a tarefa, verificamos se ela está em edição. Caso esteja, interrompemos a execução do código
function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");

    // Verifica se o nome está sendo editado ou foi recém-editado
    let tarefaNome = document.getElementById(`nome_${id}`);
    if (tarefaNome.classList.contains("editando") || tarefaNome.getAttribute("data-recent-edit") === "true") {
        return; // Sai da função sem fazer nada
    }


    if (classe === "item") {
        item.classList.add("clicado");

        let icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicado");

        let icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}



let tarefaAtualId = null;

function editar(id) {
    // Salva o ID da tarefa sendo editada
    tarefaAtualId = id;

    // Obtém o texto atual da tarefa
    let tarefaNome = document.getElementById(`nome_${id}`);
    let textoAtual = tarefaNome.innerText;

    // Mostra o formulário de edição
    let editContainer = document.getElementById("editContainer");
    let editInput = document.getElementById("editInput");

    editInput.value = textoAtual;
    editContainer.classList.remove("hidden");
}



function salvarEdicao() {
    if (tarefaAtualId !== null) {
        let novoTexto = document.getElementById("editInput").value;

        if (novoTexto !== "") {
            // Atualiza o texto da tarefa
            let tarefaNome = document.getElementById(`nome_${tarefaAtualId}`);
            tarefaNome.innerHTML = novoTexto;

            // Fecha o formulário de edição
            fecharEdicao();
        } else {
            alert("O texto da tarefa não pode estar vazio.");
        }
    }
}


function fecharEdicao() {
    let editContainer = document.getElementById("editContainer");
    editContainer.classList.add("hidden");
    tarefaAtualId = null;
}



//addEventListener -> fica ouvindo quando acontecer algum evento
input.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})