console.log("Fui carregado de um arquivo externo");

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


    var pesoValida = true;
    var alturaValida = true;


    if (peso <= 0 || peso >= 1000){
        console.log("Peso invalalido!");
        tdImc.textContent = "Peso Inválido!";
        pesoValida = false;
        paciente.classList.add("paciente-invalido");
    }


    if (altura <= 0 || altura >= 3){
        console.log("Altura invalalido!");
        tdImc.textContent = "Altura Inválido!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }


    if (pesoValida && alturaValida){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("Oi cliquei no botão");
})


