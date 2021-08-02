/*

    By 'only the array values should be copied, not the array reference' the
    problem means that the array contents are to be copied in to a new array,
    in other words the `myOtherArray` constant points to another array than
    'myArray'.

    Since integers are primitives.

    Some ways to achieve this are:

      1. use Array.prototype.slice to copy the array
      2. use other functions that return a new array such as
         Array.prototype.map and Array.from
      3. Manually iterate the array into a new one

*/

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

// origina approach to change
myArray.pop();
console.log(myOtherArray === myArray);

myArray = [1, 2];
console.log(myOtherArray !== myArray);

// first implementation
let myArrayFirst = [1, 2, 3, 4];
const myOtherArrayFirst = myArrayFirst.slice(0);

myArrayFirst.pop();
console.log(myOtherArrayFirst !== myArrayFirst);

myArrayFirst = [1, 2];
console.log(myOtherArrayFirst !== myArrayFirst);

// second implementation
let myArraySecond = [1, 2, 3, 4];
const myOtherArraySecond = Array.from(myArraySecond);

myArraySecond.pop();
console.log(myOtherArrayFirst !== myArraySecond);

myArraySecond = [1, 2];
console.log(myOtherArrayFirst !== myArraySecond);