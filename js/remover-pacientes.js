var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){ // Adiciona o elemento de escutar a interação do usuário
        console.log("Fui clicado com um duplo click;");
        this.remove(); // palavra de contexto, refere-se ao dono do evento. Nesse caso, quem foi clicado.
    }); 
});