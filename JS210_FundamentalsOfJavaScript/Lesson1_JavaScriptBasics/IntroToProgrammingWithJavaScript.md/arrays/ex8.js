function oddLengths(strings) {
  let oddLengths = strings.reduce(function(oddLengths, string) {
    stringLength = string.length;

    // add string length to accum if length is odd
    lengthIsOdd = ((stringLength % 2) === 1);

    if (lengthIsOdd) {
      oddLengths.push(stringLength);
    }

    return oddLengths;
  }, []);

  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let result = oddLengths(arr);
console.log(result[0] === 1);
console.log(result[1] === 5);
console.log(result[2] === 3);
