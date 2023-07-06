let posmessage = document.getElementById('pos-message')

function leDados() {
    let strDados = localStorage.getItem('avaliaçao')
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse (strDados)
    } else { 
        objDados =  {
            "cupons": [
              {
                "id": 0,
                "nome": "Patricia Oliveira",
                "email": "patriciaoliveira@gmail.com",
                "produto": "Desktop",
                "nota": "4",
                "comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              },
              {
                "id": 1,
                "nome": "Gabriel Souza",
                "email": "biel_souza@gmail.com",
                "produto": "Notebook",
                "nota": "4",
                "comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              },
              {
                "id": 2,
                "nome": "Diego Lucas",
                "email": "diegolucas@gmail.com",
                "produto": "Tablet",
                "nota": "4",
                "comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              }
            ]
          }
        }
          
    return objDados
}


function salvaDados(dados) {
    localStorage.setItem ('avaliaçao', JSON.stringify(dados))
}

function incluirCupom() {
   let objDados = leDados()

   let nn = document.getElementById('name').value
   let ee = document.getElementById('email').value
   let pp = document.getElementById('product').value
   let rr = document.getElementById('rating').value
   let cc = document.getElementById('comments').value
   
   
    
    let novoCupom = {
        nome: nn,
        email: ee,
        produto: pp,
        nota: rr,
        comentario: cc
    };

    objDados.cupons.push(novoCupom)
    
   
    salvaDados(objDados)
    window.alert("Avaliação enviada com sucesso!")
}

function imprimeCupons() {
    let tela = document.getElementById('info-message')
    let strHTML = ''
    let objDados = leDados()

    let i = 0
    while (i < objDados.cupons.length) {
        strHTML += `<p><br /> Nome: ${objDados.cupons[i].nome} <br /> Email: ${objDados.cupons[i].email} <br /> Produto: ${objDados.cupons[i].produto} <br /> Nota: ${objDados.cupons[i].nota} <br /> Comentário: ${objDados.cupons[i].comentario}<br /> <br /> <button id="deletar" onclick= "deletarCupom(${i})" >Deletar </button>  </p>
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
    window.alert('Avaliação deletada com sucesso!')
}
  


