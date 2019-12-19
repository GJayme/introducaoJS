var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    //Validação e mensagem de erro
    var erros = validaPaciente(paciente);

    console.log(erros);
    if (erros.length >0){
        exibeMensagensDeErro(erros);
        return;
    }

    if (!validaPaciente(paciente)){
        console.log("Paciente inválido");
        return;
    }

    // Adiciona paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; // limpa o form e limpa as msg de erro, quando acrescentamos valores validos
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // Permite controlar o HTML interno

    erros.forEach(function(erro){ // forEach percorre sem precisar colocar até o elemento final
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente){ //validação do paciente

    var erros = [];

    if (paciente.nome.length == 0){ // validação feita de acordo com o tamanho dos input
        erros.push("O nome não pode ser em branco.");
    }
    
    if (!validaPeso (paciente.peso)){
        erros.push("Peso é invalido.");
    } 

    if (!validaAltura (paciente.altura)){
        erros.push("Altura é invalida.");
    }

    if (paciente.gordura.length == 0 ){ // validação feita de acordo com o tamanho dos input
        erros.push("A gordura não pode ser em branco.");
    }

    if (paciente.peso.length == 0){ // validação feita de acordo com o tamanho dos input
        erros.push("O peso não pode ser em branco.");
    }

    if (paciente.altura.length == 0){ // validação feita de acordo com o tamanho dos input
        erros.push("A altura não pode ser em branco.");
    }

    return erros;
}