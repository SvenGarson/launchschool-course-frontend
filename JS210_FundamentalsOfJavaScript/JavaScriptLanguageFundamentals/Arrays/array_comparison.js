function areArraysEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;

  // we know that both arrays have the same length
  const firstArraySorted = firstArray.slice(0).sort();
  const secondArraySorted = secondArray.slice(0).sort();

  // check if any index mismatches
  return firstArraySorted.every(function (firstElement, firstElementIndex) {
    const secondElementIndex = secondArraySorted[firstElementIndex];
    return firstElement === secondElementIndex;
  });
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);
console.log(areArraysEqual([1, 1], [1, 1]) === true);