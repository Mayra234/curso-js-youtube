// números aleatorios con decimales del 0 al 1
function generarFraccionAleatoria() {
  return Math.random();
}

//números enteros aleatorios
var numeroEntero = Math.floor(Math.random() * 20);

// console.log(numeroEntero);

function generarNumeroEntero(limiteSuperior) {
  return Math.floor(Math.random() * limiteSuperior);
}
for (let i = 0; i < 15; i++) {
  //   console.log(generarNumeroEntero(5));
}

// números enteros aleatorios en un rango
function rangoAleatorio(limiteInferior, limiteSuperior) {
  return (
    Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) +
    limiteInferior
  );
}

for (let i = 0; i < 15; i++) {
  //   console.log(rangoAleatorio(3, 8));
}

// función parseInt()
var a = parseInt('5');
var b = parseInt('7');
// console.log(a + b);

//función parseInt con una base

// console.log(parseInt('3E0A', 16));

//operador condicional (ternario)
function retornarMinima(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
