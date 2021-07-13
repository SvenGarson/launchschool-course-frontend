/*
    The following conditional does not evaluate to true
    because the strict-equality operator === returns
    false unless both operands type and value match.
*/

let apples = '3';
let bananas = 3;

if (apples === bananas)
  console.log('Apples and bananas are the same!');