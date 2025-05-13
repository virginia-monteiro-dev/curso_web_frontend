// Tipos de dados mais comuns: string, number, boolean, null, undefined, object, array, function
// todo número no Java Script é do tipo Number
// todo texto no Java Script é do tipo String
// Empty values: null, undefined, NaN (Not a Number)
// NaN é um valor de número inválido
// todo objeto é do tipo object
// o array é considerado objeto


// 1 - Number
// Qnd eu não coloco entre aspas o JS entende que é um dado numérico
console.log(2);
console.log(typeof 2);
console.log(typeof 5.1);
console.log(typeof -12);

// 2 - Operações Aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(24 / 4);
console.log(3 * 5);
console.log(5 + (4 * 2));



// 3 - Special Numbers 
//  São considerados números, mas não funcionam como números 
// Infinity, -Infinity, NaN(Not a Number )
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd"); // Multiplicação de número com texto - NaN - não é operação de matemática básica 
console.log(typeof NaN);


// 4 - Strings
// três formas de criar dados de texto:
// com aspas simples, aspas duplas e com acento grave
// deve sempre começar e terminar com o mesmo tipo de aspas
// \n - quebra de linha no texto

console.log('Um texto');
console.log("Mais um texto");
console.log(`um texto com acento grave`);
console.log(`13`);

console.log("texto com quebra de linha \n e mais texto");


// 5 - Simbolos Especiais em Strings
// \ - barra invertida
// \n - quebra de linha
// \t - tabulação

console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");



// 6 - Concatenação
// reune textos diferentes em um só
// O operador de concatenação é o sinal de +
// exemplo: "meu" + "texto" + "combinado" 


console.log("Oi, " + " tudo" + " bem?");

console.log(`Testando ` + `com ` + `crase!`);



// 7 - Interpolação
// nos possibilita escrever tudo na mesma string
// deve ser escrita entre crases
// Podemos executar código JavaScript com ${algum código}

console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);



// 8 - Booleanos
// só tem dois valores possíveis: true e false
// são utilizados para verificar condições
// usa os sinais: >, <, >=, <=, ==, ===, !=, !==
// == compara só o valor
// === compara o valor e o tipo
// != diferente de
// !== diferente de valor e tipo

console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);


// 9 - Comparações
// maior e menor: > e <;
// maior ou igual e menor ou igual: >= e <=;
// igual: ==;
// diferente: !=;
// Idêntico: ===;

console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);


// 10 - Comparação de Idêntico
// compara o valor e o tipo
// os operadores de comparação são: === e !==
// os operadores === e !== funcionam como == e !=, mas com a diferença de que eles comparam o tipo de dado também
// esses operadores necessitam que o tipo de dado sejam iguais/ diferentes;

console.log(9 == "9");
console.log(9 + "9"); //aqui ele soma
console.log(9 === "9");


// 11 - Operadores Lógicos 
// servem para unir duas ou mais comparações
// o resultado final e sempre um booleano
// && - AND - true apenas se os dois valores forem true
// || - OR - para ser true, so basta um ser true 
// ! - NOT - este operador inverte a comparação 

console.log(true && true);
console.log(true && false);

console.log(5 > 2 && 2 <10);

console.log(5 > 2 && "Matheus" === 1);

// 12 - Empty Values
// tem duas palavras reservadas que representam este grupo de dados: undefined e null
// undefined - é visto qnd utilizamos um código que ainda não foi definido
// null - determina que não há ainda um valor definido

console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);


// 13 - Conversão de Tipo Automática - Mudança de Tipo de Dados
// Em JavaScript algumas operações mudam o tipo de dao e isso acontece silenciosamente
// exemplo: 5* null =>0
// "5" - 3 => 2
// "5" + 1 => 51
// "a" * "b" +> NaN

console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);










