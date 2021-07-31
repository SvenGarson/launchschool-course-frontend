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

function endsOf(beginningArr, endingArr) {
  const beginningFirst = beginningArr.slice(0, 1);
  const endingLast = endingArr.slice(endingArr.length - 1, endingArr.length);
  return beginningFirst.concat(endingLast);
}

const expectedResult = [4, 42];
const actualResult = endsOf([4, 8, 15], [16, 23, 42]);
console.log(arraysMatch(actualResult, expectedResult));