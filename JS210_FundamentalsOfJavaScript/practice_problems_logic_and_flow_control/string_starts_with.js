/*
    # Input
        > some string
            - some string
            - non empty by examples given
        > beginning
            - the string the some string must start with

    # Output
        - true if some string starts with beginning
        - true if beginning is an empty string
        - false otherwise 

    # Other requirements
        > cannot use string functionality apart from
            - length
            - [] access

    # Approach

      if beginning === ''
        return true

      // note: beginning is non-empty
      // check wether all beginning chars are in some string
      // be optimistic and report any missmatch

      match = true
      for index from 0 up to and exluding beginning.length
        if chars missmatch
          match = false
      return match
*/

function startsWith(string, searchString) {
  let startMatches = true;

  for (let searchIndex = 0; searchIndex < searchString.length; searchIndex += 1) {
    if (string[searchIndex] !== searchString[searchIndex]) {
      startMatches = false;
      break;
    }
  }

  return startMatches;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We') === true);
console.log(startsWith(str, 'We put') === true);
console.log(startsWith(str, '') === true);
console.log(startsWith(str, 'put') === false);

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString) === false);