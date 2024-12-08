A manipulação de datas em JavaScript é feita principalmente com o objeto **`Date`**, que é bastante versátil. Ele permite criar, formatar, e manipular datas e horas. Aqui vai uma explicação direta, com exemplos e comparações com Java:

---

### **1. Criando um objeto `Date`**

Em JavaScript, usamos o construtor `Date` para criar um novo objeto de data.

```javascript
let agora = new Date(); // Data e hora atuais
console.log(agora);
```

- **Semelhante em Java**:

  ```java
  LocalDateTime agora = LocalDateTime.now();
  System.out.println(agora);
  ```

---

### **2. Criando datas específicas**

Você pode criar uma data específica passando parâmetros: ano, mês (0 a 11), dia, hora, minutos, segundos e milissegundos.

```javascript
let dataEspecifica = new Date(2024, 11, 25, 15, 30, 0); // 25 de dezembro de 2024, 15:30
console.log(dataEspecifica);
```

- O **mês** em JavaScript é indexado em **0** (0 = Janeiro, 11 = Dezembro).

- **Semelhante em Java**:

  ```java
  LocalDateTime dataEspecifica = LocalDateTime.of(2024, 12, 25, 15, 30);
  System.out.println(dataEspecifica);
  ```

---

### **3. Métodos principais para obter dados**

Os métodos de `Date` permitem extrair partes específicas da data:

```javascript
let agora = new Date();
console.log(agora.getFullYear()); // Ano atual
console.log(agora.getMonth());    // Mês (0 a 11)
console.log(agora.getDate());     // Dia do mês
console.log(agora.getHours());    // Hora
console.log(agora.getMinutes());  // Minutos
console.log(agora.getSeconds());  // Segundos
```

- **Semelhante em Java**:

  ```java
  LocalDateTime agora = LocalDateTime.now();
  System.out.println(agora.getYear());
  System.out.println(agora.getMonthValue()); // 1 a 12
  System.out.println(agora.getDayOfMonth());
  System.out.println(agora.getHour());
  System.out.println(agora.getMinute());
  System.out.println(agora.getSecond());
  ```

---

### **4. Definindo valores**

Você pode alterar partes da data com métodos como `setFullYear`, `setMonth`, etc.:

```javascript
let data = new Date();
data.setFullYear(2030);
data.setMonth(0); // Janeiro
data.setDate(15); // 15º dia
console.log(data);
```

- **Semelhante em Java** (imutável, precisa criar uma nova instância):

  ```java
  LocalDate data = LocalDate.now().withYear(2030).withMonth(1).withDayOfMonth(15);
  System.out.println(data);
  ```

---

### **5. Comparando datas**

Para comparar datas, você pode usar métodos como `getTime` ou operadores diretamente:

```javascript
let data1 = new Date(2023, 0, 1);
let data2 = new Date(2024, 0, 1);

console.log(data1 < data2); // true
console.log(data1.getTime() === data2.getTime()); // false
```

- **Semelhante em Java**:

  ```java
  LocalDate data1 = LocalDate.of(2023, 1, 1);
  LocalDate data2 = LocalDate.of(2024, 1, 1);

  System.out.println(data1.isBefore(data2)); // true
  System.out.println(data1.isEqual(data2));  // false
  ```

---

### **6. Convertendo para Strings**

Você pode formatar uma data em uma string legível:

```javascript
let agora = new Date();
console.log(agora.toDateString()); // Ex: "Tue Dec 03 2024"
console.log(agora.toISOString());  // ISO format: "2024-12-03T12:34:56.789Z"
console.log(agora.toLocaleDateString('pt-BR')); // "03/12/2024"
```

- **Semelhante em Java** (usando `DateTimeFormatter`):

  ```java
  LocalDateTime agora = LocalDateTime.now();
  System.out.println(agora.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
  System.out.println(agora.format(DateTimeFormatter.ISO_DATE_TIME));
  ```

---

### **7. Trabalhando com bibliotecas externas**

