function sum(someNumbers) {
  let total = 0;

  for(let number of someNumbers)
    total += number;

  return total;
}

function average(someNumbers) {
  return sum(someNumbers) / someNumbers.length;
}

let temperatures = [23.5, 20.8, 21.7, 28.0, 15.35]
let averageTemperature = average(temperatures);
console.log(`Temperatures: ${temperatures}`);
console.log(`Average temperature: ${averageTemperature}`);
