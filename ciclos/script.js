// ciclo while

var i = 0;

// while (i <= 15) {
//   console.log('Hola, Mundo');
//   i++;
// }
var miArreglo = ['nfuje', 'jebdew'];
var i = 0;

// console.log(miArreglo);
while (i < 10) {
  miArreglo.push(i);
  i++;
}
// console.log(miArreglo);

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
  numeros.pop();
}
// console.log(numeros);

// ciclo for

var miArreglo = [];

for (var i = 0; i < 10; i += 2) {
  miArreglo.push(i);
}
// console.log(miArreglo);

// numeros impares con for
var miArreglo = [];

for (var i = 1; i < 20; i += 2) {
  miArreglo.push(i);
}
// console.log(miArreglo);

// numeros pares

var miArreglo = [];

for (var i = 2; i <= 40; i += 2) {
  miArreglo.push(i);
}
// console.log(miArreglo);

// ciclo for contar hacia atrás
var miArreglo = [];

for (var i = 15; i >= 10; i -= 2) {
  // console.log(i);
}

var miArreglo = [];
for (var i = 10; i > 0; i -= 2) {
  miArreglo.push(i);
}
// console.log(miArreglo);

// iterar sobre un arreglo con un ciclo for

var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
  // console.log('Iteración ' + i);
  // console.log(miArreglo[i]);
  total += miArreglo[i];
}
// console.log(total);

var lenguajes = ['JavaScript', 'Python', 'Java', 'C++'];

for (var i = 0; i < lenguajes.length; i++) {
  // console.log(lenguajes[i].toUpperCase());
}

function contarPares(arreglo) {
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}
// console.log(contarPares([5, 3, 1, 2, 4, 8]));

// ciclos for anidados

var miArreglo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < miArreglo.length; i++) {
  var arregloAnidado = miArreglo[i];
  for (var j = 0; j < arregloAnidado.length; j++) {
    // console.log(arregloAnidado[j]);
  }
}

// ciclo do while si el usuario escribe algo valido

var x = 16;
do {
  // console.log(x);
  x++;
} while (x < 10);

//busqueda de perfil

var contactos = [
  {
    nombre: 'Nora',
    apellido: 'Nav',
    numero: '0543236543',
    gustos: ['Pizza', 'programación'],
  },
  {
    nombre: 'Harry',
    apellido: 'Potter',
    numero: '09432365473',
    gustos: ['Hogwarts', 'Magia'],
  },
  {
    nombre: 'Sherlock',
    apellido: 'Holmes',
    numero: '9825864189',
    gustos: ['Casos interesantes', 'Violín'],
  },
];

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i][propiedad] || 'La propiedad no existe';
    }
  }
  return 'El contacto no está en la lista.';
}
// console.log(buscarPerfil('Nora', 'gustos'));
// console.log(buscarPerfil('Harry', 'apellido'));
// console.log(buscarPerfil('Nora', 'direccion'));
