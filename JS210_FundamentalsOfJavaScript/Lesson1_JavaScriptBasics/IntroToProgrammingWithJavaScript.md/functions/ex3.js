// use rlsync
// enter number with question that returns a number
// first number to variable
// second number to variable
// print to screen f * s = r


function numberForQuestion(question) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(question));
}

function multiply(a, b) {
  return a * b;
}

let firstNumber = numberForQuestion('Enter the first number: ');
let secondNumber = numberForQuestion('Enter the second number: ');
let product = multiply(firstNumber, secondNumber);
console.log(`${firstNumber} * ${secondNumber} = ${product}`);
