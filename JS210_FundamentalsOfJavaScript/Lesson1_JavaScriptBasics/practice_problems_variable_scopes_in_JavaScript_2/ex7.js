let a = 1;

function foo() {
  a = 2;                  // a is re-assigned to 2
  let bar = function() {  // executed on return
    a = 3;                // re-assigns a to 3
    return 4;
  };

  return bar();           // returns 4
}

console.log(foo());       // prints 4
console.log(a);           // prints 3

/*

    # Explain what the program outputs

      line 1: 4
      line 2: 3


    # Explain how the relevant parts of the program work

      Line 1 declares a local variable in the global scope, so
      variable 'a' ends up as global variable, but not on the
      global/window object.

      Line 13 invoked the global 'foo' function which has side
      effects:

          - re-assigns global variable 'a' to 2 on line 4
          - invokes the nested 'var' function as return value
            which re-assigns the global variable 'a' to 3
            and returns 4, which is why the 'foo' functions returns
            4 and this is what is output first.

      Line 14 outputs the value of the global 'a' variable which is
      at that point 3.


    # Comments
    
*/

console.log('\n\nTesting my assumptions');
console.log(global.a === undefined);
console.log(a === 3);