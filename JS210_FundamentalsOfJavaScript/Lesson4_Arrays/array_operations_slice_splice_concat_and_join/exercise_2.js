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

/*
  
  # Input
      - assume indices are valid

  # Output
    - NEW array
    - contains the removed items
    - number of items removed must be capped to what exists
    - empty when input is empty


  # Requirements
      - this function DOES MUTATE the input array
      - can use same functions as previous exercises

  # Approach

    inp      : [1, 2, 3, 4, 5, 6, 7, 8]
    start idx: 2
    end   idx: 5
    out      : [3, 4, 5, 6, 7]

    1. grab all the values and cap fetching to arraybound
    2. copy original array items from after cap region to
       start index
    3. shrink array by the number of items grabbed/copied
  
  # Manual example on provided array

    array       : [1, 2, 3, 4, 5, 6, 7, 8]
    start index : 2
    take n items: 5
    return      : [3, 4, 5, 6, 7]
    mut. array  : [1, 2, 8]

      array: [1, 2, 8, 4, 5, 6, 7, 8]
      resul: [3, 4, 5, 6, 7]

      # extracting the specified range
        maxSearchIndex = 6
        iter in range [2; 6] through i
          push array[i]

      # moving the un-extracted array portion forward to prepare for shrinking
        destinationIndex = 2
        iter in range [7; 7] through k
          k=7) array[2] = array[7]

      # shrink the array
        array.lengt -= 5

      # this mutates the array to
        array === [1, 2, 8]
      
      # final results
        gatheredArray = [3, 4, 5, 6, 7]
        array         = [1, 2, 8]


  # Pseudo

    - result = []
    - maxSearchIndex = [startIndex + n - 1, array.length - 1].min
    - from startIndex upto and including maxSearchIndex through i
        - itemToCopy = array[i]
        - result.push()
    
    # move the portion of the original array that has not been copied
    # that is in original array range [maxSearchIndex; array.length - 1]

    # the following potentially copies nothing as it can surpass the array capacity
    - destinationIndex = startIndex
    - for srcIndex in range [[maxSearchIndex + 1; array.length - 1]
      - array[destinationIndex] = array[srcIndex]
      - destinationIndex += 1

    # shrink array by the number of items extracted
    array.length -= result.length

*/

function splice(array, startIndex, itemsToCopy) {
  if (array.length === 0) return [];

  const splicedArray = new Array;

  const maxSearchIndex = Math.min(startIndex + itemsToCopy - 1, array.length - 1);  
  for (let spliceIndex = startIndex; spliceIndex <= maxSearchIndex; spliceIndex += 1) {
    splicedArray.push(array[spliceIndex]);
  }

  let destinationIndex = startIndex;
  for (let sourceIndex = (maxSearchIndex + 1); sourceIndex < array.length; sourceIndex += 1) {
    array[destinationIndex] = array[sourceIndex];
    destinationIndex += 1;
  }

  array.length -= itemsToCopy;

  return splicedArray;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
const testOne = arraysMatch(splice(count, 2, 5), [ 3, 4, 5, 6, 7 ]);
const testTwo = arraysMatch(count, [ 1, 2, 8 ]);
console.log(testOne);
console.log(testTwo);