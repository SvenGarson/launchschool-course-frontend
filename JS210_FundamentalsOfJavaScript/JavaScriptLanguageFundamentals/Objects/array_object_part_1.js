const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

/*

    # What does the above code output? Answer before running the code!

      line 1: a
      line 2: undefined
      line 3: 'd'
      line 4: 5
      line 5: { 'a', 'b', 'c', 'f', -1': 'd', 'e': 5}

        I missed the fact that myArray[3] is an element index and that
        console.log outputs a string key as e instead of 'e' but shows
        '-1' for number keys that have been coerced into a string.

*/