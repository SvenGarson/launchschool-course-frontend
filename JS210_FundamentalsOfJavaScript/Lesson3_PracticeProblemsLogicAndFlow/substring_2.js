/*    
    # Input
      > string
      > start
      > end

    # Output
        - the substring based on the below rules

    # Other requirements
      - if end is undefined, return substring from start upto
        including end of the string

      - if start and end positive ints, make it so that
        start < end AND withing the string boundary
        AND return substring including start and excluding end
      
      - if start === end return empty string

      - if start or end are less than zero OR NaN or not an int,
        treat that one (or both) as a zero

      - if start or end are larger than string.length
        treat it as the string length

    # Restate and making sense of the many rules

      Done
        1) end === undefined: return sub from start to last character
        x) if start and end positive ints, make it so start < end and in string
           index bounday
        x) if start/end > string.length: set it to string.length
        x) is start/end:
              - less than zero
              - NaN
              - not an Integer
           treat it as zero

           Can I restate this as: treat as zero if not an integer

      Not Done
        x) start === end: return empty

    # Approach

      1) Interpret parameters
      2) Determine start and end
      3) Return sound string based start and end
         including start and excluding end index

    # Appraoch pseudo

      - if end === undefined
          - start = 0
          - end = string.length
          - return that substring

      # note: end is NOT undefined

*/

function substring(string, start, end) {
  if (end === undefined) {
    start = start;
    end = string.length;
  }

  if (start > end) {
    const tempStart = start;
    start = end;
    end = tempStart;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (end > string.length) {
    end = string.length;
  }

  let substring = '';

  for (let substringIndex = start; substringIndex < end; substringIndex += 1) {
    substring += string[substringIndex];
  }
  return substring;
}

let string = 'hello world';

console.log(substring(string, 2, 4) === "ll");
console.log(substring(string, 4, 2) === "ll");
console.log(substring(string, 0, -1) === "");
console.log(substring(string, 2) === "llo world");
console.log(substring(string, 'a') === "hello world");
console.log(substring(string, 8, 20) === "rld");