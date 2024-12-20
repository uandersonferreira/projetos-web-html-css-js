Aqui está o modelo de README.md para o seu projeto, com explicações claras, emojis para deixá-lo mais atraente, e os devidos créditos ao tutorial e ao canal de onde você aprendeu.

---

# 📝 Projeto Lista de Tarefas

Bem-vindo ao **Projeto Lista de Tarefas**! 🚀 Este projeto foi criado como parte de um aprendizado em **JavaScript** para praticar a manipulação do DOM, eventos e integração de HTML, CSS e JS.

## 📋 Descrição

Este projeto consiste em uma lista de tarefas simples, onde você pode:

- ✅ **Adicionar tarefas**: Digite uma tarefa no campo de entrada e clique no botão ou pressione **Enter** para adicioná-la à lista.
- ✏️ **Marcar tarefas como concluídas**: Clique na tarefa para marcá-la como concluída.
- ❌ **Excluir tarefas**: Clique no botão de excluir para removê-la da lista.

## 🛠️ Tecnologias Utilizadas

- **HTML5** para a estrutura da página.
- **CSS3** para o estilo visual.
- **JavaScript** para a lógica e interação com o usuário.
- Ícones do [Material Design Icons](https://cdn.jsdelivr.net/npm/@mdi/font).

## 🎥 Créditos do Tutorial

- Tutorial: [Lista de Tarefas com JavaScript](https://www.youtube.com/watch?v=sBTECRJuNZ0&list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw&index=20)
- Canal: [Programação Web](https://www.youtube.com/@programacaoweb)

---

## 🎨 Layout do Projeto

### Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" rel="stylesheet">
    <title>Projeto Lista de Tarefas</title>
</head>
<body>
    <h1>Lista de Tarefas</h1>
    <header>
        <input id="inputTarefa" type="text" placeholder="Digite sua tarefa">
        <button id="btn-add" class="add" onclick="addTarefa()">Adicionar</button>
    </header>
    <main id="areaLista"></main>
    <script src="js/controle.js"></script>
</body>
</html>
```

### Estilo CSS

```css
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #eee;
}
h1 {
    text-align: center;
    font-size: 3rem;
    margin-top: 15px;
}
header {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 90%;
    margin: auto;
}
input {
    height: 120px;
    font-size: 2rem;
    width: 80%;
    padding-left: 4%;
}
button.add {
    width: 20%;
    cursor: pointer;
    background: green;
    color: white;
    font-weight: bold;
    border: none;
    height: 120px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
main {
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    margin: auto;
    padding-top: 40px;
}
.item {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background: white;
    height: 80px;
    width: 100%;
    box-shadow: 0 0 20px #ccc;
    margin-bottom: 2%;
    cursor: pointer;
}
.item.clicado {
    background: #d4f6d9;
}
.item.clicado .item-nome {
    text-decoration: line-through;
    color: gray;
}
```

### Lógica em JavaScript

```javascript
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    let valoInput = input.value;
    if (valoInput !== "") {
        ++contador;
        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <span id="icone_${contador}" class="mdi mdi-circle-outline"></span>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valoInput}
            </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})">
                    <span class="mdi mdi-delete"></span> Deletar
                </button>
            </div>
        </div>`;
        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if (classe === "item") {
        item.classList.add('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
    } else {
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
```

---

## 📦 Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Abra o arquivo `index.html` em seu navegador.
3. Comece a adicionar suas tarefas e interagir com o projeto! 🎉

---
