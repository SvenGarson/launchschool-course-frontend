function lastIndexOf(array, value) {
  for (let searchIndex = array.length -1; searchIndex >= 0; searchIndex -= 1) {
    const currentItem = array[searchIndex];

    if (currentItem === value) return searchIndex;
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3) === 3);
console.log(lastIndexOf([1, 2, 3], 4) === -1);