function leDados() {
    let strDados = localStorage.getItem('diy')
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse (strDados)
    } else { 
        objDados =  {
            "cupons": [
              {
                "id": 1,
                "processador": "AMD Ryzen 7 5800X",
                "placav": "AMD Radeon RX 6700 XT",
                "placam": "MSI B550 TOMAHAWK",
                "memoria": "Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4 3200MHz",
                "armazenamento": "SSD NVMe Samsung 970 EVO Plus 500GB",
                "gabinete": "NZXT H510",
                "fonte": "Corsair TX750M 750W 80 Plus Gold" ,
                "cooler": "NZXT Kraken X63"
              },
              {
                "id": 2,
                "processador": "AMD Ryzen 7 5800X",
                "placav": "NVIDIA GeForce RTX 3060",
                "placam": "ASUS ROG Strix B550-F Gaming",
                "memoria": "Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4 3200MHz",
                "armazenamento": "Samsung 970 EVO Plus 500GB NVMe M.2 SSD",
                "gabinete": "NZXT H710 Mid Tower",
                "fonte": "Corsair RM750x 750W 80 Plus Gold" ,
                "cooler": "Cooler Master Hyper 212 RGB Black Edition"
              },
              {
                "id": 3,
                "processador": "AMD Ryzen 5 5600G 3.9GHz",
                "placav": "RTX 3060 OC Galax GeForce, 12GB GDDR6",
                "placam": "Gigabyte B450M Gaming, AMD AM4, mATX, DDR4",
                "memoria": "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
                "armazenamento": "Kingston A2000 500GB NVMe M.2 SSD",
                "gabinete": "MasterBox TD500 Mesh V2",
                "fonte": "Corsair CX650 650W 80 Plus Bronze" ,
                "cooler": "Cooler Master Hyper 212 RGB Black Edition"
              }
            ]
          }
        }
          
    return objDados
}

function salvaDados(dados) {
    localStorage.setItem ('teste', JSON.stringify(dados))
}


function imprimeCupons() {
    let tela = document.getElementById('info-message')
    let strHTML = ''
    let objDados = leDados()

    let i = 0
    while (i < objDados.cupons.length) {
        strHTML += `<div id="separar"> <h3> Opção ${objDados.cupons[i].id}: </h3> 
        <div id="title"> Processador: </div> ${objDados.cupons[i].processador} 
         <div id="title"> Placa de vídeo: </div> ${objDados.cupons[i].placav} 
        <br /> <div id="title"> Placa-mãe: </div> ${objDados.cupons[i].placam} 
        <br /> <div id="title"> Memória: </div> ${objDados.cupons[i].memoria} 
        <br /> <div id="title"> Armazenamento: </div> ${objDados.cupons[i].armazenamento} 
        <br /> <div id="title"> Gabinete: </div> ${objDados.cupons[i].gabinete}
        <br /> <div id="title"> Fonte: </div> ${objDados.cupons[i].fonte}
        <br /> <div id="title"> Cooler: </div> ${objDados.cupons[i].cooler}
        <a href="saibamais.html"><br /> <button class="button2">Saiba mais</button> </div></a>
        
        
        `
        i++
    }
        tela.innerHTML = strHTML
}
