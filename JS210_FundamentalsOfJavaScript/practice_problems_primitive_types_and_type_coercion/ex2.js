/*
    The multiplication operator is defined only for
    Numbers, so any non-number operand is converted
    to a Number before multiplication takes place.

    1) x * y
    2) '13' * 9 => the string is coerced into a Number
    3) 13 * 9   => 9 is then multiplied into 13

*/

let x = '13';
let y = 9;

let result = x * y;
console.log(typeof(result) === 'number');
console.log(result === (13 * 9));