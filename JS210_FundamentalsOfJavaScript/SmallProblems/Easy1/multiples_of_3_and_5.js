function isEvenMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(ceiling) {
  let sum = 0;

  for (let currentNumber = 1; currentNumber <= ceiling; currentNumber += 1) {
    if (isEvenMultiple(currentNumber, 3) || isEvenMultiple(currentNumber, 5)) {
      sum += currentNumber;
    }
  }

  return sum;
}

console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);