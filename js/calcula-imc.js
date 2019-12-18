var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEValido = validaPeso(peso); // true ou false
    var alturaEValida = validaAltura(altura); // true ou false

    if (!pesoEValido){
        // console.log("Peso invalalido!");
        tdImc.textContent = "Peso Inválido!";
        pesoEValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEValida){
        // console.log("Altura invalalido!");
        tdImc.textContent = "Altura Inválido!";
        alturaEValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEValido && alturaEValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso/ (altura*altura);

    return imc.toFixed(2);
}