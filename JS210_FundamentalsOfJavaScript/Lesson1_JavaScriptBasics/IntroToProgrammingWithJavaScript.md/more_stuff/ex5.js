/*
    What does the function in the following code do?

      1. Takes a string as input presumably
      2. Splits the string at a single space into an array of strings
      3. Reverses the words in the array
      4. Replaces the strings in a new array with the length of
         each particular string
      5. Returns that array of Numbers
*/

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething('Give my that orange hat please!'));
// returns [7, 3, 6, 4, 2, 4]
