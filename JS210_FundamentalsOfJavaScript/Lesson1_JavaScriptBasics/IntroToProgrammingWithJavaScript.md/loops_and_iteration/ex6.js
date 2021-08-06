/*
    Input:
      - ceiling is positive i.e.
        ceiling >= 1

    Output:
      - factorial of ceiling

    Requirements:
      - Use a recursive approach

    The pattern to derive the recursive from

      !(5) = 5 x !(4)
      !(4) = 4 x !(3)
      !(3) = 3 x !(2)
      !(2) = 2 x !(1)
      !(1) = 1        Factorial 'base'

    Based on this pattern:

      > The base case:
          # We know the ceiling is always >= 1
          - When ceiling == 1 Return 1

      > The recursive case:
          # We know from the base case that
          # ceiling must be >= 2 here
          Return ceiling x rec(ceiling - 1)

*/

function factorial(ceiling) {
  // the base case
  if (ceiling === 1)
    return 1;

  /*
      the recursive case
      note: we know the ceiling is always >= 2 here
  */
  return ceiling * factorial(ceiling - 1);
}

console.log(factorial(1) == 1);
console.log(factorial(2) == 2);
console.log(factorial(3) == 6);
console.log(factorial(4) == 24);
console.log(factorial(5) == 120);
console.log(factorial(6) == 720);
console.log(factorial(7) == 5040);
console.log(factorial(8) == 40320);