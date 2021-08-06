function isNotANumber(number) {
  if (number === 0)
    return false;
  else
    return !number;
}

console.log(isNotANumber(8) === false);
console.log(isNotANumber(125) === false);
console.log(isNotANumber(NaN) === true);