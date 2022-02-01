//retornar valores voleanos

function esMenorQue(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// otra idea

function esMenorQue(a, b) {
  return a < b;
}
//console.log(esMenorQue(3, 2));

//patron de retorno anticipado

function miFuncion() {
  //console.log('Hola');
  return 'Mundo';
  console.log('Adiós');
}
miFuncion();

function calcularRaiz(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}
console.log(calcularRaiz(-5));
