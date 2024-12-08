JSON (**JavaScript Object Notation**) é um formato de dados leve e fácil de ler, usado para troca de informações entre sistemas. Ele é baseado na sintaxe de objetos do JavaScript, mas é amplamente usado em várias linguagens, incluindo Java. Vamos destrinchar isso!

---

### **Sintaxe JSON**

O JSON é composto por pares **chave-valor**, sendo as chaves sempre strings e os valores podendo ser:

- Strings
- Números
- Arrays (listas)
- Objetos (aninhados)
- `true`, `false` ou `null`

Exemplo de JSON:

```json
{
  "nome": "Uanderson",
  "idade": 25,
  "habilidades": ["Java", "JavaScript", "SQL"],
  "ativo": true,
  "endereco": {
    "rua": "Rua das Flores",
    "numero": 123
  }
}
```

---

### **Regras importantes**

- As **chaves** devem estar entre aspas duplas (`"`).
- Strings como valores também usam aspas duplas.
- Nomes de chaves devem ser únicos dentro do mesmo nível de um objeto.

### **Diferenças para Java**

No Java, você trabalharia com classes e objetos para representar esses dados:

```java
public class Pessoa {
    private String nome;
    private int idade;
    private List<String> habilidades;
    private boolean ativo;
    private Endereco endereco;

    // Getters e Setters aqui...
}

public class Endereco {
    private String rua;
    private int numero;

    // Getters e Setters aqui...
}
```

Para manipular JSON no Java, bibliotecas como **Jackson** ou **Gson** são usadas para converter entre objetos Java e JSON.

---

### **Como usar JSON no JavaScript**

1. **Criar um objeto JSON**
   Em JavaScript, um JSON pode ser criado diretamente como um objeto:

   ```javascript
   const pessoa = {
     nome: "Uanderson",
     idade: 25,
     habilidades: ["Java", "JavaScript", "SQL"],
     ativo: true,
     endereco: {
       rua: "Rua das Flores",
       numero: 123
     }
   };
   ```

2. **Converter JSON para string**  
   Quando precisa enviar um JSON para outro sistema (ex.: via API), use:

   ```javascript
   const jsonString = JSON.stringify(pessoa);
   console.log(jsonString);
   ```

3. **Converter string para JSON**  
   Quando recebe um JSON (ex.: de uma API), converta para um objeto:

   ```javascript
   const jsonString = '{"nome":"Uanderson","idade":25}';
   const pessoa = JSON.parse(jsonString);
   console.log(pessoa.nome); // Uanderson
   ```

---

### **Variações de uso**

JSON pode conter listas de objetos:

```json
[
  { "nome": "Uanderson", "idade": 25 },
  { "nome": "Maria", "idade": 30 }
]
```

Em JavaScript:

```javascript
const pessoas = [
  { nome: "Uanderson", idade: 25 },
  { nome: "Maria", idade: 30 }
];

console.log(pessoas[1].nome); // Maria
```

---

### **Nomes válidos**

As chaves podem:

- Começar com letras, `$` ou `_`.
- Não conter espaços ou caracteres especiais (exceto `_` e `$`).

Exemplo inválido:

```json
{
  "123nome": "Uanderson",  // Não pode começar com número
  "nome completo": "Erro" // Espaços não são permitidos
}
```

---

---

### **1. Formulário de Cadastro com JavaScript (Frontend)**

Aqui está o HTML + JavaScript:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário com Busca de CEP</title>
</head>
<body>
  <h1>Formulário de Cadastro</h1>
  <form id="formulario">
    <label for="cep">CEP:</label>
    <input type="text" id="cep" name="cep" placeholder="Digite o CEP" required>
    <button type="button" onclick="buscarCep()">Buscar CEP</button>
    <br><br>
    <label for="logradouro">Logradouro:</label>
    <input type="text" id="logradouro" name="logradouro" readonly>
    <br><br>
    <label for="cidade">Cidade:</label>
    <input type="text" id="cidade" name="cidade" readonly>
    <br><br>
    <label for="estado">Estado:</label>
    <input type="text" id="estado" name="estado" readonly>
    <br><br>
    <button type="submit">Cadastrar</button>
  </form>

  <script>
    function buscarCep() {
      let input = document.getElementById("cep").value;

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
  </script>
</body>
</html>
```

### **Explicação**

- Quando o usuário digita o CEP e clica em "Buscar CEP", a função `buscarCep()` é chamada.
- A API do ViaCEP é consultada via AJAX.
- Os campos de `logradouro`, `cidade` e `estado` são preenchidos automaticamente com os dados retornados.

---

### **2. Versão em Java (Backend)**

Aqui vamos criar uma aplicação usando Spring Boot para fazer a mesma busca de CEP. Primeiro, você precisará das dependências no seu projeto.

#### Dependência Maven

Adicione isso no arquivo `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
</dependency>
```

#### Classe Controladora

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
public class CepController {

    @GetMapping("/buscar-cep")
    public Map<String, Object> buscarCep(@RequestParam String cep) {
        String url = "https://viacep.com.br/ws/" + cep + "/json/";
        RestTemplate restTemplate = new RestTemplate();

        // Chama a API do ViaCEP
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);

        return response;
    }
}
```

#### Frontend consumindo o Backend

O frontend (em JavaScript) agora chamará o endpoint `/buscar-cep`:

```javascript
function buscarCep() {
  let input = document.getElementById("cep").value;

  fetch('/buscar-cep?cep=' + input)
    .then(response => {
      if (!response.ok) throw new Error("Erro ao buscar o CEP");
      return response.json();
    })
    .then(obj => {
      // Preenchendo os campos
      document.getElementById("logradouro").value = obj.logradouro || "Não encontrado";
      document.getElementById("cidade").value = obj.localidade || "Não encontrado";
      document.getElementById("estado").value = obj.uf || "Não encontrado";
    })
    .catch(error => alert(error.message));
}
```

---

### **Resumo**

- **JavaScript:** Utiliza a API diretamente com AJAX ou Fetch.
- **Java:** O backend chama a API com `RestTemplate` e retorna os dados para o frontend.

Ambos os exemplos garantem que os dados sejam preenchidos automaticamente no formulário! 🚀
