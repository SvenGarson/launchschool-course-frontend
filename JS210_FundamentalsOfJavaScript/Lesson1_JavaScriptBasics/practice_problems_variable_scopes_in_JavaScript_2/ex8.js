var a = 'global';

function checkScope() {      
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);

/*
    After hoisting

    # Global Scope
    var a = 'global';

    function checkScope() {     
      # Function Scope
      var a = 'local';   

      const nested = function() {
        # Another Function Scope
        var a = 'nested';

        let superNested = () => {
          a = 'superNested';       // a is accessible here!
          return a;
        };

        return superNested();
      };

      return nested();
    }

    console.log(checkScope());
    console.log(a);
*/

/*

    # Explain what the program outputs

      line 1: superNested
      line 2: global


    # Explain how the relevant parts of the program work

      The 'checkScope' function is invoked which declares a new
      function scope variable 'a' with value 'local' and returns
      whatever the nested 'nested' function returns, which is what is
      output for code line 18.

      The 'nested' funciton declares another function scope variable
      name 'a' with the value 'nested', again there is nothing to
      hoist in this function. This function return whatever the
      'superNested' function returns.

      The 'superNested' function returns the 'nested' function wide
      'a' variables after re-assigning it to the string 'superNested'
      which finally finishes execution of the 'checkScope' function.

      The program then prints 'superNested' and then the original
      value of the global 'a' variable that was never changed, which
      is still 'global'.
    
*/

// testing my assumptions
console.log('\n\nTesting my assumptions:');
console.log(checkScope() === 'superNested');
console.log(a === 'global');