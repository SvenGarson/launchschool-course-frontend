function penultimate(string) {
  return string.split(' ')[-2];
}

console.log(penultimate('last word') === undefined); // expected: "last"
console.log(penultimate('Launch School is great!') === undefined); // expected: "is"

function penultimateFixed(string) {
  const stringWords = string.split(' ');
  const nextToLastIndex = stringWords.length - 2;
  return stringWords[nextToLastIndex];
}

console.log(penultimateFixed('last word') === 'last');
console.log(penultimateFixed('Launch School is great!') === 'is');

/*

    # Run the code, determine what the problem is, fix it and explain the
    # problem and the solution.

      The problem is that the 'penultimate' used negative indices to,
      presumably, access the next to last element in the array, which is the
      correct solution logically, but negative indices do not work this
      way in JavaScript.

      One solution is to base the next to last index of the length of
      the array.

*/