function pop(array) {
  const currentLength = array.length;
  
  let poppedItem;

  if (currentLength === 0) {
    poppedItem = undefined;
  } else {
    const newLength = currentLength - 1;
    poppedItem = array[newLength];
    array.length = newLength;
  }

  return poppedItem;
}

let count = [1, 2, 3];
console.log(pop(count) === 3);
console.log(pop([]) === undefined);
console.log(count[0] === 1);
console.log(count[1] === 2);