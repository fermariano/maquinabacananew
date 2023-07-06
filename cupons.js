
function getTextareaValue(){ 
        fetch('cupons.json')
        .then(res => res.json())
        .then(data => {
            const textarea = document.getElementById('cupom')
            const value = textarea.value.toUpperCase()
            const TextNomeCupom = data.cupons[0].nome
            const nomeCupom = TextNomeCupom.toUpperCase()

           if(value == nomeCupom){
                alert("Cupom Aplicado!")
           }else{
                alert("Esse Cupom Não Existe!")
            }
        })
}

