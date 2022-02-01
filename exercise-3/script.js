/**
 * Realizar un algoritmo donde al usuario se
 * le pregunte por dos números y despues de escribirlos
 * muestre una alerta con el resultado de la suma de
 * los dos números
 */

const firstNumber = prompt('Escriba el primer número: ');
const secondNumber = prompt('Escriba el segundo número: ');
const sum = parseInt(firstNumber) + parseInt(secondNumber);

alert('La suma de los números dados es: ' + sum);
