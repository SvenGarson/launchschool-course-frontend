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

function concat(firstArray, secondArray) {
  const numberOfItemsCombined = firstArray.length + secondArray.length;

  const arraysCombined = new Array(numberOfItemsCombined);
  let combinedCopyIndex = 0;

  for (const firstArrayItem of firstArray) {
    arraysCombined[combinedCopyIndex] = firstArrayItem;
    combinedCopyIndex += 1;
  }

  for (const secondArrayItem of secondArray) {
    arraysCombined[combinedCopyIndex] = secondArrayItem;
    combinedCopyIndex += 1;
  }

  return arraysCombined;
}

const expectedResult = [ 1, 2, 3, 4, 5, 6 ];
const actualResult = concat([1, 2, 3], [4, 5, 6]) ;
const testResult = arraysMatch(actualResult, expectedResult);
console.log(testResult);
