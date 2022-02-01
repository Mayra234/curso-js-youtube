// Definicion de objetos
var miPerro = {
  nombre: 'Gino',
  edad: 5,
  peso: 6,
  raza: 'Beagle',
};
// Notacion de puntos-acceder
var miPerro = {
  nombre: 'Gino',
  edad: 5,
  peso: 6,
  raza: 'Beagle',
};

// console.log(miPerro.nombre);
//Notacion de corchetes
var miCuaderno = {
  color: 'verde',
  categoria: 3,
  'numero de paginas': 100,
  'numero de paginas': 200,
};
// console.log(miCuaderno['numero de paginas']);
// Propiedad de un objeto con variables

var resultados = {
  1: 'nora256',
  2: 'gino577',
  3: 'estef543',
  4: 'kiara566',
};
var position = 4;
// console.log(resultados[position]);

// Actualizar propiedades
var mochila = {
  color: 'azul',
  tamaño: 'mediano',
  contenido: ['botella de agua', 'cuaderno'],
};

// console.log(mochila.color);
mochila.color = 'verde';
// console.log(mochila.color);

mochila.contenido.push('lápiz');
// console.log(mochila.contenido);

mochila.contenido = [];
// console.log(mochila.contenido);

// Agregar propiedades-eliminar

var curso = {
  titulo: 'Aprende JavaScript desde cero',
  idioma: 'Español',
  duracion: 30,
};
// console.log(curso.vistas);
curso.vistas = 34500;
// console.log(curso.vistas);

// console.log(curso.idioma);
delete curso.idioma;
// console.log(curso.idioma);

function buscarElementoQuimico(simbolo) {
  var elementoQuimico = '';

  var simbolosQuimicos = {
    Al: 'Aluminio',
    S: 'Azufre',
    Cl: 'Cloro',
    He: 'Helio',
    B: 'Boro',
    Li: 'Litio',
  };
  return simbolosQuimicos[simbolo];
}
// console.log(buscarElementoQuimico('Al'));
// console.log(buscarElementoQuimico('S'));
// console.log(buscarElementoQuimico('Cl'));
// console.log(buscarElementoQuimico('He'));
// console.log(buscarElementoQuimico('B'));
// console.log(buscarElementoQuimico('Li'));

// Verificar propiedades

var miCuaderno = {
  color: 'verde',
  categoria: 3,
  precio: 4.56,
};
// console.log(miCuaderno.hasOwnProperty('color'));
// console.log(miCuaderno.hasOwnProperty('origen'));

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return 'propiedad: ' + obj[propiedad];
  } else {
    return 'El objeto no tiene propiedad';
  }
  var miCuaderno = {
    color: 'verde',
    categoria: 3,
    precio: 4.56,
  };
  //   console.log(verificarPropiedad(miCuaderno, 'origen'));
}

// Objetos complejos
var ordenDePizzas = [
  {
    tipo: 'margarita',
    tamaño: 'individual',
    precio: 5.67,
    toppings: ['extra queso', 'champiñones', 'piña'],
    paraLlevar: true,
  },
  {
    tipo: 'cuatro quesos',
    tamaño: 'familiar',
    precio: 18.34,
    toppings: ['extra queso', 'pimentón'],
    paraLlevar: false,
  },
  {
    tipo: 'napolitana',
    tamaño: 'individual',
    precio: 6.78,
    toppings: [],
    paraLlevar: true,
  },
];
// console.log(ordenDePizzas[0]['tipo']);
// console.log(ordenDePizzas[1]);
// console.log(ordenDePizzas[2]);

// Objetos anidados
var miReceta = {
  descripcion: 'mi postre favorito',
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: '100 grs',
      sal: '4 cucharadas',
      agua: '1 taza',
    },
    cobertura: {
      azucar: '120 grs',
      chocolate: '4 cucharadas',
      mantequilla: '200 grs',
    },
  },
};
// console.log(miReceta.descripcion);
// console.log(miReceta.costo);
// console.log(miReceta.ingredientes.masa['harina']);
// console.log(miReceta.ingredientes.masa['sal']);
// console.log(miReceta.ingredientes.masa['agua']);

// console.log(miReceta.ingredientes.cobertura.azucar);
//  arreglos anidados

var misPlantas = [
  {
    tipo: 'flores',
    lista: ['rosas', 'tulipanes', 'dientes de león'],
  },
  {
    tipo: 'árboles',
    lista: ['abeto', 'pino', 'abedul'],
  },
];
var primeraFlor = misPlantas[0].lista[0];
// console.log(primeraFlor);
var segundoArbol = misPlantas[1].lista[1];
// console.log(segundoArbol);

var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: 'Bee Gees Greatest',
    artista: 'Bee Gees',
    canciones: ["Stayin' Alive"],
  },
  5439: {
    tituloDelAlbum: 'ABBA Gold',
  },
};

function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === '') {
    delete discos[id][propiedad];
  } else if (propiedad === 'canciones') {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}
console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos, 7853, 'tituloDelAlbum', '');
console.log(coleccionDeDiscos[7853].tituloDelAlbum);
