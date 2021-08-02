let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);

/*

    # What does the code above print to the console at line and 10 specifically?

      code line 6  for output line 1: 1, 2, 3
      code line 10 for output line 2: 1, 2, 3

    # Explanation

      While the local variable 'myArray' is re-assigned to a new array [1, 2] on
      line 8, the constant 'myOtherArray' still points to the same array in
      memory declared and assigned on line 1 and 2.

      In other words, the re-assignment on line 8 only re-assigns what the local
      variable points to but does not mutate the current memory contents of
      whatever the variable points to.

*/