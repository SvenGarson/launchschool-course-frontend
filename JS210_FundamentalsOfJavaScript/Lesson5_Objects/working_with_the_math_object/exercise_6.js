function randomInRange(min, max) {
  const minMaxSortedAscendingly = [min, max].sort();
  min = minMaxSortedAscendingly[0];
  max = minMaxSortedAscendingly[1];

  const deltaMaxMin = max - min;
  return min + Math.floor(Math.random() * (deltaMaxMin + 1));
}

console.log(randomInRange(2, 5));
console.log(randomInRange(5, 2));
console.log(randomInRange(0, 100));