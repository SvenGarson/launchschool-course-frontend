function lastNOf(arr, count) {
  return arr.slice(-count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3).length === 3);
console.log(lastNOf(digits, 3)[0] === 16);
console.log(lastNOf(digits, 3)[1] === 23);
console.log(lastNOf(digits, 3)[2] === 42);
console.log(lastNOf(digits, 7).length === 6);
