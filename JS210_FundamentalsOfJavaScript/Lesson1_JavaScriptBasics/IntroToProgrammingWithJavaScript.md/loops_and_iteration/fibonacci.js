function fibonacci(nth) {
  /*
      base case returns nth when
      nth <= 1
  */
  if (nth <= 1)
    return nth;

  /*
      recursive case breakst he problem
      into sub-problems recursively
  */
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(0) === 0);
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(6) === 8);
console.log(fibonacci(20) === 6765);