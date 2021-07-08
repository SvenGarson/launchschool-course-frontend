let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

/*
    - use the .map function
    - create new array that:
    > replaces the myArray value with:
        - the string 'even' if the value is even
        - the string 'odd' if odd
*/
function numberEven(number) {
  return ((number % 2) == 0);
}

let result = myArray.map(function(number){
  return numberEven(number) ? 'even' : 'odd';
});

console.log(result);