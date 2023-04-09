//let g = 0;
//function giraBg() {
//  document.getElementById("gradiente").style.background =
//    "linear-gradient(" + g + "deg, #d984a3 0%, #bf4226 100%)";
//  if (g < 360) {
//    g++;
//  } else {
//    g = 0;
//  }
//}
//setInterval(giraBg, 5);
//O código abaixo é a versão feita por ChatGPT do código acima.

function giraBg() {
  const gradiente = document.getElementById("gradiente");
  let angulo = gradiente.dataset.angulo || 0;
  gradiente.style.background = `linear-gradient(${angulo}deg, #d984a3 0%, #bf4226 100%)`;
  angulo = (parseInt(angulo) + 1) % 360;
  gradiente.dataset.angulo = angulo;
  requestAnimationFrame(giraBg);
}
requestAnimationFrame(giraBg);

function clock() {
  let tempo = new Date();
  let ano = tempo.getFullYear();
  let mes = tempo.getMonth();
  let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let nomeMes = meses[mes];
  let diaMes = tempo.getDate();
  let diaSemana = tempo.getDay();
  let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  let nomeDiaSemana = diasDaSemana[diaSemana];
  let hora = tempo.getHours();
  let horario = tempo.getHours();
  let periodo = "";
  if (horario >= 5 && horario < 12) {
    periodo = "Bom dia";
  } else if (horario >= 12 && horario < 19) {
    periodo = "Boa tarde";
  } else {
    periodo = "Boa noite";
  }
  let ampm = "";
  if (hora > 11) {
    ampm = "PM";
  }else {
    ampm = "AM";
  }
  if (horario > 12) {
    hora = hora - 12;
  }
  minuto = tempo.getMinutes();
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  let segundo = tempo.getSeconds();
  if (segundo < 10) {
    segundo = "0" + segundo;
  }
  let display = window.document.getElementById("clock");
  display.innerHTML = periodo + ", hoje é " + nomeDiaSemana + "," + "<br>" + "dia " + diaMes + " de " + nomeMes + " de " + ano + "." + "<br>" + "São " + hora + ":" + minuto + ":" + segundo + " " + ampm + ".";
}
setInterval(clock, 500);

// O Código a seguir foi produzido pelo ChatGPT para ser mais compacto, porém não fica formatado de maneira satisfatória.
//function clock() {
//  const tempo = new Date();
//  const options = {
//    weekday: 'long', 
//    year: 'numeric', 
//    month: 'long', 
//    day: 'numeric',
//    hour: 'numeric',
//    minute: 'numeric',
//    second: 'numeric',
//    hour12: true
//  };
//  const data = tempo.toLocaleDateString('pt-BR', options);
//  const display = document.getElementById("clock");
//  display.innerHTML = `${data}.`;
//}
//setInterval(clock, 500);