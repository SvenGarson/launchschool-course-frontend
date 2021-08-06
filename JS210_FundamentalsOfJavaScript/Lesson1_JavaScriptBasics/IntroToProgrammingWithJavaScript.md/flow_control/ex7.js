function capsStringLongerThan10(someString) {
  if (someString.length > 10)
    return someString.toUpperCase();
  else
    return someString;
}

console.log(capsStringLongerThan10('Brown') === 'Brown');
console.log(capsStringLongerThan10('123456789abcd') === '123456789ABCD');