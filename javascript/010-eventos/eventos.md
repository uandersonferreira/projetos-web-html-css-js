### **Eventos em JavaScript**

Eventos em JavaScript são ações ou ocorrências que acontecem na página, como cliques, pressionamento de teclas, movimento do mouse, carregamento de página, entre outros. Você pode usar eventos para tornar suas páginas mais interativas.

---

### **Sintaxe Básica**

Um evento é adicionado a um elemento HTML e associado a uma função (o **manipulador de eventos**) que será executada quando o evento ocorrer.

#### **1. Usando o Atributo HTML**

Você pode adicionar diretamente o evento no elemento HTML.

```html
<button onclick="alert('Botão clicado!')">Clique aqui</button>
```

---

#### **2. Usando `addEventListener` (Recomendado)**

O método `addEventListener` é mais flexível e permite adicionar vários eventos ao mesmo elemento.

```html
<button id="meuBotao">Clique aqui</button>
<script>
    const botao = document.getElementById("meuBotao");
    botao.addEventListener("click", function () {
        alert("Botão clicado!");
    });
</script>
```

---

### **Principais Eventos**

| Evento             | Descrição                         | Exemplo HTML                    | Exemplo JavaScript            |
|--------------------|-----------------------------------|----------------------------------|--------------------------------|
| `click`            | Quando um elemento é clicado.     | `<button onclick="funcao()">`   | `element.addEventListener("click", funcao);` |
| `mouseover`        | Quando o mouse passa sobre algo.  | `<div onmouseover="funcao()">`  | `element.addEventListener("mouseover", funcao);` |
| `mouseout`         | Quando o mouse sai do elemento.   | `<div onmouseout="funcao()">`   | `element.addEventListener("mouseout", funcao);` |
| `keydown`          | Quando uma tecla é pressionada.   | N/A                             | `element.addEventListener("keydown", funcao);` |
| `keyup`            | Quando uma tecla é liberada.      | N/A                             | `element.addEventListener("keyup", funcao);` |
| `load`             | Quando a página é carregada.      | `<body onload="funcao()">`      | `window.addEventListener("load", funcao);`    |

---

### **Exemplo Simples: Botão Clicável**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Exemplo de Eventos</title>
</head>
<body>
    <button id="meuBotao">Clique aqui</button>
    <script>
        const botao = document.getElementById("meuBotao");
        botao.addEventListener("click", function () {
            alert("Você clicou no botão!");
        });
    </script>
</body>
</html>
```

---

### **Tipos de Eventos e Como Usar**

#### **1. Eventos de Mouse**

- **Exemplo: Alterar cor ao passar o mouse sobre um elemento**:

```html
<div id="quadrado" style="width: 100px; height: 100px; background-color: blue;"></div>
<script>
    const quadrado = document.getElementById("quadrado");
    quadrado.addEventListener("mouseover", function () {
        quadrado.style.backgroundColor = "green";
    });
    quadrado.addEventListener("mouseout", function () {
        quadrado.style.backgroundColor = "blue";
    });
</script>
```

---

#### **2. Eventos de Teclado**

- **Exemplo: Detectar tecla pressionada**:

```html
<input type="text" id="campoTexto" placeholder="Digite algo">
<script>
    const campoTexto = document.getElementById("campoTexto");
    campoTexto.addEventListener("keydown", function (evento) {
        console.log(`Tecla pressionada: ${evento.key}`);
    });
</script>
```

---

#### **3. Eventos de Formulário**

- **Exemplo: Validar campo ao enviar o formulário**:

```html
<form id="meuFormulario">
    <input type="text" id="nome" placeholder="Digite seu nome">
    <button type="submit">Enviar</button>
</form>
<script>
    const formulario = document.getElementById("meuFormulario");
    formulario.addEventListener("submit", function (evento) {
        const nome = document.getElementById("nome").value;
        if (nome === "") {
            alert("O campo nome não pode estar vazio!");
            evento.preventDefault(); // Impede o envio do formulário
        }
    });
</script>
```

---

### **Vantagem do `addEventListener`**

- Permite adicionar múltiplos eventos ao mesmo elemento sem sobrescrever.
- É mais fácil de manter e organizar o código.

```javascript
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", () => console.log("Primeiro evento."));
botao.addEventListener("click", () => console.log("Segundo evento."));
```

---

### **Nomes Válidos e Boas Práticas**

1. **Nome de Eventos:**
   - Sempre em letras minúsculas: `click`, `mouseover`, `keydown`.
2. **Nomes de Funções:**
   - Devem ser descritivos: `validarFormulario`, `alterarCor`.

---

### **Resumo**

- Eventos permitem capturar e reagir às interações do usuário.
- Use `addEventListener` para maior flexibilidade.
- Pratique com os eventos mais comuns: `click`, `mouseover`, `keydown`, etc.
- Mantenha o código organizado e reutilizável.

### **Principais Eventos em JavaScript**

- **`click`** → Dispara quando o elemento é clicado.  
- **`dblclick`** → Dispara quando o elemento é clicado duas vezes rapidamente.  
- **`mouseover`** → Dispara quando o mouse passa sobre um elemento.  
- **`mouseout`** → Dispara quando o mouse sai de um elemento.  
- **`mousemove`** → Dispara quando o mouse se move dentro de um elemento.  
- **`mousedown`** → Dispara quando um botão do mouse é pressionado sobre um elemento.  
- **`mouseup`** → Dispara quando um botão do mouse é liberado sobre um elemento.  

---

#### **Eventos de Teclado**

- **`keydown`** → Dispara quando uma tecla é pressionada.  
- **`keyup`** → Dispara quando uma tecla é liberada.  
- **`keypress`** → (Obsoleto) Dispara quando uma tecla é pressionada, mas não captura todas.  

---

#### **Eventos de Formulário**

- **`submit`** → Dispara quando um formulário é enviado.  
- **`change`** → Dispara quando o valor de um elemento é alterado (campo de texto, select, etc.).  
- **`focus`** → Dispara quando um elemento recebe foco.  
- **`blur`** → Dispara quando um elemento perde o foco.  
- **`input`** → Dispara quando o valor de um campo muda (teclado, colar texto, etc.).  

---

#### **Eventos de Página**

- **`load`** → Dispara quando a página ou elemento termina de carregar.  
- **`unload`** → Dispara quando a página é descarregada (obsoleto).  
- **`resize`** → Dispara quando a janela do navegador é redimensionada.  
- **`scroll`** → Dispara quando a página é rolada.  

---

#### **Eventos de Mídia**

- **`play`** → Dispara quando a reprodução de mídia (vídeo/áudio) começa.  
- **`pause`** → Dispara quando a reprodução de mídia é pausada.  
- **`ended`** → Dispara quando a reprodução de mídia termina.  
- **`volumechange`** → Dispara quando o volume de mídia é alterado.  

---

#### **Eventos de Drag and Drop**

- **`dragstart`** → Dispara quando o usuário começa a arrastar um elemento.  
- **`drag`** → Dispara enquanto o elemento está sendo arrastado.  
- **`dragend`** → Dispara quando o usuário termina de arrastar o elemento.  

---

#### **Outros Eventos Importantes**

- **`contextmenu`** → Dispara quando o botão direito do mouse é clicado para abrir o menu de contexto.  
- **`wheel`** → Dispara quando o scroll do mouse é usado.  
- **`touchstart`** → Dispara quando um toque na tela acontece (dispositivos móveis).  
- **`touchend`** → Dispara quando o toque na tela termina.  

---
