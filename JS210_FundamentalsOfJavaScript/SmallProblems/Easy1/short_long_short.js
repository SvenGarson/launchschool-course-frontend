function sortStringsByLengthAscendingly(strings) {
  return strings.sort((leftString, rightString) => {
    return leftString.length - rightString.length;
  });
}

function shortLongShort(stringA, stringB) {
  const strings = [stringA, stringB];
  const stringsSortedByLengthAscendingly = sortStringsByLengthAscendingly(strings)

  const shortestString = stringsSortedByLengthAscendingly[0];
  const longestString = stringsSortedByLengthAscendingly[1];

  return shortestString + longestString + shortestString;
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");