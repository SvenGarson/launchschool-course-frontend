function arraysEqual(arr1, arr2) {
  // only same length arrays can be identical
  if (arr1.length !== arr2.length)
    return false;

  // early out if any element mismatches
  for(let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i])
      return false
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));    // => true
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));    // => false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // => false