/*
    What does the following code log to the output?
  
      This code prints the contents of the original with the change
      made to the second item that is set to the Number 4.

      line 1: [1, 4, 3]

    Why?

      Line 1 declares a new array and the seconds line declares a
      variables that points to the same array as the pointer on line
      one.

      Since changing the array contents using the bracket notation
      changes the contents of that array in memory, and both the
      identifiers 'array1' and 'array2' point to the exact same
      piece of memory, both of them point to the exact same data
      and hence mutative operations made through one pointer are
      reflected by any other pointer to the same array.
*/

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);