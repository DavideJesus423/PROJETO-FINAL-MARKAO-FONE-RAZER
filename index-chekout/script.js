//===================
// CRONOMETRO
//================

let dataFinal;

// Verifica se já existe uma data salva no LocalStorage
if (localStorage.getItem('dataFinal')) {
  dataFinal = new Date(localStorage.getItem('dataFinal'));
} else {
  // Se não existir, cria uma nova data 3 dias à frente e salva
  dataFinal = new Date();
  dataFinal.setDate(dataFinal.getDate() + 3);
  localStorage.setItem('dataFinal', dataFinal.toISOString());
}

function atualizarContagem() {
  const agora = new Date().getTime();
  const distancia = dataFinal.getTime() - agora;

  if (distancia <= 0) {
    clearInterval(intervalo);
    document.querySelector('.countdown').innerHTML = "<strong>Oferta Expirada</strong>";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = dias.toString().padStart(2, '0');
  document.getElementById('hours').innerText = horas.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutos.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = segundos.toString().padStart(2, '0');
}

const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem();


// SELEÇÃO DE CORES

