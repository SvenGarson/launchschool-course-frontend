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

function sortDescending(arr) {
  return arr.slice(0).sort(function (left, right) {
    return right - left;
  });
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(arraysMatch(result, [42, 23, 16, 15, 8, 4]));
console.log(arraysMatch(array, [23, 4, 16, 42, 8, 15]));
