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

      # Capping arguments
      cap START to ARRAY.length inclusive
      cap DELETE_COUNT to (ARRAY.length - START) if larger than number of items
    
      # optional deletion
      deleted = []
      if DELETE_COUNT != 0
        delete elements from ARRAY in range [START; START + DELETE_COUNT - 1]
        deleted << the elements ...

      # optional insertion
      if ELEMENTS >= 0
        add from START

      # return
      return deleted

    # Comments

      - if deletion count >= elements to add, the array can be formatted after
        deletion + insertion once instead of doing it twice, but that is way
        more complicated

    # Pseudo - use our slice method implementation
    
      # new approach using only slice

        0. cap start and count
        1. extract deleted items using slice
        2. change length of the array to = array.length + insertions - deletions
           which means that array now has the right size to hold the final data
           but the data needs to be re-populated accordingly

           Currently, array indices in range [0; start - 1] is the correct result
        3. copy the items to add starting at start
        4. return delted

      # Example run through given args: ([1, 2, 3], 1, 2, 'two', 'three')
      

        array  = [1, 2, 3]
        start  = 1
        ndele  = 2
        insert = two, three

        0. Ok as is
        1. deleted = slice(array, start, start + dc - 1)
                   = slice(array, 1, 2)
                   = [2, 3]

        2. newLength = array.length + insert + deletions
                     = 3 + 2 + (-2)
                     = 3

        3. insert items starting at start through indices [1, 2]
           array = [1, two, three]

        4. return deleted
  
*/

function splice(array, start, deleteCount, ...elementsToAdd) {
  start = (start > array.length) ? array.length : start;
  const maxNumberOfItemsToDelete = array.length - start;
  deleteCount = (deleteCount > maxNumberOfItemsToDelete) ? maxNumberOfItemsToDelete : deleteCount;

  const deletedElements = slice(array, start, start + deleteCount);

  const oldLength = array.length;
  array.length = array.length - deleteCount + elementsToAdd.length;

  if (array.length !== oldLength) {
    for (let moveIndex = (array.length - 1); moveIndex > start; moveIndex -= 1) {
      array[moveIndex] = array[moveIndex - 1];
    }
  }

  for (let insertionIndex = 0; insertionIndex < elementsToAdd.length; insertionIndex += 1) {
    array[start + insertionIndex] = elementsToAdd[insertionIndex];
  }

  return deletedElements;
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