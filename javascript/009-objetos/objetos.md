### **Objetos em JavaScript**

Objetos em JavaScript são estruturas que representam entidades do mundo real, armazenando pares de **chave-valor**. Eles são semelhantes às classes ou instâncias de classes em Java, mas com menos formalidade e mais flexibilidade.

---

### **Sintaxe Básica**

Um objeto é declarado usando `{}` (chaves) e contém propriedades (chave: valor).

```javascript
const pessoa = {
    nome: "Uanderson",
    idade: 22,
    saudacao: function () {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    },
};

console.log(pessoa.nome); // Saída: Uanderson
console.log(pessoa.saudacao()); // Saída: Olá, meu nome é Uanderson e tenho 22 anos.
```

- **`chave`**: Nome da propriedade (equivalente a atributos em Java).
- **`valor`**: O conteúdo da propriedade (pode ser texto, número, função, ou até outro objeto).
- **`this`**: Refere-se ao próprio objeto.

**Comparação com Java**:
Em Java, seria equivalente a criar uma classe:

```java
class Pessoa {
    String nome;
    int idade;

    Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    String saudacao() {
        return "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";
    }
}

Pessoa pessoa = new Pessoa("Uanderson", 22);
System.out.println(pessoa.nome); // Saída: Uanderson
System.out.println(pessoa.saudacao()); // Saída: Olá, meu nome é Uanderson e tenho 22 anos.
```

---

### **Criando e Acessando Propriedades**

#### **1. Criando um Objeto**

- **Literal** (mais comum):

  ```javascript
  const carro = {
      marca: "Toyota",
      modelo: "Corolla",
      ano: 2022,
  };
  ```

- **Usando o `new Object`**:

  ```javascript
  const carro = new Object();
  carro.marca = "Toyota";
  carro.modelo = "Corolla";
  carro.ano = 2022;
  ```

#### **2. Acessando Propriedades**

- **Notação de Ponto** (mais comum):

  ```javascript
  console.log(carro.marca); // Toyota
  ```

- **Notação de Colchetes**:

  ```javascript
  console.log(carro["modelo"]); // Corolla
  ```

---

### **Variações e Usos**

#### **1. Objetos com Funções**

Um objeto pode conter funções (métodos).

```javascript
const calculadora = {
    somar: function (a, b) {
        return a + b;
    },
    subtrair(a, b) {
        return a - b; // Forma abreviada
    },
};

console.log(calculadora.somar(5, 3)); // Saída: 8
console.log(calculadora.subtrair(10, 7)); // Saída: 3
```

#### **2. Objetos Aninhados**

Objetos podem conter outros objetos.

```javascript
const escola = {
    nome: "Escola ABC",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
    },
};

console.log(escola.endereco.rua); // Saída: Rua das Flores
```

#### **3. Iterar Sobre Propriedades**

Para percorrer as propriedades de um objeto, use `for...in`.

```javascript
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
// Saída:
// nome: Uanderson
// idade: 22
// saudacao: function
```

---

### **Métodos Úteis para Objetos**

#### **`Object.keys()`**

Retorna as chaves do objeto.

```javascript
console.log(Object.keys(pessoa)); // ["nome", "idade", "saudacao"]
```

#### **`Object.values()`**

Retorna os valores do objeto.

```javascript
console.log(Object.values(pessoa)); // ["Uanderson", 22, function]
```

#### **`Object.entries()`**

Retorna pares chave-valor.

```javascript
console.log(Object.entries(pessoa));
// [["nome", "Uanderson"], ["idade", 22], ["saudacao", function]]
```

---

### **Diferenças Entre JavaScript e Java**

| Aspecto                  | JavaScript                           | Java                                      |
|--------------------------|---------------------------------------|------------------------------------------|
| Estrutura                | Objeto literal (`{}`) ou construtor. | Necessita de classes e instâncias.       |
| Propriedades             | Dinâmicas, podem ser adicionadas.    | Precisam ser definidas na classe.        |
| Métodos                  | Podem ser definidos diretamente.     | Métodos pertencem à classe.              |
| Acessibilidade           | Notação de ponto ou colchetes.       | Apenas notação de ponto.                 |

---

### **Resumo**

- **Objetos em JavaScript** são flexíveis e dinâmicos, sendo usados amplamente para modelar dados.
- Use **chaves e valores** para representar atributos e métodos.
- Se você já conhece classes em Java, objetos em JavaScript são bem mais simples.
