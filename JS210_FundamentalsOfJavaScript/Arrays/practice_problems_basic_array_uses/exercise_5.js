function firstNOf(arr, count) {
  return arr.slice(0, count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3).length === 3);
console.log(firstNOf(digits, 3)[0] === 4);
console.log(firstNOf(digits, 3)[1] === 8);
console.log(firstNOf(digits, 3)[2] === 15);