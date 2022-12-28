let g = 0;
function giraBg() {
  document.getElementById("gradiente").style.background =
    "linear-gradient(" + g + "deg, #d984a3 0%, #bf4226 100%)";
  if (g < 360) {
    g++;
  } else {
    g = 0;
  }
}
setInterval(giraBg, 5);

function clock() {
  let tempo = new Date();
  let ano = tempo.getFullYear();
  let mes = tempo.getMonth() + 1;
  let nomeMes = "";
  if (mes == 1) {
    nomeMes = "Janeiro";
  } else if (mes == 2) {
    nomeMes = "Fevereiro";
  } else if (mes == 3) {
    nomeMes = "Março";
  } else if (mes == 4) {
    nomeMes = "Abril";
  } else if (mes == 5) {
    nomeMes = "Maio";
  } else if (mes == 6) {
    nomeMes = "Junho";
  } else if (mes == 7) {
    nomeMes = "Julho";
  } else if (mes == 8) {
    nomeMes = "Agosto";
  } else if (mes == 9) {
    nomeMes = "Setembro";
  } else if (mes == 10) {
    nomeMes = "Outubro";
  } else if (mes == 11) {
    nomeMes = "Novembro";
  } else {
    nomeMes = "Dezembro";
  }
  let diaMes = tempo.getDate();
  let diaSemana = tempo.getDay();
  let nomeDiaSemana = "";
  if (diaSemana == 0) {
    nomeDiaSemana = "Domingo";
  } else if (diaSemana == 1) {
    nomeDiaSemana = "Segunda-feira";
  } else if (diaSemana == 2) {
    nomeDiaSemana = "Terça-feira";
  } else if (diaSemana == 3) {
    nomeDiaSemana = "Quarta-feira";
  } else if (diaSemana == 4) {
    nomeDiaSemana = "Quinta-feira";
  } else if (diaSemana == 5) {
    nomeDiaSemana = "Sexta-feira";
  } else {
    nomeDiaSemana = "Sábado";
  }
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
