/*
    input
      - two values
      - can be boolean or any other object

    output
      - boolean
      - result of xor operation between input booleans
      - true if only one of the inputs are truthy
      - false otherwise

    other requirements
      - N/A

    discover

      # truth table     expression
      0 xor 0 = 0       
      1 xor 1 = 0
      1 xor 0 = 1
      0 xor 1 = 1

      as sentence:

        if
          a is true and b is false 
        or
          a is false and b is trure

      as verbose logic:
        if
          a === true && b === false
        or
          a === false && b === true

      as less verbose logic
        if
          a && !b
        or
          !a && b

      run examples based on truth table

  
    The more obvious and natural approach

      
*/

function isXor(a, b) {
  // interpret the thruthiness based on JavaScript
  a = !!a;
  b = !!b;

  return (a && !b) || (!a && b);
}

console.log(isXor(false, true) === true);
console.log(isXor(true, false) === true);
console.log(isXor(false, false) === false);
console.log(isXor(true, true) === false);
console.log(isXor(false, 3) === true);
console.log(isXor('a', undefined) === true);
console.log(isXor(null, '') === false);
console.log(isXor('2', 23) === false);