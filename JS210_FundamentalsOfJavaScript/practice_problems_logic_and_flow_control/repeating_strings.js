/*

    # Input
        > string to repeat
        > number of times to repeat the string

    # Output
        - string
        - input string repeated times times
        > edge cases:
            - if times is NaN      r = undefined
            - if times is negative r = undefined
            - if times is zero     r = empty string

    # Other requirements
        - ignore the fact the at a number can be a float
        - you can only concatenate string
        - must not use ANY other string function

    # Approach

      if (times == NaN || times < 0)
        undefined
      elsif (times == zero)
        ''
      elsif times.isInteger
        result = string
        times.times { result += strings }
        result
      else
        undefined

    # Problems

      NaN 

*/

function isValidCount(number) {
  return (Number.isInteger(number) && number >= 0);
}

function repeat(string, times) {
  if (!isValidCount(times))
    return undefined;

  let repeatedString = '';
    
  for (let cycle = 0; cycle < times; cycle += 1) {
    repeatedString += string;
  }

  return repeatedString;
}

console.log(repeat('abc', 1) === "abc");
console.log(repeat('abc', 2) === "abcabc");
console.log(repeat('abc', -1) === undefined);
console.log(repeat('abc', 0) === "");
console.log(repeat('abc', 'a') === undefined);
console.log(repeat('abc', false) === undefined);
console.log(repeat('abc', null) === undefined);
console.log(repeat('abc', '  ') === undefined);
