function push(array, itemToInsert) {
  array[array.length] = itemToInsert;
  return array.length;
}

let count = [0, 1, 2];
console.log(push(count, 3) === 4);
console.log(count[0] === 0);
console.log(count[1] === 1);
console.log(count[2] === 2);
console.log(count[3] === 3);