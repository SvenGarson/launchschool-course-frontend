/*
    Write a function that computes the factorial of an argument
    number. The input number is always positive and the factorial
    product includes both:
      - the number 1        - the floor
      - the argument number - the ceiling

    Positive means non-zero in this case!
*/

function factorial(number) {
  let factorial = 1;

  for(let i = 1; i <= number; i += 1)
    factorial *= i;

  return factorial;
}

// logging test results
console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(3) === 6);
console.log(factorial(4) === 24);
console.log(factorial(5) === 120);
console.log(factorial(6) === 720);
console.log(factorial(7) === 5040);
console.log(factorial(8) === 40320);