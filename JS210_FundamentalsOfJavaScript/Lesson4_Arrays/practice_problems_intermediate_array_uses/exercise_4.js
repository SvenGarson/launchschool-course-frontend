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

function matrixSums(arr) {
  // return array that replaces the nested array with the sum of it's elements
  return arr.map(subArray => {
    return subArray.reduce(function (accumSum, number) {
      return accumSum + number;
    }, 0);
  });
}

const expectedResult = [15, 60, 12];
const actualResult = matrixSums([[2, 8, 5], [12, 48, 0], [12]]);
console.log(arraysMatch(expectedResult, actualResult));
