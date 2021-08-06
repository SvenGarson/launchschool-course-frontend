/*
    What does the following code print to the output?

      line 1: Not Empty

    Why?

      Because an array evaluates to true in a conditional context
      i.e. an array is a truthy value.
*/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);