function isNegativeZero(number) {
  return (1 / number) === -Infinity;
}

console.log(isNegativeZero(1) === false);
console.log(isNegativeZero(0) === false);
console.log(isNegativeZero(-0) === true);
console.log(isNegativeZero(-1) === false);