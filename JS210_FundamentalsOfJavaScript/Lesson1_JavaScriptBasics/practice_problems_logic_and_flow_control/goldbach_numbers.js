/*

  output
    > when expectedSum:
        - is odd: log null
        - is < 4: log null
    - the pairs should not include the expectedSum

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

function checkGoldbach(expectedSum) {

}