JavaScript tem suporte a bibliotecas como **moment.js** ou **day.js** (usadas para simplificar manipulações mais complexas). Em Java, usamos **Joda-Time** ou classes modernas da API `java.time`.

---

### **Resumo de Nomes Válidos:**

- Métodos para obter: `getFullYear`, `getMonth`, `getDate`, `getHours`, `getMinutes`, `getSeconds`.
- Métodos para definir: `setFullYear`, `setMonth`, `setDate`, `setHours`, `setMinutes`, `setSeconds`.

---

## Exemplos em Java :)

Aqui estão os exemplos em **Java** usando a API moderna de manipulação de datas introduzida no pacote `java.time`:

---

### **Comando base para pegar a data atual**

```java
import java.time.LocalDateTime;

LocalDateTime data = LocalDateTime.now();
System.out.println(data);
```

---

### **Pegar o ano atual com 4 dígitos**

```java
int ano = data.getYear();
System.out.println("ano: " + ano);
```

---

### **Pegar o mês atual (1 a 12)**

```java
int mes = data.getMonthValue();
System.out.println("mes: " + mes);
```

---

### **Mostrar o mês no formato escrito**

```java
String mesEscrito = data.getMonth().name(); // Nome em inglês, como JANUARY
System.out.println("mesEscrito: " + mesEscrito);

// Para formatar como "Janeiro, Fevereiro, etc.", usamos Locale:
import java.util.Locale;
String mesEscritoBR = data.getMonth().getDisplayName(java.time.format.TextStyle.FULL, Locale.forLanguageTag("pt-BR"));
System.out.println("mesEscritoBR: " + mesEscritoBR);
```

---

### **Pegar o dia do mês (1 a 31)**

```java
int diaMes = data.getDayOfMonth();
System.out.println("diaMes: " + diaMes);
```

---

### **Pegar o dia da semana**

```java
import java.time.DayOfWeek;

DayOfWeek diaSemana = data.getDayOfWeek();
System.out.println("diaSemana: " + diaSemana.name()); // Nome em inglês

// Em português:
String diaSemanaEscrito = diaSemana.getDisplayName(java.time.format.TextStyle.FULL, Locale.forLanguageTag("pt-BR"));
System.out.println("diaSemanaEscrito: " + diaSemanaEscrito);
```

---

### **Pegar a hora, minutos, segundos e milissegundos**

```java
int hora = data.getHour();
System.out.println("hora: " + hora);

int minutos = data.getMinute();
System.out.println("minutos: " + minutos);

int segundos = data.getSecond();
System.out.println("segundos: " + segundos);

// Milissegundos não são diretamente acessíveis em LocalDateTime
int nanos = data.getNano(); // Nanossegundos (1 bilhão = 1 segundo)
System.out.println("nanos: " + nanos);
```

---

### **Pegar a data no padrão brasileiro**

```java
import java.time.format.DateTimeFormatter;

DateTimeFormatter formatoBR = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String dataBR = data.format(formatoBR);
System.out.println("dataBR: " + dataBR);
```

---

### **Formatar data com zeros à esquerda**

```java
DateTimeFormatter padraoBR = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String dataPadraoBR = data.format(padraoBR);
System.out.println("dataPadraoBR: " + dataPadraoBR);
```

---

### **Comparar datas - Exemplo de vencimentos**

```java
import java.time.LocalDate;

LocalDate hoje = LocalDate.now();
LocalDate vencimento = LocalDate.of(2024, 12, 1);

if (hoje.isAfter(vencimento)) {
    System.out.println("Sua conta está vencida!");
} else {
    System.out.println("Ainda não venceu, tudo certo!");
}
```

---

### **Diferença entre duas datas em dias**

```java
import java.time.temporal.ChronoUnit;

LocalDate dataInicial = LocalDate.now();
LocalDate dataFinal = LocalDate.of(2024, 12, 31);

long diferencaDias = ChronoUnit.DAYS.between(dataInicial, dataFinal);
System.out.println("diferencaDias: " + diferencaDias + " dias");
```

---
