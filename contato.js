let posmessage = document.getElementById('pos-message')

function leDados() {
    let strDados = localStorage.getItem('teste')
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse (strDados)
    } else { 
        objDados =  {
            "cupons": [
              {
                "id": 0,
                "nome": "Cláudia Santos",
                "email": "claudiacliente@gmail.com",
                "assunto": "Data de entrega do meu computador",
                "mensagem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              },
              {
                "id": 1,
                "nome": "Rafael Dias",
                "email": "rafa_dias@hotmail.com",
                "assunto": "Minha placa de vídeo não está funcionando.",
                "mensagem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              },
              {
                "id": 2,
                "nome": "Luca Pietro",
                "email": "lucapietro@gmail.com",
                "assunto": "Como instalar o Windows no meu computador?",
                "mensagem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              }
            ]
          }
        }
          
    return objDados
}

function salvaDados(dados) {
    localStorage.setItem ('teste', JSON.stringify(dados))
}

function incluirCupom() {
   let objDados = leDados()

   let nn = document.getElementById('name').value
   let ee = document.getElementById('email').value
   let aa = document.getElementById('subject').value
   let mm = document.getElementById('message').value
   
    let novoCupom = {
        nome: nn,
        email: ee,
        assunto: aa,
        mensagem: mm
    };

    objDados.cupons.push(novoCupom)
    
   
    salvaDados(objDados)
    imprimeCupons()
    
}

function imprimeCupons() {
    let tela = document.getElementById('info-message')
    let strHTML = ''
    let objDados = leDados()

    let i = 0
    while (i < objDados.cupons.length) {
        strHTML += `<p><br /> Nome: ${objDados.cupons[i].nome} <br /> Email: ${objDados.cupons[i].email} <br /> Assunto: ${objDados.cupons[i].assunto} <br /> Mensagem: ${objDados.cupons[i].mensagem} <br /> <br /> <button id="deletar" onclick= "deletarCupom(${i})" >Deletar mensagem</button>  </p>
        `
        i++
    }
        tela.innerHTML = strHTML
}

function deletarCupom(id) {
  

  
    let objDados = leDados();

    // Encontra o índice do cupom com o ID correspondente
    let index = objDados.cupons.findIndex(cupom => cupom.id == id);
    if (index !== 1) {
        objDados.cupons.splice(index, 1); // Remove o cupom do array
        salvaDados(objDados); // Salva os dados atualizados no localStorage
        imprimeCupons(); // Atualiza a exibição dos cupons
    }
    window.alert('Mensagem deletada com sucesso!')
}
  



// botões

