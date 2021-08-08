function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log('Solution using the provided, broken implementation');
console.log(getSelectedColumns(array1, [0]));
console.log(getSelectedColumns(array1, [0, 2]));
console.log(getSelectedColumns(array2, [1, 2]));

function getSelectedColumnsFixed(numbers, cols) {
  var result = [];

  for (let i = 0, length = numbers.length; i < length; i += 1) {
    for (let j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}


console.log('Solution using the fixed implementation');
console.log(getSelectedColumnsFixed(array1, [0]));
console.log(getSelectedColumnsFixed(array1, [0, 2]));
console.log(getSelectedColumnsFixed(array2, [1, 2]));


/*

    # The intended function of the above 'getSelectedColumns' function
    # is to select specific columns to a new array, but it does not return
    # the expected result.
    #
    # What is the problem?
    #
    # How can it be fixed?

      It turns out the problem has nothing to do with the logic.

      The problems is that because the 'var' keyword is used to declare the
      'length' variable, that variable has function scope and hence the
      assignment on line 4 and line 5 affect the other respectively.

      The overall effect of line 5 re-assigning the 'length' variable is that
      it limites the number of iterations of the first-level loop that declared
      the 'i' variable because that first level loop iterates through 'i' in the
      range [0; length - 1], which means that when the secondary loop has
      finished iteration the first time, the first level loop now has the upper
      range of iteration changed to whatever the length of the 'cols' argument
      is minus one.

      This is why the returned sub-array contain:

        - one sub-array with a single value when 'cols.length' === 1
        - two sub-arrays with two values each when 'cols.length' === 2

      This can be fixed by using different local variables or just using the 
      typical style as expression in the condition expression in the loop.

      Not using the 'var' keyword would have helped here because then it would
      not have been possible to re-declare the 'length' variable because that
      is not allowed but is allowed for 'var' variables.


    # My answer after reading the answer

      After being stuck for a good hour, it is obvious that the 'var' variables
      on line 4 and 5 are the exact same because they have function scope.

      After running through the weird logic a few times and determining that the
      logic is not the problem, I found that the re-assignment on line 5
      directly affects the for loop on line 4.

      This can be fixed using 'let' keyword to declare the variables, which
      effectively creates new local variables with block scope per for loop,
      or by not using variables at all and using the length of the appropriate
      arguments according to the for loops intention.

*/