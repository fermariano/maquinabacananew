document.addEventListener("DOMContentLoaded", function() {
    var nomeInput = document.getElementById("nome");
    var sobrenomeInput = document.getElementById("sobrenome");
    var nomeUsuarioInput = document.getElementById("nomeUsuario");
    var emailInput = document.getElementById("email");
    var senhaInput = document.getElementById("senha");
    var salvarBtn = document.getElementById("salvarBtn");
  
    // Verificar se já existem dados salvos na Local Storage
    if (localStorage.getItem("cadastro")) {
      var cadastro = JSON.parse(localStorage.getItem("cadastro"));
      nomeInput.value = cadastro.nome;
      sobrenomeInput.value = cadastro.sobrenome;
      nomeUsuarioInput.value = cadastro.nomeUsuario;
      emailInput.value = cadastro.email;
      senhaInput.value = cadastro.senha;
    }
  
    salvarBtn.addEventListener("click", function() {
      // Obter os valores dos campos de input
      var nome = nomeInput.value;
      var sobrenome = sobrenomeInput.value;
      var nomeUsuario = nomeUsuarioInput.value;
      var email = emailInput.value;
      var senha = senhaInput.value;
  
      // Verificar se os campos estão preenchidos
      if (nome && sobrenome && nomeUsuario && email && senha) {
        // Criar um objeto com os dados
        var cadastro = {
          nome: nome,
          sobrenome: sobrenome,
          nomeUsuario: nomeUsuario,
          email: email,
          senha: senha
        };
  
        // Salvar os dados na Local Storage
        localStorage.setItem("cadastro", JSON.stringify(cadastro));
  
        // Exibir uma mensagem de sucesso ou fazer outras ações necessárias
        alert("Dados salvos com sucesso!");
      } else {
        // Exibir uma mensagem de erro ou fazer outras ações necessárias
        alert("Por favor, preencha todos os campos!");
      }
    });
  });
         // Salvar os dados na Local Storage  