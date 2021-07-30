/*
  
  requirements
    - declare a findIntegers function that uses the Array.filter
      function to generate the solution

  input
    - array
    - can contain 'any' value of 'any' type

  output
    - array
    - contains only integer of the input list

*/

function findIntegers(list) {
  return list.filter(item => Number.isInteger(item));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
