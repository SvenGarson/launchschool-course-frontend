/*
  
  input
    - none

  output
    - no explicit return value
    - log all number in the range [1; 100]
      that are a multiple of 3, or 5 or both
    - if both 3 and 5 evenly divide in the number
      append a '!' to the output

  requirements
    - write a function names 'multiplesOfThreeAndFive'

  approach
    - from 1 up to an including 100 through NUMBER
      - divBy3 = (NUMBER % 3 === 0)
      - divBy5 = (NUMBER % 5 === 0)
      - if (divBy3 && divBy5)
          number!
      - elsif (divBy3 || divBy5)
          number
      - else
          # do not output

*/

function multiplesOfThreeAndFive() {
  for (let multiple = 1; multiple <= 100; multiple += 1) {
    const divisibleBy3 = ((multiple % 3) === 0);
    const divisibleBy5 = ((multiple % 5) === 0);
    const divisibleByBoth = (divisibleBy3 && divisibleBy5);
    const multipleAsString = String(multiple);

    if (divisibleByBoth) {
      console.log(multipleAsString + '!');
    } else if(divisibleBy3 || divisibleBy5) {
      console.log(multipleAsString);
    }
  }
}

console.log('\nSolution to original problem');
multiplesOfThreeAndFive();

function multiplesOfThreeAndFiveFurtherExploration(floor, ceiling) {
  // specify parameters that define the range
  // of multiples to check
  for (let multiple = floor; multiple <= ceiling; multiple += 1) {
    const divisibleBy3 = ((multiple % 3) === 0);
    const divisibleBy5 = ((multiple % 5) === 0);
    const divisibleByBoth = (divisibleBy3 && divisibleBy5);
    const multipleAsString = String(multiple);

    if (divisibleByBoth) {
      console.log(multipleAsString + '!');
    } else if(divisibleBy3 || divisibleBy5) {
      console.log(multipleAsString);
    }
  }
}

console.log('\nSolution to further exploration');
multiplesOfThreeAndFiveFurtherExploration(1, 100);