function indexOf(array, value) {
  for (let searchIndex = 0; searchIndex < array.length; searchIndex += 1) {
    const currentItem = array[searchIndex];

    if (currentItem === value) return searchIndex;
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3) === 2);
console.log(indexOf([1, 2, 3], 4) === -1);