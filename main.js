let g=0;
function giraBg() { 
    document.getElementById("gradiente").style.background="linear-gradient("+g+"deg, #d984a3 0%, #bf4226 100%)";
  if (g<360) {
    g++;
  } else {
    g = 0;
  }
}
setInterval(giraBg,5);

function clock() {
  let tempo = new Date();
  let ano = tempo.getFullYear();
  let mes = tempo.getMonth()+1;
  let diaMes = tempo.getDate();
  let diaSemana = tempo.getDay();
  let hora = tempo.getHours();
  let minuto = tempo.getMinutes();
  let segundo = tempo.getSeconds();
  let relogio = hora + ":" + minuto + ":" + segundo;
  let calendario = diaMes + "/" + mes + "/" + ano;
  let display = window.document.getElementById('clock');
  display.innerHTML = calendario + "<br>" + relogio;
}
setInterval(clock,500)