var inputGanhoPorMes = document.querySelector('#ganho-mes')

var horasPorDia = document.querySelector('#horas-dia')

var spanHora = document.querySelector('.secao-hora .secao__rodape__valor span')

function calcularValorHora() {
  var qtdTotalDeHoras = horasPorDia.valueAsNumber * 22
  var valorDeHoras = (inputGanhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2)

  spanHora.textContent = 'R$' + valorDeHoras
}
