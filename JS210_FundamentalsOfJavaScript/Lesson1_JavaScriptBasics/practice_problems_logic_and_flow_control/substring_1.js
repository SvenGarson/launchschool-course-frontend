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
  
      given (string, start, length)
      // wrap the length if negative

*/

function substr(string, start, length) {
  // solution here
}

let string = 'hello world';

console.log(substr(string, 2, 4) === "llo ");
console.log(substr(string, -3, 2) === "rl");
console.log(substr(string, 8, 20) === "rld");
console.log(substr(string, 0, -20) === "");
console.log(substr(string, 0, 0) === "");