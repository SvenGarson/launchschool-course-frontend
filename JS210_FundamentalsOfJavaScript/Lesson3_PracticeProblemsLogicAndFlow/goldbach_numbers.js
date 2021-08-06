/*

  facts:
    - every even integer > 2 can be expresses as the sum 
      of two primes

  # Input
  - expectedSum is the name of the single parameter
  - meaning: expectedSum is the number the listed prime
             pairs must sum to

  # Output
  - console.log valid pairs of primes that sum to expectedSum
  - for every prime pair, log the lower prime first i.e. left

  # Other requirements
  - write a function names 'checkGoldbach'
  - you can use the isPrime function from last exercise

  # Facts
  - every even integer greater than 2 can be expressed as
    the sum of two primes

  # Determining the pairs of primes
  - build or iterate all possible combinations of primes
    in the range [2; number[
  - disregard duplicate prime pairs where the pair is reversed
  - the listed primes should not include the expectedSum, but
    the prime range [2; number[ takes care of that
  - the pairs can contain the same prime twice

  # Pseudo code to generate all pairs of primes
    - allPrimes = []
    - from 2 upto excluding expectedSum
        - from 2 upto excluding expectedSum
            # fast operation first
            continue if (a + b) !== expectedSum

            # slow operation, both must be primes  
            contiue if !a.prime || !b.prime

            # check for duplicates using a Set or Hash
            continue if allPrimes.contains([a, b])
            - allPrimes << [a, b]

  # Understanding the problem

    # Input
      > expectedSum
          - integer
          - no range given
          - assume positive in range [1; +inf[

    # Output
        - log the prime pairs

*/

function isPrime(number) {
  if (number < 2 || number > 2 && ((number % 2) === 0))
    return false;

  for (let divider = 2; divider < number; divider += 1) {
    if ((number % 2) === 0) continue;

    if ((number % divider) === 0) {
      return false
    }
  }

  return true;
}

function numberOdd(number) {
  return ((number % 2) === 1);
}

function includesNestedArray(original, searched) {
  // early out when array contains searched
  // so let's start pessimistic
  let searchedIsIncluded = false;

  // match found when
      // arrays same length
      // same contents based on ===
      // items in same order
  // intuition: is search included in original?
  //            if so return true
  for (const originalItem of original) {
    if (originalItem.length !== searched.length)
      continue;

    // note: we know both arrays are of same length
    // if any entry matches return true
    
    // if one item mismatches we know the array are not the same
    let itemsMatch = true;
    for (let index = 0; index < searched.length; index += 1) {
      if (originalItem[index] !== searched[index]) {
        itemsMatch = false;
        break;
      }
    }

    if (itemsMatch) return true;
  }

  return searchedIsIncluded;
}

function allPrimesWithSumInRange(min, max, expectedSum) {
  // returns a nested array array of all combinations of primes
  allCombinations = [];

  for(let a = min; a <= max; a += 1) {
    for(let b = min; b <= max; b += 1) {
      // once a > b the found pairs are duplicates
      // a > b because we generate from 2 to expectedSum  - 1
      // a < b if we generate descendingly
      if (a > b) continue;

      // prepping the unique combination
      let ascendingCombo = [a, b].sort();
      const comboMin = ascendingCombo[0];
      const comboMax = ascendingCombo[1];

      // numbers must sum to to expected
      if ((comboMin + comboMax) !== expectedSum) continue;

      // check for duplicates
      // the check above is much faster
      // note: we know the nested arrays are sorted ascendingly
      /*
      if (includesNestedArray(allCombinations, ascendingCombo)) {
        continue;
      }
      */

      // numbers must both be primes
      if (!isPrime(comboMin) || !isPrime(comboMax)) continue;

      // add the combo with the number sorted ascendlingly
      // to make searching for duplicates easier and to avoid
      // extra work to output the numbers in ascending order
      allCombinations.push(ascendingCombo);
    }
  }

  return allCombinations;
}

function checkGoldbach(expectedSum) {
  if (numberOdd(expectedSum) || (expectedSum < 4)) {
    console.log(null);
    return;
  }

  // note: we know number is even and >= 4
  const goldbachPrimePairs = allPrimesWithSumInRange(2, expectedSum, expectedSum);
  
  for (const primePair of goldbachPrimePairs) {
    console.log(`${primePair[0]} ${primePair[1]}`);
  }
}

console.log('\nSolution to original problem [1]');
checkGoldbach(3);
// logs: null

console.log('\nSolution to original problem [1]');
checkGoldbach(4);
// logs: 2 2

console.log('\nSolution to original problem [3]');
checkGoldbach(12);
// logs: 5 7

console.log('\nSolution to original problem [4]');
checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
