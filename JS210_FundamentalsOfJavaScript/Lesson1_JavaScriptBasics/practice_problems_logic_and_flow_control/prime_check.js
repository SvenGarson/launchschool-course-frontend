/*
    input
      > NUMBER
        - some integer
        - always non negative
        - NUMBER in range [0; +infinity]
        - in the examples the smallest NUMBER is 1

    output
      - boolean
      - true if NUMBER is a prime number
      - false if not

    other requirements
      - N/A

    defining a prime number
      - a number that is evenly divisible by 1 and itself
        i.e. two different numbers
      - the smallest prime is 2

    approach to determines if NUMBER is a prime
      - NUMBER must be >= 2
      - 2 is the only even prime, all other primes are odd
      - every consecutive multiple of a prime is not a prime
      - cannot be evenly divisible by any number between 1 and
        itself

    brute force
      - false if number < 2
      # a number is always evenly divisible by 1 and itself
        so no need to check that
      - if number evenly divisible by a number in range [2; number - 1]
        the number is not a prime and return false
      - else return true

    faster approach
      - create an array of numbers in the range [2; NUMBER]
      - try that after brute force approach

*/

function isPrime(number) {
  // smallest prime is 2 by definition
  if (number < 2) return false;

  // number is not prime if it is evenly divisible by any
  // number in the range [2; number itself[
  for (let divider = 2; divider < number; divider += 1) {
    if ((number % divider) === 0) {
      return false
    }
  }

  return true;
}

console.log('\nSolution to original problem [1]');
console.log(isPrime(1) === false);
console.log('\nSolution to original problem [2]');
console.log(isPrime(2) === true);
console.log('\nSolution to original problem [3]');
console.log(isPrime(3) === true);
console.log('\nSolution to original problem [4]');
console.log(isPrime(43) === true);
console.log('\nSolution to original problem [5]');
console.log(isPrime(55) === false);
console.log('\nSolution to original problem [6]');
console.log(isPrime(0) === false);

function isPrimeFurtherExploration(number) {
  // smallest prime is 2 by definition
  // two is also the only even prime
  if (number < 2 || number > 2 && ((number % 2) === 0))
    return false;

  // note: we know that number is either 2 or an odd
  // number larger than 2
  // number is not prime if it is evenly divisible by any
  // number in the range [2; number itself[
  for (let divider = 2; divider < number; divider += 1) {
    // only test odd dividers, since off numbers are
    // never divisible by even numbers
    if ((number % 2) === 0) continue;

    if ((number % divider) === 0) {
      return false
    }
  }

  return true;
}

console.log('\nSolution to further exploration [1]');
console.log(isPrimeFurtherExploration(1) === false);
console.log('\nSolution to further exploration [2]');
console.log(isPrimeFurtherExploration(2) === true);
console.log('\nSolution to further exploration [3]');
console.log(isPrimeFurtherExploration(3) === true);
console.log('\nSolution to further exploration [4]');
console.log(isPrimeFurtherExploration(43) === true);
console.log('\nSolution to further exploration [5]');
console.log(isPrimeFurtherExploration(55) === false);
console.log('\nSolution to further exploration [6]');
console.log(isPrimeFurtherExploration(0) === false);