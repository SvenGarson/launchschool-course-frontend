/*
    reduce the numbers to the sum of their squares
    i.e.

    1) square all the numbers
    2) sum them all

    - sum the squares

    9 + 25 + 49 = 
*/

function sumOfSquares(numbers) {
  // sum the squares of the numbers in the list
  return numbers.reduce((sum, number) => sum + Math.pow(number, 2), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83