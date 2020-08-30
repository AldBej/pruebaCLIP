var intentos = 4;
var resultado = "verano";
function validar() {
  // aca ponemos un value porque no queres ese cuadro de texto sino el valor que ingreso el usuario
  var p = document.getElementById("input").value;

  // mas o menos siguiendo tu idea, si ingreso verano devuelve ok
  // si no ingreso verano, e intentos es el primero, restamos un intento y devolvemos una pista
  // si no ingreso verano, y es el intento siguiente al primero, restamos un intento y devolvemos la segunda pista
  // si estamos en alguno de los dos ultimos intentos simplemente ponemos cuantos intentos quedan
  // finalmente si quedan 0 intentos se le informa que perdio el juego
  if (p == resultado) {
    document.getElementById("nombre_input").innerHTML =
      " Tu respuesta es correcta";

    // deshabilitar el boton
    document.getElementById("boton").setAttribute("disabled", "disabled");
  } else if (p != resultado && intentos == 4) {
    intentos = intentos - 1;
    document.getElementById(
      "nombre_input"
    ).innerHTML = `incorrecto te quedan ${intentos} intentos, pista 1: Hay mosquitos`;
  } else if (p != resultado && intentos == 3) {
    intentos = intentos - 1;
    document.getElementById(
      "nombre_input"
    ).innerHTML = `incorrecto te quedan ${intentos} intentos, pista 2: Hace calor`;
  } else if (intentos == 2 || intentos == 1) {
    intentos = intentos - 1;
    document.getElementById(
      "nombre_input"
    ).innerHTML = `incorrecto te quedan ${intentos}intentos`;
  }
  if (intentos == 0) {
    document.getElementById("nombre_input").innerHTML = "Has perdido";

    // deshabilitar el boton
    document.getElementById("boton").setAttribute("disabled", "disabled");
  }
}
