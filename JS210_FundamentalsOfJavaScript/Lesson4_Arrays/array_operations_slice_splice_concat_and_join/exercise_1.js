function slice(array, startIndex, endIndex) {
  const spliceArray = new Array;

  for (let copyIndex = startIndex; copyIndex < endIndex; copyIndex += 1) {
    const itemToCopy = array[copyIndex];
    spliceArray.push(itemToCopy);
  }

  return spliceArray;
}

function arraysMatch(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  // search for mismatch
  for (let matchIndex = 0; matchIndex < a.length; matchIndex += 1) {
    if (a[matchIndex] !== b[matchIndex]) {
      return false;
    }
  }

  return true;
}

const testOne = arraysMatch(slice([1, 2, 3, 4, 5], 0, 2), [ 1, 2 ]);
const testTwo = arraysMatch(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3), [ 'b', 'c' ]);
console.log(testOne);
console.log(testTwo);