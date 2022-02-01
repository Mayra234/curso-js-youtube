function mostrarMensaje() {
  console.log('¡Hola, Mundo!');
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

//Argumentos
function sumar(a, b) {
  var suma = a + b;
  console.log('El resultado de ' + a + ' + ' + b + ' es: ' + suma);
}

var x = 5;
var y = 3;

sumar(x, y);
sumar(8, 9);
sumar(2, 4);
sumar(5, 5);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + ' ' + cadena2 + ' ' + cadena3);
}

concatenarTresCadenas('Estoy', 'aprendiendo', 'a programar');

//Ámbito Global

var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}

miFuncion();

console.log(miVariableGlobal);

//Ámbito locales

function miFuncion() {
  var miVariableLocal = 4;
  console.log(miVariableLocal);
}

miFuncion();
//console.log(miVariableLocal);

//Ámbito Global vs ámbito local

var miNombre = 'Nora';

function mostrarMiNombre() {
  var miNombre = 'Gino';
  console.log(miNombre);
}

mostrarMensaje();
console.log(miNombre);
