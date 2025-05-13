let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();

y = 15;

console.log(`Y fora da função é: ${y}`);

testandoEscopo();



// Escopo Aninhado (Nested Scopes)

// Let e const dão possibilidade do escopo aninhado
// Consiste em ter em qualquer bloco a declaração de variáveis separadas dos outros escopos
// Um bloco é caracterizado por um código entre {}
// Por exemplo em blocos if ou for


function alertaVermelho() {
    alert("O reator vai explodir, fujam todos!");
}

function testeTemperaturaReator(temperatura) {
    if (temperatura > 200) {
        alertaVermelho();
    }
}

testeTemperaturaReator(100);

testeTemperaturaReator(300);

let m = 10;

function escopoAninhado() {
    let m = 20
    if(true) {
        let m = 30

        if(true) {
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado();

console.log(m);


let valor = 20

function incrementa() {
    valor = valor + 30
}

incrementa()

console.log(valor)




// Arrow Function

const testeArrow = () => {
    console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return
    }
    
    console.log("Impar");
};

parOuImpar(5);

parOuImpar(10);
