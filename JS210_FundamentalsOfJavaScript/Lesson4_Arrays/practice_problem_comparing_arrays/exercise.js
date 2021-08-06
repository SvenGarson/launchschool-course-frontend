function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let index = 0; index < a.length; index += 1) {
    if (a[index] !== b[index])
      return false;
  }

  return true;
}

console.log(arraysEqual([1], [1]) === true);
console.log(arraysEqual([1], [2]) === false);
console.log(arraysEqual([1, 2], [1, 2, 3]) === false);
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]) === true);
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]) === false);
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]) === false);
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]) === false);