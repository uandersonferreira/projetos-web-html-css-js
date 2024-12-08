/*

Estou estudando sobre as operadores em javascript e gostaria da sua ajuda para tentar me explicar de forma simples e direta, mas com exemplos claros a diferença entre os operadores, explica cada um de forma simples e direta também:

    São separados em 6 "Categorias":

    1) Operadores aritméticos (matemáticos)
    2) Operadores de Atribuição
    3) Operadores de Sequência
    4) Operadores de Comparação (true ou false)
    5) Operador Condicional (Ternário)
    6) Operadores Lógicos

*/

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 == valor2); // "==" Compara os valores da variavel é não o seu Tipo.
console.log("(valor1 == valor2): " + total);

total = (valor1 === valor2); // "===" Compara o Valor e Tipo da variavel
console.log("(valor1 === valor2): " + total);

total = (valor1 != "8"); // Vai verificar somente os valores. Se são diferentes ou não
console.log("(valor1 != valor2): " + total);


total = (valor1 !== "8"); // Vai verificar  os valores e seu tipo. Se são diferentes ou não
console.log("(valor1 !== valor2): " + total);

total = (valor1 < valor2);
console.log("(valor1 < valor2): " + total);

total = (valor1 > valor2);
console.log("(valor1 > valor2): " + total);

total = (valor1 >= valor2);
console.log("(valor1 >= valor2): " + total);

total = (valor1 <= valor2);
console.log("(valor1 <= valor2): " + total);

//===================================
// Op. ternário
var idade, eleitor, resultado;
idade = 65;
// variavel = (condição) ? (True) : (False);
eleitor = (idade < 18) ? "Não, eleitor" : "Sim, eleitor";
console.log("A resposta é: " + eleitor + " a idade dele é de: " + idade);

//Op. Lógicos

// Verifica se a idade está entre 60 e 70 (E lógico)
resultado = (idade > 60 && idade < 70); 
console.log("(idade > 60 && idade < 70): " + resultado  + " a idade dele é de: " + idade); 
// Saída: true

// Verifica se a idade é exatamente 60 ou 70 (OU lógico)
resultado = (idade === 60 || idade === 70); 
console.log("(idade === 60 || idade === 70): " + resultado  + " a idade dele é de: " + idade); 
// Saída: false

// Verifica se a idade NÃO é 65 (NÃO lógico)
resultado = !(idade === 65); 
console.log("!(idade === 65): " + resultado  + " a idade dele é de: " + idade); 
// Saída: false


//document.getElementById('texto').innerHTML = total;
