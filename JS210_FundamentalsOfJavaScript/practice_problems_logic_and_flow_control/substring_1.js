/*
    # Input
        > string
        > start
            - integer
            - the starting index of the substring
            - can be negative, zero and positive
            - negative wraps around the end of the string
              i.e. treat a negative 'start' as 'string.length + start'
            ? what if string empty and start negative?
            - index character is included
        > length
            - integer
            - max length of the returned substring
            - can be negative, zero and positive
            - if start index with length overshoots the input string
              just return string until the end of string

    # Output
        - string
        - return empty string if length <= zero
        - substring in the range [start; start + length]


    # Other requirements
        > in terms of built-in String functionality use only_
            - [] operator for random access
            - length property
            - NOTHING ELSE

    # Approach
  
      // return empty string when length <= 0
      if length <= 0
        return 0

      // wrap the starting the index if negative
      if start < 0
        start = string.length + start

      substring
         get chars in that range      
*/

function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let end = (start + length);
  if (end > string.length)
    end = string.length;

  let substring = '';
  for (let characterIndex = start; characterIndex < end; characterIndex += 1) {
    substring += string[characterIndex];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4) === "llo ");
console.log(substr(string, -3, 2) === "rl");
console.log(substr(string, 8, 20) === "rld");
console.log(substr(string, 0, -20) === "");
console.log(substr(string, 0, 0) === "");