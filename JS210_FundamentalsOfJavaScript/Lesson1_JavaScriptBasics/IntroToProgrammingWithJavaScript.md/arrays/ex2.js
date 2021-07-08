let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
let evenNumbers = myArray.filter(number => (number % 2) == 0);

evenNumbers.forEach(evenNumber => console.log(evenNumber));
