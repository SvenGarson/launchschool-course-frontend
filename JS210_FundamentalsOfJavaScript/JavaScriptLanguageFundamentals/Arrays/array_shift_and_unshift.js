function shift(array) {
  if (array.length == 0) return undefined;

  // we know array.length is >= 1
  const firstElement = array[0];
  for (let targetIndex = 0; targetIndex <= array.length - 2; targetIndex += 1) {
    array[targetIndex] = array[targetIndex + 1];
  }

  array.length -= 1;

  return firstElement;
}

function unshift(array, ...itemsToAdd) {
  const originalArrayLength = array.length;
  const numberOfItemsToAdd = itemsToAdd.length;
  array.length += numberOfItemsToAdd;

  if (originalArrayLength !== 0) {
    for (let sourceIndex = (originalArrayLength - 1); sourceIndex >= 0; sourceIndex -= 1) {
      const destinationIndex = sourceIndex + numberOfItemsToAdd;
      array[destinationIndex] = array[sourceIndex];
    }
  }

  for (let prependIndex = 0; prependIndex < numberOfItemsToAdd; prependIndex += 1) {
    array[prependIndex] = itemsToAdd[prependIndex];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]