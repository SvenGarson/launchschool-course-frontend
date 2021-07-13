function feedback(message) {
  console.log(`==> ${message}`); 
}

const rlSync = require('readline-sync');

const firstNumber = parseInt(rlSync.question('==> Enter the first number:\n'));
const secondNumber = parseInt(rlSync.question('==> Enter the second number:\n'));

feedback(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
feedback(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
feedback(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
feedback(`${firstNumber} / ${secondNumber} = ${parseInt(firstNumber / secondNumber)}`);
feedback(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
feedback(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);