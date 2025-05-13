const nome = "Virgínia"; // string
const nome1 = 'Silva'; // string
const nome2 = `Nogueira`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // Aqui a variável está declarada, mas não foi inicializada. recebe o valor undefined pelo JS
let sobrenomeAluno = null; // Nulo, não é mesmo que o undefined, nulo é qnd EU DEFINO que a variável não aponte para nenhum local na memória 
const boolean = false;    // Duas possibilidades: TRUE ou FALSE

console.log(typeof nome, nome);

console.log(typeof num2, num2);

console.log(typeof nomeAluno, nomeAluno);

console.log(typeof sobrenomeAluno, sobrenomeAluno);

let a = 2;
const b = a;
console.log(a, b); // A e B apontam para o mesmo local na memória //2, 2

a = 3;
console.log(a,b); //3, 2

b. push(3);
console.log(a, b);


