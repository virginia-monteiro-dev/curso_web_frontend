//Se eu colocar a chamada da função antes do corpo da função será que funciona?sim

teste()

function teste () {
    console.log("teste")
}


function falaOi() {
    console.log('Oie');
}

// As funções são First-Class objects (Objetos de primeira classe)
// 
    const souUmDado = function() {
        console.log('Sou um dado.');
    };

    souUmDado();