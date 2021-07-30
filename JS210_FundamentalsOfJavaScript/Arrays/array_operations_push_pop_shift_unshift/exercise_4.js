function shift(array) {
  if (array.length === 0) return undefined;

  // we know array.length is >= 1
  const firstElement = array[0];

  for (let moveIndex = 1; moveIndex < array.length; moveIndex += 1) {
    array[moveIndex - 1] = array[moveIndex];
  }
  
  array.length -= 1;
  return firstElement;
}

let count = [1, 2, 3];
console.log(shift(count) === 1);
console.log(count[0] === 2);
console.log(count[1] === 3);

