let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  let current = array[i]
  if (current === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(`Index of number five: ${indexOfFive}`);