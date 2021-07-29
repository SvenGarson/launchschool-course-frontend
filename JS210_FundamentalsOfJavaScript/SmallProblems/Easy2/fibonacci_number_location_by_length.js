function findFibonacciIndexByLength(desiredNumberOfDigits) {
  let fibA = 1n;
  let fibB = 1n;
  let fibIndex = 3n;

  while (true) {
    const currentFibonacciNumber = fibA + fibB;

    const numberOfDigits = String(currentFibonacciNumber).length;
    if (numberOfDigits >= desiredNumberOfDigits) {
      return BigInt(fibIndex);
    }

    // get ready for the next fibonacci iteration
    fibA = fibB;
    fibB = currentFibonacciNumber;
    fibIndex += 1n;
  }
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);

// the following test takes 1-2 minutes to complete on a
// mid-level consumer grade laptop
console.log(findFibonacciIndexByLength(10000n) === 47847n);