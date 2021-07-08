let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

let i = 1;
let j = 3;
console.log(arr[i][j] === 6);
arr[i][j] = 606;
console.log(arr[i][j] === 606);
