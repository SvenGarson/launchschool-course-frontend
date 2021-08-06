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

function uniqueElements(arr) {
  const uniqueItems = new Array;

  for (item of arr) {
    const itemAlreadyRecorded = uniqueItems.includes(item)
    if (itemAlreadyRecorded)
      continue;

    // we know the item has not yet been added
    uniqueItems.push(item)
  }

  return uniqueItems;
}

const expectedResult = [1, 2, 4, 3, 5];
const actualResult = uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);
console.log(arraysMatch(actualResult, expectedResult));
