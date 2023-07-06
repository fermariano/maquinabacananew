var i

var showcase_num = 0
var separadas_num = 0
var montados_num = 0
var trabalho_num = 0
var more_num = 0
var recomendation_num = 0

fetch('teste.json')
    .then(res => res.json())
    .then(data =>{

    const showcase_data = data.item_showcase

    showcase_data.forEach(sho => {
        showcase_num += 1
    });

    const separadas_data = data.pcs_separadas
    
    separadas_data.forEach(sep => {
        separadas_num += 1
    });
    
    const montados_data = data.pcs_montados
    
    montados_data.forEach(mon => {
        montados_num += 1
    });
    
    const trabalho_data = data.pcs_trabalho
    
    trabalho_data.forEach(tra => {
        trabalho_num += 1
    });
    
    const more_data = data.more_products
    
    more_data.forEach(mor => {
        more_num += 1
    });

    const recomendation_data = data.recomendations
    
    recomendation_data.forEach(rec => {
        recomendation_num += 1
    });

    })

var showcase = document.getElementById('product-showcase')

fetch('teste.json')
    .then(res => res.json())
    .then(data => {
        console.log(data.item_showcase)

        for(i=0; i<showcase_num; i++){
            showcase.innerHTML += `
            <div class="item-showcase">
            <img src="${data.item_showcase[i].image}" alt="" class="img-size-items" id="img-item">
                <div class="content-showcase">
                    <p>${data.item_showcase[i].name}</p>
                    <a href="#">Show All</a>
                </div>
            <p class="">(${data.item_showcase[i].quantity})</p>
            </div>
            `
        }
    })
    
var recomendations = document.getElementById('leftbar-recomendations')

    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<recomendation_num; i++){

            switch (data.recomendations[i].review) {
                case 1:
                    data.recomendations[i].review = `
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    `
                    break;
            
                case 2:
                    data.recomendations[i].review = `
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    `
                    break;
            
                case 3:
                    data.recomendations[i].review = `
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    `
                    break;
            
                case 4:
                    data.recomendations[i].review = `
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    `
                    break;
            
                case 5:
                    data.recomendations[i].review = `
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    <ion-icon name=\"star\"></ion-icon>
                    `
                    break;
            
                default:
                    data.recomendations[i].review =`
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    <ion-icon name=\"star-outline\"></ion-icon>
                    `
                    break;
            }

            recomendations.innerHTML += `
        <a href="${i}" class="recomendations">
         <img src="${data.recomendations[i].image}" alt="" class="recomendation-img">

            <div class="recomendation-info">
                <p class="recomendation-name">${data.recomendations[i].name}</p>
                <p class="recomendation-review">${data.recomendations[i].review}</p>
                <p class="recomendation-price">${data.recomendations[i].preco}</p>
            </div>
        </a>
        `}
    })


var product = document.getElementById('pecas-separadas-container')

fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<separadas_num; i++){
        product.innerHTML += `
        <a href="${i}" class="pecas-separadas">
            <img src="${data.pcs_separadas[i].image}" alt="" class="img-size-items" id="img-item">

            <div class="pecas-separadas-info">
                <p class="item-name">${data.pcs_separadas[i].name}</p>
                <p class="item-category">${data.pcs_separadas[i].category}</p>
                <p class="item-price">${data.pcs_separadas[i].preco}</p>
            </div>
        </a>
        `}
    })

    var montados = document.getElementById('pcs-montados-container')

    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<montados_num; i++){
        montados.innerHTML += `
        <a href="${i}" class="pecas-separadas">
            <img src="${data.pcs_montados[i].image}" alt="" class="img-size-items" id="img-item">

            <div class="pecas-separadas-info">
                <p class="item-name">${data.pcs_montados[i].name}</p>
                <p class="item-category">${data.pcs_montados[i].category}</p>
                <p class="item-price">${data.pcs_montados[i].preco}</p>
            </div>
        </a>
        `}
    })

    var trabalho = document.getElementById('pcs-trabalho-container')

    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        for(i=0; i<trabalho_num; i++){
        trabalho.innerHTML += `
        <a href="${i}" class="pecas-separadas">
         <img src="${data.pcs_trabalho[i].image}" alt="" class="img-size-items" id="img-item">

            <div class="pecas-separadas-info">
                <p class="item-name">${data.pcs_trabalho[i].name}</p>
                <p class="item-category">${data.pcs_trabalho[i].category}</p>
                <p class="item-price">${data.pcs_trabalho[i].preco}</p>
            </div>
        </a>
        `}
    })

    var release = document.getElementById('last-release')
    var r



    fetch('teste.json')
    .then(res => res.json())
    .then(data => {

        switch (data.last_release[0].review) {
            case 1:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 2:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 3:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 4:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        
            case 5:
                data.last_release[0].review = `
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                <ion-icon name=\"star\"></ion-icon>
                `
                break;
        
            default:
                data.last_release[0].review =`
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                <ion-icon name=\"star-outline\"></ion-icon>
                `
                break;
        }

        release.innerHTML += `
        <a href="${data.last_release[0].id}" class="last-release-container">
         <img src="${data.last_release[0].image}" alt="" class="last-release-img">

            <div class="last-release-info">
                <p class="release-review">${data.last_release[0].review}</p>
                <p class="release-name">${data.last_release[0].name}</p>
                <p class="release-description">${data.last_release[0].description}</p>
                <p class="release-price">${data.last_release[0].preco}</p>
            </div>
        </a>
        `

        var more_products = document.getElementById('more-products')

        fetch('teste.json')
        .then(res => res.json())
        .then(data => {
    
            for(i=0; i<more_num; i++){

                switch (data.more_products[i].review) {
                    case 1:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 2:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 3:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 4:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                
                    case 5:
                        data.more_products[i].review = `
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        <ion-icon name=\"star\"></ion-icon>
                        `
                        break;
                
                    default:
                        data.more_products[i].review =`
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        <ion-icon name=\"star-outline\"></ion-icon>
                        `
                        break;
                }

            more_products.innerHTML += `
            <a href="${i}" class="more-items">
             <img src="${data.more_products[i].image}" alt="" class="more-products-img">
                <div class="more-items-info">
                <p class="more-item-category">${data.more_products[i].category}</p>
                    <p class="more-item-name">${data.more_products[i].name}</p>
                    <p class="more-item-review">${data.more_products[i].review}</p>
                    <p class="more-item-price">${data.more_products[i].preco}</p>
                </div>
            </a>
            `}
        })

    })


    
        