const numberOne = 10;
const numberTwo = 30;
var result = 0;
var undefinedNumber;
const numberThree = 5;
const result2 = numberThree / numberOne;
const result3 = numberThree % numberOne;

var voidNumber = prompt('Escribe un número');

result = numberOne + numberThree;
console.log('first result', result);
result += numberTwo;
console.log('second result', result);

result = result + numberOne;
console.log('third result', result);
result = result + undefinedNumber;
console.log('Not a number result', result);

console.log('result two', result2);
console.log('result three', result3);

alert('El número que escribiste es: ' + voidNumber);
