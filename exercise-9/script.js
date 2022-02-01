//Sentencia de condicionales

var x = 5;

if (x > 2 && x < 10) {
  //console.log('La condición es verdadera');
}

var estacion = 'invierno';

if (estacion == 'invierno') {
  //console.log('¡Si! Me encanta el invierno');
}

//console.log('Después del condicional');

// Cláusula de else

var x = 5;

if (x < 2) {
  //console.log('La condición es verdadera');
} else {
  //console.log('La condición es falsa');
}

var estacion = 'Invierno';

if (estacion === 'Verano') {
  //console.log('Comenzo el verano, ya podemos ir a la playa');
} else {
  //console.log('Ya quiero que sea verano para ir a la playa');
}

// cláusula else if

function clasificarValor(valor) {
  if (valor % 2 == 0) {
    console.log('Divisible entre 2');
  } else if (valor % 3 == 0) {
    console.log('Divisible entre 3');
  } else {
    console.log('No es divisible entre las opciones');
  }
}

//clasificarValor(2);
//clasificarValor(15);
//clasificarValor(7);

//Condicionales orden lógico

function clasificarValor(valor) {
  if (valor < 5) {
    console.log('Menor que 5');
  } else if (valor < 10) {
    console.log('Menor que 10');
  } else {
    console.log('Mayor o igual que 10');
  }
}

//clasificarValor(2);
//clasificarValor(15);

//Encadenar sentencias if...else

function interpretarIMC(indiceDeMasaCorporal) {
  if (indiceDeMasaCorporal < 18.5) {
    console.log('Bajo de peso');
  } else if (indiceDeMasaCorporal <= 24.9) {
    console.log('Normal');
  } else if (indiceDeMasaCorporal <= 29.9) {
    console.log('Sobrepeso');
  } else {
    console.log('Obeso');
  }
}

// interpretarIMC(17.8);
// interpretarIMC(22.2);
// interpretarIMC(28.5);
// interpretarIMC(32.2);

//Código de golf

/**
 * En el juego de golf cada hoyo tiene un par que
 * representa el número promedio de goles
 * que se espera que haga un golfista para introducir
 * la pelota en el hoyo.
 *
 * hay un nombr4e diferente dependiendo de qué tan
 * por encima o por debajo del par estén tus goles.
 *
 * Tu función tomará los argumentos par y golpes.
 *
 * Retorna la cadena correcta según esta tabla que muestra los goles en orden de mayor o menor prioridad:
 *
 * Golpes               Retornar
 * -----------------------------
 * 1                "Hole-in-one!"
 * <= par -2        "Eagle"
 * par - 1          "Birdie"
 * par              "Par"
 * par +1           "Bogey"
 * par +3           "Double bogey"
 * >= par + 3       "Go home!"
 *
 * Par y golpes siempre serán númericos y positivos
 */

function puntajeDeGolf(par, golpes) {
  if (golpes == 1) {
    return 'Hole-in-one!';
  } else if (golpes <= par - 2) {
    return 'Eagle';
  } else if (golpes == par - 1) {
    return 'Birdie';
  } else if (golpes == par) {
    return 'Par';
  } else if (golpes == par + 1) {
    return 'Bogey';
  } else if (golpes == par + 3) {
    return 'Double bogey';
  } else if (golpes >= par + 3) {
    return 'Go home!';
  }
}

// console.log(puntajeDeGolf(4, 1));
// console.log(puntajeDeGolf(4, 3));
// console.log(puntajeDeGolf(4, 4));
// console.log(puntajeDeGolf(4, 7));
// console.log(puntajeDeGolf(4, 15));

// Secuencia switch

function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = 'alpha';
      break;
    case 2:
      respuesta = 'beta';
      break;
    case 3:
      respuesta = 'gamma';
      break;
    case 4:
      respuesta = 'delta';
      break;
  }
  return respuesta;
}

// console.log(clasificarValor(1));
// console.log(clasificarValor(2));
// console.log(clasificarValor(3));
// console.log(clasificarValor(4));

var producto = 'hamburguesa';

switch (producto) {
  case 'pizza':
    // console.log('La pizza básica cuesta $5500');
    break;
  case 'hamburguesa':
    // console.log('Las hamburguesas cuestan $9800');
    break;
  case 'helado':
    // console.log('El helado cuesta $3000');
    break;
}

// console.log('Luego de switch');

//Sentencias switch opción predeterminado

function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = 'Español';
      break;
    case 2:
      idioma = 'Francés';
      break;
    case 3:
      idioma = 'Italiano';
      break;
    default:
      idioma = 'Inglés';
      break;
  }
  return idioma;
}

// console.log(seleccionarIdioma(1));
// console.log(seleccionarIdioma(2));
// console.log(seleccionarIdioma(3));
// console.log(seleccionarIdioma(4));

//Multiples casos

function clasificarVolumen(valor) {
  var volumen;
  switch (valor) {
    case 1:
      volumen = 'Bajo';
      break;
    case 2:
    case 3:
      volumen = 'Intermedio';
      break;
    case 4:
    case 5:
    case 6:
      volumen = 'Alto';
      break;
  }
  return volumen;
}
console.log(clasificarVolumen(6));

//reemplazar condicionales por switch

function seleccionarIdioma(valor) {
  var idioma;

  switch (valor) {
    case 1:
      idioma = 'Español';
      break;
    case 2:
      idioma = 'Francés';
      break;
    case 3:
      idioma = 'Italiano';
      break;
    default:
      idioma = 'Inglés';
      break;
  }
  // if (valor == 1) {
  //   idioma = 'Español';
  // } else if (valor == 2) {
  //   idioma = 'Francés';
  // } else if (valor == 3) {
  //   idioma = 'Italiano';
  // } else {
  //   idioma = 'Inglés';
  // }

  return idioma;
}
