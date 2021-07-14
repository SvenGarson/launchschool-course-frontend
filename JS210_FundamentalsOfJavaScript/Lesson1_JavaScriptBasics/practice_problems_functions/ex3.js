function average(someNumbers) {
  let total = 0;

  for(let number of someNumbers)
    total += number;

  return total / someNumbers.length;
}

let numbersToAverage = [1, 2, 3, 4, 5];
let resultingAverage = average(numbersToAverage);
console.log(`Numbers: ${numbersToAverage}`);
console.log(`Average: ${resultingAverage}`);