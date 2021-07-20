/*
    input
      - CEILING
      - positive integer Number
      - non-zero

    output
      - log output directly to stdout
      - log all the odd numbers from
        1 up to and including CEILING
      - every number is logged on it's own line

    requirements
      - function name: logOddNumbers

*/

function logOddNumbers(ceiling) {
  // print every odd number in range [1; ceiling]
  for(let currentNumber = 1; currentNumber <= ceiling; currentNumber++) {
    let numberIsOdd = ((currentNumber % 2) === 1);
    if (numberIsOdd) {
      console.log(currentNumber);
    }
  }
}

console.log('\nSolution to original problem');
logOddNumbers(19);

// First part of further exploration

function logOddNumbersFurtherExplorationOne(ceiling) {
  // remove the conditional in the for loop
  // increment the current number by two every iteration
  for(let currentNumber = 1; currentNumber <= ceiling; currentNumber += 2) {
    // note: we know the number is odd because we start at 1 and 
    // increment the number by 2 every iteration i.e.
    // 1 -> 3 -> 5 -> 7 -> 9 etc.
    console.log(currentNumber);
  }
}

console.log('\nSolution to first further exploration');
logOddNumbersFurtherExplorationOne(19);

// Second part of further exploration

function logOddNumbersFurtherExplorationTwo(ceiling) {
  // take the solution for the initial problem and merely
  // skip even numbers instead of selecting odd numbers

  // print every odd number in range [1; ceiling]
  for(let currentNumber = 1; currentNumber <= ceiling; currentNumber++) {
    let numberIsEven = ((currentNumber % 2) === 0);
    
    if (numberIsEven) continue;
    
    // note: we know that 'currentNumber' is even
    console.log(currentNumber);
  }
}

console.log('\nSolution to second further exploration');
logOddNumbersFurtherExplorationTwo(19);