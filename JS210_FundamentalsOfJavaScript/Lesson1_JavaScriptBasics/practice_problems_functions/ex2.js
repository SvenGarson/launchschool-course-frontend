function average(a, b, c) {
  return sum(a, b, c) / 3;
}

function sum(a, b, c) {
  return a + b + c;
}

let a = 1;
let b = 2;
let c = 3;

let result = average(a, b, c);
console.log(`The average of ${a}, ${b} and ${c} is still ${result}`)