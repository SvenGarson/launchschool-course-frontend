function unshift(array, itemToPrepend) {
  array.length += 1;

  for(let moveIndex = (array.length - 2); moveIndex >= 0; moveIndex -= 1) {
    array[moveIndex + 1] = array[moveIndex];
  }

  array[0] = itemToPrepend;
  
  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0) === 4);
count[0] === [0];
count[1] === [1];
count[2] === [2];
count[3] === [3];