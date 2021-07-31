/*
    
    Can we insert a value at a negative array index?

      Yes we can insert an item at a negative array element.

    If so, why?

      Because an array is an Object and while negative array
      indices are not valid indices in terms of the array, the
      item will be added to the array 'Object' as a key value 
      pair where the negative index is the key and the value 
      the key-value pair value.

*/

let someArray = [1, 2, 3];
console.log(someArray.length === 3);
someArray[-7] = 'Charles Dickens';
console.log(someArray[-7] === 'Charles Dickens');
console.log(someArray);
console.log(someArray.length === 3);