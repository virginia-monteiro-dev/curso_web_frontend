// Salvando valores na Memória
//até entao estamos apenas exibindo valores no console, mas podemos salvar esses valores em variáveis
// Variáveis são como containers, que salvam informações para quando precisamos utilizar
// Temos como declarar variáveis com let e const

// 1 - Variáveis
// let é uma variável que pode ser alterada

let nome = "Virgínia";
console.log(nome);
console.log("Virgínia");

nome = "Virgínia Monteiro";
console.log(nome);

// const é uma variável que não pode ser alterada
const idade = 31;
console.log(idade);
console.log(typeof nome);
console.log(typeof idade);


// 2 - Mais sobre variáveis
// Podemos criar varias variáveis em sequência desta maneira;
// let a = 5, b = 10, c = 15;
// Não podemos começar variáves com números, nem caracteres especiais, nem palavras reservadas
// variáveis são case sensitive, ou seja, diferenciam letras maiúsculas de minúsculas

// let 2teste = "inválido"; // inválido
// let @teste = "inválido"; // inválido

let a = 10;
    b = 20;
    c = 30;

console.log(a, b, c);

const nomecompleto = "Virgínia Monteiro";

const nomeCompleto = "Nogueira da Silva";

console.log(nomecompleto);
console.log(nomeCompleto);

// 3 - Nomes Reservados
// Algumas palavras tem o nome reservado, não podemos criar variáveis com esses nomes
// break case catch class const continue debugger default delete do else enum export extend false finally for function if implements
// import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield
// é possivel unir ela e mais outra palavra para criar uma variável
// exemplo: let breakTeste = 1;


// 4 - Ambiente JavaScript
// Quando um programa é iniciado, um ambiente é criado
// Neste ambiente temos diversas funções e objetos de linguagem JS
// exemplo: console e alert
// o ambiente no caso é o nevegador 



// 5 - Estrutura de uma função
// FUNÇÃO - Bloco de código que pode ser reaproveitado ao longo do nosso programa;
// invocamos/ chamamos ela pelo seu nome e tbm o uso de parenteses: funcao()
// Podemos inserir parâmetros, que deixam a execução da função única, ex: soma(a,b)
// Utilizamos algumas funções até então, como log de console;


// 6 - Função de Prompt
// Essa função recebe um dado do usuário;
// Podemos salvar este valor em uma variável
// Exemplo: const x = prompt("Digite um número")
// uma função pouco utilizada, mas nos permite fazer ações interessantes

const age = prompt("Digite a sua idade:");
console.log("Você tem ${age} anos."); 


// 7 - Alert
// emite uma mensagem na tela por uma pop up
alert("testando");


// 8 - MATH
// é um objeto, que possui diversas funções para fins matemáticos;
// exemplo: max: encontra o maior número
// floor: arredonda para baixo o número
// ceil: arredonda o número para cima

// 9 - Console
// Também é um objeto, assim como Math tem várias funções 
// Sua função principal é exibir uma mensagem de alguma categoria na aba de console






