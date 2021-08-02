function isString (obj) {
  return (Object.prototype.toString.call(obj) === '[object String]');
}

function reverse(inputForReversal) {
  const reversedArray = new Array(inputForReversal.length);

  for (let sourceIndex = 0; sourceIndex < inputForReversal.length; sourceIndex += 1) {
    const destinationIndex = inputForReversal.length - 1 - sourceIndex;
    reversedArray[destinationIndex] = inputForReversal[sourceIndex];
  }

  return isString(inputForReversal) ? reversedArray.join('') : reversedArray;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]