function join(array, joinString) {
  if (array.length === 0) return '';
  if (array.length === 1) return String(array[0]);

  // note: array.length is >= 2
  let joinedArrayString = array[0];

  for (let arrayIndex = 1; arrayIndex < array.length; arrayIndex += 1) {
    const currentArrayItem = array[arrayIndex];
    joinedArrayString += (joinString + String(currentArrayItem));
  }

  return joinedArrayString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck ') === 'brick truck wha');
console.log(join([1, 2, 3], ' and ') === '1 and 2 and 3');
console.log(join([], ' and ') === '');
console.log(join([1], ' and ') === '1');