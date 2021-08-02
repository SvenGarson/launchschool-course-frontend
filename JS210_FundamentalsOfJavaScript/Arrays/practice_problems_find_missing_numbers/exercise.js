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

function missing(numbers) {
  if (numbers.length < 2) return new Array;

  // we know that numbers.length is >= 2
  const missingNumbers = new Array;
  const missingRangeMin = numbers[0] + 1;
  const missingRangeMax = numbers[numbers.length - 1] - 1;

  // look for missing numbers
  for (let missingCandidate = missingRangeMin; missingCandidate <= missingRangeMax; missingCandidate += 1) {
    const candidateIsMissing = !numbers.includes(missingCandidate);

    if (candidateIsMissing) {
      missingNumbers.push(missingCandidate)
    }
  }

  return missingNumbers;
}

console.log(arraysMatch(missing([-3, -2, 1, 5]), [-1, 0, 2, 3, 4]));
console.log(arraysMatch(missing([1, 2, 3, 4]), []));
console.log(arraysMatch(missing([1, 5]), [2, 3, 4]));
console.log(arraysMatch(missing([6]), []));