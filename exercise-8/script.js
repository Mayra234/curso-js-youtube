//Retornar valores
// function add(a, b) {
//   return a + b;
// }

//console.log(add(5, 3));

//Undefined
// function add(a, b) {
//   console.log(a + b);
// }

// console.log(add(5, 3));

//Asignar valores
// function add(a, b) {
//   return a + b;
// }

// var result = add(5, 3);
// console.log(result);

// function createCadenaConMeta(lenguajeDeProgramacion) {
//   return 'Mi meta es aprender ' + lenguajeDeProgramacion;
// }

// var miMeta = createCadenaConMeta('JavasCript');
// console.log(miMeta);

//permanece en fila
// function proximoEnFila(arreglo, elemento) {
//   arreglo.push(elemento);
//   return arreglo.shift();
// }
// var miArreglo = [1, 2, 3, 4, 5];

// console.log('Antes: ' + JSON.stringify(miArreglo));
// console.log(proximoEnFila(miArreglo, 6));
// console.log('Después: ' + JSON.stringify(miArreglo));

//Valores Boleanos
// console.log(true);
// console.log(false);

//operadores igualdad

// console.log(5 == 5);
// console.log('hola' == 'hola');
// console.log('hola' == 'javascript');

//igualdad estricta

// console.log(9 == 9);
// console.log('9' == 9);

// console.log(9 === 9);
//console.log(9 === '9');

//practica como comparar valores
var a;
var b;

a = 5;
b = 5;

//console.log(a == b);
//console.log(a === b);

b = 8;

//console.log(a == b);
//console.log(a === b);

b = '5';

//console.log(a == b);
//console.log(a === b);

a = 'JavaScript';
b = 'JavaScript';

//console.log(a == b);
//console.log(a === b);

//operador de desigualdad
//console.log(9 != 6);
//console.log(9 != 9);
//console.log('JavaScript' != 'JavaScript');
//console.log('Javascript' != 'JavaScript');
//console.log([1, 2, 3] != [1, 2, 3]);

//desigualdad estricta
//console.log(1 != '1');
//console.log(1 !== '1');

//mayor que
// console.log(6 > 5);
// console.log(3 > 10);
// console.log('B' > 'A');
// console.log('ACB' > 'ABC');
// console.log('A' > 'AB');

var a = 15;
var b = 7;

//console.log(a > b);
//console.log(b > a);

//mayor o igual que
//console.log(5 > 5);
//console.log(5 >= 5);

//menor que
// console.log(5 < 6);
// console.log(6 < 5);
// console.log('A' < 'B');
// console.log('ABC' < 'BCB');

var a = 16;
var b = 7;
// console.log(a < b);
// console.log(b < a);

//menor o igual que
// console.log(5 < 5);
// console.log(5 <= 5);

//operadores logicos
/**
 * Tabla de verdad del operador AND (y)
 * | X | Y | X && Y|
 * -----------------
 * | T | T |   T   |
 * | T | F |   F   |
 * | F | T |   F   |
 * | F | F |   F   |
 * La expresion solo es verdadera cuando
 * ambos operados son verdaderos
 */
//console.log(true && true);
//console.log(true && false);
//console.log(false && true);
//console.log(false && false);

var a = 8;

//console.log(a > 5 && a < 10);

a = 3;

//console.log(a > 5 && a < 10);

a = 15;

//console.log(a > 5 && a < 10);

a = 3;

//console.log(a > 5 && a == 10);

//operador logico or
/**
 * Tabla de verdad del operador OR (o)
 * | X | Y | X || Y|
 * -----------------
 * | T | T |   T   |
 * | T | F |   T   |
 * | F | T |   T   |
 * | F | F |   F   |
 * Las expresion es verdadera si uno de los operados
 * o ambos son verdaderos
 */
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

var a = 8;

//console.log(a < 5 || a > 15);

a = 2;

//console.log(a < 5 || a > 15);

a = 20;

//console.log(a < 5 || a > 15);

a = 2;

//console.log(a == 5 || a < 15);

//operador logico not
/**
 * Tabla de verdad para NOT
 * | X | !X |
 * ----------
 * | T | F |
 * | F | T |
 */
console.log(!true);
console.log(!false);

var a = 8;

console.log(!(a > 5));
console.log(!(a < 5));
