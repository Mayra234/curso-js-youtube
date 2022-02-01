/**
 * Realizar un algoritmo donde al usuario se le pregunte
 * primer nombre, segundo nombre, apellido, edad y dirección
 * y al final muestre una alerta con el mensaje
 * "Tus datos de contacto son: " concatenado con los
 * valores introducidos por el usuario.
 */

var firstName = prompt('Escribe tu primer nombre:');
const secondName = prompt('Escribe tu segundo nombre:');
const lastName = prompt('Escribe tu apellido:');
const age = prompt('Escribe tu edad: ');
const address = prompt('Escribe tu dirección: ');
var fullName = firstName + ' ' + secondName + ' ' + lastName;

alert(
  'Tus datos de contacto son: \n' +
    'Nombre completo: ' +
    fullName +
    '\nEdad: ' +
    age +
    '\nDirección: ' +
    address
);

firstName = prompt('Escribe nuevamente tu primer nombre: ');
fullName = firstName + ' ' + secondName + ' ' + lastName;

alert(
  'Tus datos de contacto son: \n' +
    'Nombre cambiado: ' +
    fullName +
    '\nEdad: ' +
    age +
    '\nDirección: ' +
    address
);
