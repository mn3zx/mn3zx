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