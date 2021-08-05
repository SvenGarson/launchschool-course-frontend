function arraysMatch(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;


  // search for mismatch
  for (let matchIndex = 0; matchIndex < a.length; matchIndex += 1) {
    if (a[matchIndex] !== b[matchIndex]) {
      return false;
    }
  }

  return true;
}

function capValueToRange(value, min, max) {
  let cappedValue;
  
  if (value < min) {
    cappedValue = min;
  } else if (value > max) {
    cappedValue = max;
  } else {
    cappedValue = value;
  }

  return cappedValue;
}

function slice(array, begin, end) {
  start = capValueToRange(begin, 0, array.length);
  end = capValueToRange(end, 0, array.length);

  const extractedElements = [];

  for (let extractionIndex = start; extractionIndex < end; extractionIndex += 1) {
    extractedElements.push(array[extractionIndex]);
  }

  return extractedElements;
}

console.log(arraysMatch(slice([1, 2, 3], 1, 2), [2]));
console.log(arraysMatch(slice([1, 2, 3], 2, 0), []));
console.log(arraysMatch(slice([1, 2, 3], 5, 1), []));
console.log(arraysMatch(slice([1, 2, 3], 0, 5), [1, 2, 3]));

const arr1 = [1, 2, 3];
console.log(arraysMatch(slice(arr1, 1, 3), [2, 3]));
console.log(arraysMatch(arr1, [1, 2, 3]));

function splice(array, start, deleteCount, ...elementsToAdd) {
  start = capValueToRange(start, 0, array.length);

  // determine the max number of items that can possibly be deleted
  const maxItemsLeftToDelete = array.length - start;
  deleteCount = (deleteCount > maxItemsLeftToDelete) ? maxItemsLeftToDelete : deleteCount;  
  const deletedElements = slice(array, start, start + deleteCount);  

  // determine the content of the 'array' contents instead of fiddling in place
  const startRegion = slice(array, 0, start);
  const postDeletionRegion = slice(array, start + deleteCount, array.length);

  // re-build the the full array based on the results
  const newArraySize = startRegion.length + elementsToAdd.length + postDeletionRegion.length;
  array.length = newArraySize;

  const newArrayContents = [startRegion, elementsToAdd, postDeletionRegion].flat();
  newArrayContents.forEach((newElement, index) => array[index] = newElement );

  return deletedElements;
}

console.log(arraysMatch(splice([1, 2, 3], 1, 2), [2, 3]));
console.log(arraysMatch(splice([1, 2, 3], 1, 3), [2, 3]));
console.log(arraysMatch(splice([1, 2, 3], 1, 0), []));
console.log(arraysMatch(splice([1, 2, 3], 0, 1), [1]))
console.log(arraysMatch(splice([1, 2, 3], 1, 0, 'a'), []));

const arr2 = [1, 2, 3];
console.log(arraysMatch(splice(arr2, 1, 1, 'two'), [2]));
console.log(arraysMatch(arr2, [1, "two", 3]));

const arr3 = [1, 2, 3];
console.log(arraysMatch(splice(arr3, 1, 2, 'two', 'three'), [2, 3]));
console.log(arraysMatch(arr3, [1, "two", "three"]));

const arr4 = [1, 2, 3];
console.log(arraysMatch(splice(arr4, 1, 0), []));
console.log(arraysMatch(splice(arr4, 1, 0, 'a'), []));
console.log(arraysMatch(arr4, [1, "a", 2, 3]));

const arr5 = [1, 2, 3];
console.log(arraysMatch(splice(arr5, 0, 0, 'a'), []));
console.log(arraysMatch(arr5, ["a", 1, 2, 3]));