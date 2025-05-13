/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg,
 tem 1.8 de altura e seu IMC é de 25.925925925925924 
 Luiz Otavio nasceu em 1980 */

const nome = "Virginia Monteiro";
const sobrenome = "Nogueira";
const idade = 42;
const peso = 70;
const alturaEmM = 1.70;

let imc; // peso / (altura * altura);
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

console.log(nome, sobrenome, 'tem' , idade, 'anos', 'pesa', peso, 'kg', 'tem', alturaEmM, 'de altura e seu IMC é de', imc);






