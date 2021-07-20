let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

/*

    What does the code above print to the output?

      line 1: array representation of [1, 2, 10]
      
    Explanation

      When the 'myValue' function is invoked, we pass it the
      global 'a' array as argument, which is not a primitive
      but an object, which again means that the array is passed
      by reference i.e. we can access and change the contents of
      the actual array passed as argument.

      We can then mutate this object through it's methods in the
      function, which we do for the third array element.

      Here the third element is incremented by 7 and this is why
      the last array element is changed from 3 to 10.

*/