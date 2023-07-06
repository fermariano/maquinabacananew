// Seleciona o botão calcular
const calcularBtn = document.getElementById("calcular-btn");
// Seleciona o input de valor total
const valorTotalInput = document.querySelector("#input-valorTotal input");
// Seleciona o input do número de parcelas
const numParcelasInput = document.querySelector("#input-numParcelas input");
// Seleciona a div valorParcela
const valorParcela = document.getElementById("valorParcela");
// Seleciona o botão limpar
const clearBtn = document.getElementById("clear-btn");
// Seleciona a div valorParcela
const valorParcelaDiv = document.querySelector("#valorParcela");

//calcula o valor de cada parcela e atualiza o valor de valorParcela
calcularBtn.addEventListener("click", function () {
  const valorTotal = 1000
  //const valorTotal = parseFloat(valorTotalInput.value);
  const numParcelas = parseFloat(numParcelasInput.value);
  const valorParcelaCalculado = (valorTotal / numParcelas).toFixed(2);
  valorParcela.textContent = `R$ ${valorParcelaCalculado}`;
  if (valorTotal <= 0 || numParcelas <= 0) {
    valorParcela.textContent = "ERRO";
  } else if (!valorTotal || !numParcelas) {
    valorParcela.textContent = "ERRO";
  } else {
    const valorParcelaCalculado = (1000 / numParcelas).toFixed(2);
    valorParcela.textContent = `R$ ${valorParcelaCalculado}`;
  }
});

// Define o evento de clique do botão clear-btn
clearBtn.addEventListener("click", function () {
  // Define o valor do input de valor total para o placeholder inicial
  valorTotalInput.value = "";
  valorTotalInput.placeholder = "Valor Total";

  // Define o valor do input de número de parcelas para o placeholder inicial
  numParcelasInput.value = "";
  numParcelasInput.placeholder = "Número de parcelas";

  // Define o texto da div valorParcela para "R$ 0.00"
  valorParcelaDiv.textContent = "R$ 0.00";
});
