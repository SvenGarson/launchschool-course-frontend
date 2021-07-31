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

function oddElementsOf(arr) {
  return arr.filter((element, index) => (index % 2) !== 0);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(arraysMatch(oddElementsOf(digits), [8, 16, 42]));
console.log(oddElementsOf(digits));