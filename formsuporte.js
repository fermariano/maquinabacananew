// Função para salvar os dados no Local Storage
function salvarDados() {
    // Obtém os valores dos campos
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var sexo = document.getElementById("sexo").value;
    var formacao = document.getElementById("formacao").value;
    var experiencia = document.getElementById("experiencia").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    // Cria um objeto com os dados
    var dados = {
        nome: nome,
        idade: idade,
        sexo: sexo,
        formacao: formacao,
        experiencia: experiencia,
        email: email,
        telefone: telefone
    };

    // Converte o objeto para uma string JSON
    var dadosJSON = JSON.stringify(dados);

    // Salva os dados no Local Storage
    localStorage.setItem("dadosFormulario", dadosJSON);
}

// Função para verificar campos e salvar os dados no Local Storage
function verificarCampos() {
    salvarDados();
}

// Carrega os dados do Local Storage (se existirem) ao carregar a página
window.onload = function() {
    var dadosJSON = localStorage.getItem("dadosFormulario");

    if (dadosJSON) {
        // Converte a string JSON de volta para um objeto
        var dados = JSON.parse(dadosJSON);

        // Preenche os campos com os dados salvos
        document.getElementById("nome").value = dados.nome;
        document.getElementById("idade").value = dados.idade;
        document.getElementById("sexo").value = dados.sexo;
        document.getElementById("formacao").value = dados.formacao;
        document.getElementById("experiencia").value = dados.experiencia;
        document.getElementById("email").value = dados.email;
        document.getElementById("telefone").value = dados.telefone;
    }
};

