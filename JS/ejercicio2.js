function ejercicio2(segundos) {

    
  let horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  let minutos = Math.floor(segundos / 60);
  segundos %= 60;

  
  if (horas < 10) {
    horas = '0' + horas;
  }
  if (minutos < 10) {
    minutos = '0' + minutos;
  }
  if (segundos < 10) {
    segundos = '0' + segundos;
  }

  const horaFormateada = horas + ':' + minutos + ':' + segundos;

  return horaFormateada;
}
