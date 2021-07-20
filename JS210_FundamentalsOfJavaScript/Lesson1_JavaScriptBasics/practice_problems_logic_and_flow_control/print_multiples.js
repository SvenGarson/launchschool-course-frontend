/*
    input
      - NUMBER
      - non-negative integer [0; 100]

    output
      - no explicit return value
      > print all numbers in the range [0; 100] that:
          - are odd numbers
          - multiple NUMBER
      - print the matching numbers from 100 down to 0

    requirements
      - write a function named 'logMultiples'

    approach

      - from 100 down to 0 through CURRENT  
        - if CURRENT.odd? && CURRENT.multipleOf(NUMBER)
            - log CURRENT
        - else
            - print nothing!
*/
function logMultiples(matchNumber) {
  for(let currentNumber = 100; currentNumber >= matchNumber; currentNumber -= 1) {
    const currentNumberIsOdd = ((currentNumber % 2) === 1);
    const currentNumberIsCleanMultiple = ((currentNumber % matchNumber) === 0);

    if (currentNumberIsOdd && currentNumberIsCleanMultiple) {
      console.log(currentNumber);
    }
  }
}

console.log('\nSolution to original problem [1]');
logMultiples(17); // outputs: 85; 51; 17

console.log('\nSolution to original problem [2]');
logMultiples(21); // outputs: 63; 21

// further exploration

function logMultiplesFurtherExploration(matchNumber) {
  let largestMultiple = Math.floor(100 / matchNumber) * matchNumber;

  // iterate through all the multiples of match number
  // and print only the odd numbers
  for (let currentNumber = largestMultiple; currentNumber >= matchNumber; currentNumber -= matchNumber) {
    const currentNumberIsOdd = ((currentNumber % 2) === 1);

    if (currentNumberIsOdd) {
      console.log(currentNumber)
    }
  }
}

console.log('\nSolution to further exploration [1]');
logMultiplesFurtherExploration(17); // outputs: 85; 51; 17

console.log('\nSolution to further exploration [2]');
logMultiplesFurtherExploration(21); // outputs: 63; 21