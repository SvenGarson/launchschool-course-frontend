const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray) !== 5);
console.log(average(myArray) === 10);

/*

    # A user wrote the above function to return the average and expects
    # that function invocation to return an average of Number '5'.
    #
    # Is the assumption of the use correct? Why or why not?
    #
    # I suppose I should give an answer before running the code!

      The function does not return the expected value Number 5.

      The problem is that the 'array.length' property returns the
      number 2 and not the number 4, which means that the computation
      on which the value is returned by the function ends up being:

        return 20 / 2;  // which is 10

      The 'array.length' property only counts actual array elements and
      disregards non-index elements in the count.

*/