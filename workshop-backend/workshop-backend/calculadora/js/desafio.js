var inputValorHora = document.querySelector('#valor-hora')

var horasDeProjetos = document.querySelector('#horas-projeto')

var spanValorDoProjeto = document.querySelector('#resposta')

function calcular() {
  var valorTotal = (inputValorHora.valueAsNumber * horasDeProjetos.valueAsNumber).toFixed(2)

  spanValorDoProjeto.textContent = 'R$' + valorTotal
}

// primeira dica: capturar os valores introduzidos pela 
// pessoa usuária (valor-hora e horas-projeto)
// valor hora e horas projeto (variáveis)
// segunda dica: capturar o lugar em que a resposta vai ser mostrada (resposta)
// terceira dica: função => calcular a partir dos valores 
// capturados qual é o valor total do projeto