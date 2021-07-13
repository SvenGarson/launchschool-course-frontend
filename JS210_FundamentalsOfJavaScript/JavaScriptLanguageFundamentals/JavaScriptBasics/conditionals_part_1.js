const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

/*
    What does the following code output at lines 7, 11, 15 and 19?

    for line 7 : Hello
    for line 11: 
    for line 15: World
    for line 19: !

    Is it what you expected?

      Yes

    Why or why not?

      N/A
*/