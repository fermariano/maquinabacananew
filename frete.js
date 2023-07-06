function leDados() {
    let strDados = localStorage.getItem('cep')
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse (strDados)
    } else { 
        objDados =  {
            "cupons": [
              {
                "id": 0,
                "cep": "31 588-964"
              },
              {
                "id": 1,
                "cep": "31 741-256"
              },
              {
                "id": 2,
                "cep": "31 584-269"
              }
            ]
          }
        }
          
    return objDados
}


function salvaDados(dados) {
    localStorage.setItem ('cep', JSON.stringify(dados))
}

function incluirCupom() {
   let objDados = leDados()

   let cc = document.getElementById ('fretee').value
   
   
    
    let novoCupom = {
        cep: cc
    };

    objDados.cupons.push(novoCupom)
    
   
    salvaDados(objDados)
    imprimeCupons()
}