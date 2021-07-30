function sum(someNumbers) {
  let total = 0;

  for(let number of someNumbers)
    total += number;

  return total;
}

function average(someNumbers) {
  return sum(someNumbers) / someNumbers.length;
}

let numbersToAverage = [1, 2, 3, 4, 5];
let resultingAverage = average(numbersToAverage);
console.log(`Numbers still: ${numbersToAverage}`);
console.log(`Average still: ${resultingAverage}`);