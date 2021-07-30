function lastInArray(someArray) {
  return someArray[someArray.length - 1];
}

const someArray = [1, true, 'eek'];

console.log(lastInArray(someArray) === 'eek');
console.log(lastInArray([]) === undefined);