function capToCeiling(value, ceiling) {
  return (value > ceiling) ? ceiling : value;
}

function slice(array, begin, end) {
  // cap begin and end to array length
  begin = capToCeiling(begin, array.length);
  end = capToCeiling(end, array.length);

  const slicedArray = new Array;

  for (let extractionIndex = begin; extractionIndex < end; extractionIndex += 1) {
    const extractedItem = array[extractionIndex];
    slicedArray.push(extractedItem);
  }

  return slicedArray;
}

console.log(`\n\nTesting 'slice' function`);
console.log(slice([1, 2, 3], 1, 2));   // [2]
console.log(slice([1, 2, 3], 2, 0));   // []
console.log(slice([1, 2, 3], 5, 1));   // []
console.log(slice([1, 2, 3], 0, 5));   // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));        // [2, 3]
console.log(arr1);                     // [1, 2, 3]

console.log(`\n\nTesting 'capToCeiling' function`);
console.log(capToCeiling(5, 10) === 5);
console.log(capToCeiling(0, 10) === 0);
console.log(capToCeiling(10, 10) === 10);
console.log(capToCeiling(15, 10) === 10);

/*

  # For the splice method

    # Input
      > ARRAY
          - array
      > START
          - integers
          - always >= 0
          - cap to ARRAY.length if greater than ARRAY.length
      > DELETE_COUNT
          - integer
          - if DELETE_COUNT is larger than the number of elements from START
            up to the end of ARRAY, set DELETE_COUNT to (ARRAY.LENGTH - START)
          - always >= 0
          - number of element to delete from ARRAY beginning at START
            if any
      > ELEMENTS
          - if optional elements are provided, they are added at START
          - if none are provided, no elements are added

    # Output
        - array
        - contains deleted items
        - empty if none have been deleted

    # Other requirements
      - actually mutates the array by deleting existing and/or add
        new elements

    # Approach

*/

function splice(array, start, deleteCount, element1, elementN) {
  // ...
}

console.log(`\n\nTesting 'splice' function`);
console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]