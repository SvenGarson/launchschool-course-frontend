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

function upAndDown(array) {
  const arrayDuplicate = array.slice(0);
  const reversedArrayDuplicate = arrayDuplicate.reverse();

  return array.concat(reversedArrayDuplicate);
}

const array = [1, 2, 3];
const expectedResult = [1, 2, 3, 3, 2, 1];
const actualResult = upAndDown(array);

console.log(arraysMatch(actualResult, expectedResult));
console.log(arraysMatch(array, [1, 2, 3]));