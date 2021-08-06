const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // => 678
console.log(myObject.prop2);  // => 456

/*

    # What does the above code output? Why? Answer befor you run the code!

      line 1: 678
      line 2: 456

        Correct!      

*/

const myObj = {};
myObj[myFunc()] = 'hello, ';  // the call is myObj['funcProp'] = 'hello, '

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

/*

    # Further exploration

    # The same question for the latter object and console.log statements.

      line 1: { funcProp: 'hello, ' }
      line 2: { funcProp: 'world!'}

        Correct!
  
*/
