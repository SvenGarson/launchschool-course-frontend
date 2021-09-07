

### Closures

---



**Intuitive stuff**

- Even when the variables referenced by the function are not in scope when the function is invoked, as can happen when a clos ure is passed around, remember that the function/closure can access variables that were lexically accessible through scope and these variables do not need to be accessible at the point where the closure/function is invoked.

  In other words, it is not important where a closure is executed, but the context the function is defined in is!

- Think of closures as lexical i.e. is based on the source program structure.

- A closure can access everything that is accessible at the point of function/closure definition

- Closures are **not snapshots** of a portion of the program state but rather, the closure has access to variables through pointers to variables, which means that a closure has the ability to:

  1. re-assign the variable to another value, primitive or object
  2. access the memory contents of that variable by dereferencing that pointer twice

- A program uses closures in many ways, but we think of it in other terms while closures are at work:

  - **Invoking a method and pass it a callback function as argument**

    ```javascript
    let oddNumbers = [];
    array.forEach(number => {  // function definition creates a closure
      if (number % 2 === 1) {
        oddNumbers.push(number);
      }
    });
    ```

    The argument is a function as a result of a function expression through arrow syntax.
    When this, or any other function, is defined for that matter, a closure is created, which keeps track of the variables in the function 'body' and the variables that are accessible to the function at the point of it's definition, in this case the variables `oddNumbers` and `array`.



**How does scope really work in JS under the hood when code is executing?**

When a function executes and needs to resolve some variable JS:

1. first checks if that identifier is accessible through the local scope

   **and if it is not**

2. secondly checks the closure, the function 'context' to check whether the function has access to it


Determining the closures/contexts of what is available where in the program is done during the creation phase, of which the closures are the result of. (**Is this an accurate model?**)



#### Some use-cases for closures

- **Private containers of state and functionality**

  The `counter` variable is private to the `makeCounter` function and cannot be accessed elsewhere.

  ```javascript
  function makeCounter() {
    let counter = 0;
  
    return function() {
      counter += 1;
      return counter;
    }
  }
  
  let incrementCounter = makeCounter();
  console.log(incrementCounter()); // 1
  console.log(incrementCounter()); // 2
  ```

- **Partial Function Application**

  A function is said to use `partial function application` when a function is invoked with one argument and returns a function, which when invoked takes the rest of the arguments including the initial function through the context.

  This technique is useful when we need to call a function many times with the same, or partially same arguments.

  ```javascript
  function add(first, second) {
    return first + second;
  }
  
  function makeAdder(firstNumber) {           // takes one argument  -  others later
    return function(secondNumber) {           // returns a function
      return add(firstNumber, secondNumber);  // gets parameters from two invocations
    };
  }
  
  let addFive = makeAdder(5);
  let addTen = makeAdder(10);
  
  console.log(addFive(3));  // 8
  console.log(addFive(55)); // 60
  console.log(addTen(3));   // 13
  console.log(addTen(55));  // 65
  ```

  In other words, `partial function application`:

  > refers to the creation of a function that can call a second function with fewer arguments than the second function expects. The created function supplies the remaining arguments.

  A practical example here is [here](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745), check when I need this.


  **In order for a function to use partial function application by definition**:

  - A reduction in the numbers of arguments must take place place from the outer functions, to the function used in the returned function.

    - The following example **does not** use partial function application because the `console.log` function takes a single argument and so does the anonymous function returned by the `makeLogger` function.

      In other words, there is not reduction in arguments.

      ```javascript
      function makeLogger(identifier) {
        return function(msg) {                  // single argument
          console.log(identifier + ' ' + msg);  // also single argument
        };
      }
      ```

    - The following example **does indeed** use partial function application because the `console.log` invokation now takes two arguments and the anonymous function returned by `makeLogger` requires only one.


      In other words, there is a reduction in arguments.
    
      ```javascript
      function makeLogger(identifier) {
        return function(msg) {           // only one argument needed  -  reduced!
          console.log(identifier, msg);  // two arguments needed
        };
      }
      ```

- **Other use cases for closures**

  - Currying  -  A special form of partial function application
  - Emulating private methods
  - Creating functions that can be executed only once
  - Memoization
  - Iterators and Generators
  - The module pattern i.e. putting code and data into modules
  - Asynchronous operations


