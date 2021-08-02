function arraysMatch(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;


  // search for mismatch
  for (let matchIndex = 0; matchIndex < a.length; matchIndex += 1) {
    if (a[matchIndex] !== b[matchIndex]) {
      return false;
    }
  }

  return true;
}

function concat(...args) {
  const concatenatedArray = new Array;

  for (const itemToConcatenate of args) {
    let itemToConcatenateAsArray = itemToConcatenate;

    // represent non-array items as array
    if (!Array.isArray(itemToConcatenate)) {
      itemToConcatenateAsArray = [itemToConcatenate];
    }

    for (const item of itemToConcatenateAsArray) {
      concatenatedArray.push(item);
    }
  }

  return concatenatedArray;
}

console.log(arraysMatch(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(arraysMatch(concat([1, 2], 'a', ['one', 'two']), [1, 2, "a", "one", "two"]));
console.log(arraysMatch(concat([1, 2], ['three'], 4), [1, 2, "three", 4]));
