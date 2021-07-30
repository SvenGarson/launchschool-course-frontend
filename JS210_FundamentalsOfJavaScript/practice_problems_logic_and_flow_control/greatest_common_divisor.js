/*
    input
      - A and B
      - to numbers
      - since no other requirements given, assume that
        A and B are in range [1; +inf[

    output
      - return the greatest common divisor between A and B
        as integer
      - that lowest common divisor can be 1

    other requirements:
      - N/A

    what is a greatest common divisor
      the largest number that evenly divides into both
      A and B

    Euclids algorithm

      # given two non-zero numbers a and b
      
      a = ?
      b = ?

      until (a == b)
        max = [a, b].max
        min = [a, b].min

        result = [max - min, min]

      return a or b


*/

function gcd(a, b) {
  while (a !== b) {
    const max = [a, b].reduce((left, right) => Math.max(left, right));
    const min = [a, b].reduce((left, right) => Math.min(left, right));

    a = max - min;
    b = min;
  }

  return a;
}

console.log(gcd(12, 4) === 4);
console.log(gcd(15, 10) === 5);
console.log(gcd(9, 2) === 1);