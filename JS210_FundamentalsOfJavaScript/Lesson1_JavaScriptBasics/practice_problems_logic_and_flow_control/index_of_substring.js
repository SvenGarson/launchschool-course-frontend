/*
    # The 'indexOf' function
      # Input

        > firstString (string to search through)
        > secondString (string to find index of)
        ! assume both strings are non-empty

      # Output

        - index integer of the starting index of secondString
          in firstString
        - -1 is the 2ndString does not exist if 1stString

      # Which index and what matches

        - the index of the first matching string is returned,
          scanning the firstString from left to right
        - character matching is case-sensitive

      # Other Requirements

        > only functions and operators I can use are:
            - [] operator to access string characters
            - the String.prototype.length property
            - NO OTHER BUILT IN STRING CLASS PROTOTYPE FUNCTION

      # Approach
          
          for every fIndex in f
            if f[fIndex] === s[0]
              # this may be a substring
              continue is first chars missmatch
              
              # optimistic: if nothing is signaled, subs match
              subMatch = true
              from seconds fIndex to last fIndex
                fCurrent = ...
                sCurrent = ...

                # we want to signalize a missmatch
                if fCurrent !== sCurrent
                  subMatch = false
                  break

              # subMatch tells us if the first sub matches
              # we can stop here or keep lookin
              - return fIndex or something else


      # Pseudo Approach

          # given f and s, find first occurence of s[0] in f

            - sfirst = s[0]
            
            # pessimistic: return when we find an occurence,
                           and nothing if no occurence found

            - for (index from 0 upto exluding f.length)
                - fcurrent = f[index]
                - if (fcurrent === sfirst)
                    - return index

          # fiven f, s and the index of the first occurence of s[0]
          # in f. First occurence index can be -1 which means no
          # match found
          # !!! ??? implement the 2nd part marked up top

            # The limiting factor when scanning the full s string
              is the f string, so we should have the following cases:

                  1) f does not contain all of s
                     when f[index] === undefined for some index
                     means that f cannot contain s as a whole
                  
                  2) 

      # Comments
          
          - out of bounds index on string returns 'undefined'

*/

function indexOf(firstString, secondString) {
  for (let fIndex = 0; fIndex < firstString.length; fIndex += 1) {
    // detect start of matching sub-string
    if (firstString[fIndex] !== secondString[0]) continue;

    // note: this index could be a possible substring

    // now check whether secondString fully contained in firstString
    let firstContainsSecond = true;
    for (let sIndex = 0; sIndex < secondString.length; sIndex += 1) {
      const sIndexInFirst = fIndex + sIndex;
      const fCurrent = firstString[sIndexInFirst];
      const sCurrent = secondString[sIndex];

      if (fCurrent !== sCurrent) {
        firstContainsSecond = false;
        break;
      }
    }

    // we want to return the index when they match
    if (firstContainsSecond === true) return fIndex;
  }

  // note: we know that not matching index has been found
  return -1;
}

function lastIndexOf(firstString, secondString) {
  // this time just iterate from the end to the start of the firstString
  for (let fIndex = (firstString.length - 1); fIndex >= 0; fIndex -= 1) {
    // detect start of matching sub-string
    if (firstString[fIndex] !== secondString[0]) continue;

    // note: this index could be a possible substring

    // now check whether secondString fully contained in firstString
    let firstContainsSecond = true;
    for (let sIndex = 0; sIndex < secondString.length; sIndex += 1) {
      const sIndexInFirst = fIndex + sIndex;
      const fCurrent = firstString[sIndexInFirst];
      const sCurrent = secondString[sIndex];

      if (fCurrent !== sCurrent) {
        firstContainsSecond = false;
        break;
      }
    }

    // we want to return the index when they match
    if (firstContainsSecond === true) return fIndex;
  }

  // note: we know that not matching index has been found
  return -1;
}

console.log('\nSolutions to original problems');

console.log(indexOf('Some strings', 's') === 5);
console.log(indexOf('Blue Whale', 'Whale') === 5);
console.log(indexOf('Blue Whale', 'Blute') === -1);
console.log(indexOf('Blue Whale', 'leB') === -1);

console.log(lastIndexOf('Some strings', 's') === 11);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all') === -1);


/*
    # Further exploration
    - https://launchschool.com/lessons/c26a6fcc/assignments/4e531b61

*/
