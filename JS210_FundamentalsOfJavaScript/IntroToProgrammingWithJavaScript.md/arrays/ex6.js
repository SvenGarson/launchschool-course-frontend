function oddLengths(words) {
  let wordLengths = words.map(word => word.length);

  let oddLengths = wordLengths.filter(function(length) {
    return ((length % 2) === 1);
  });

  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]