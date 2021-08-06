const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
myArray[-58] = 5;

function average(array) {
  let sum = 0;
  const arrayKeys = Object.keys(array);
  
  for (const currentArrayKey of arrayKeys) {
    sum += array[currentArrayKey];
  }

  return sum / arrayKeys.length;
}

console.log(average(myArray) === 5);

/*

    # Further exploration

    Refactor the 'average' function so that the function return the
    expected average for all array elements and non-index properties.

    Let's do a complete overhaul to make sure!

*/