function reverseArray(someArray) {
  const resultArray = new Array;

  for (let index = (someArray.length - 1); index >= 0; index -= 1) {
    resultArray.push(someArray[index]);
  }

  return resultArray;
}

function numberArraysMatch(a, b) {
  if (a.length !== b.length)
    return false;

  // we know both arrays are of same length
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] !== b[index])
      return false;
  }

  return true;
}

const NUMBERS_ASCENDING  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const NUMBERS_DESCENDING = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let reversedNumbers = reverseArray(NUMBERS_ASCENDING);
console.log(numberArraysMatch(NUMBERS_DESCENDING, reversedNumbers));
