function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

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

console.log(arraysMatch(oddities([2, 3, 4, 5, 6]), [2, 4, 6]));
console.log(arraysMatch(oddities(['abc', 'def']), ['abc']));

/*

    # Explain the result of the comparisons on line 11 and 12

      While the expected return values are accurately returned by the
      'oddities' function, the strict-equality operator, when used with
      arrays as operands merely evaluates whether both array operands
      are the exact same point i.e. the exact same array in memory,
      which can never be the case since the function always returns
      a new array and not the one passed as argument.

*/