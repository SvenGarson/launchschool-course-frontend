#### Exceptions  - Not everything between curly braces is a block, technically!

**While it is convenient** to think of the following two cases of `block`s **they are technically not blocks**:

- braces that surround an objects literal such as `{ a: 65, b: 66 }`
- braces that surround a function body such as `function meep() { // do stuff }` are not blocks but **can be treated as blocks most of the time** which is why other blocks are usually referred to as `non-function blocks` i.e. blocks that exclude function definitions.

**Note**: Variables declared with `let` and constants declared with `const` have the **same exact scope** !


​    

### More Stuff



#### Exceptions

**Notes to order**:

- JS is a more forgiving language and usually fails silently by returning signals like `undefined`, `null` or even `-1`

- These silent errors are dangerous because they can be ignored, but we typically need to handle these problems

- JS exceptions are **not silent** and holds/exits the program when that exception is not 'caught' and dealt with.

- How to catch an exception:

  ```javascript
  try {
    // code that may throw an exception
  } catch(exception) {
    // do something when an exception occured with access to that specific exception
  } finally {
    // executes whether an exception has been raised or not i.e. every time
  }
  ```

- We can raise errors using the `throw` keyword along with an instance of the following [error types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

  ```javascript
  throw new TypeError('Some error message');
  ```

- Use exceptions only for **exceptional circumstances** and avoid throwing exceptions when a return value does the trick and document it well!



#### `SyntaxError`

The `SyntaxError` is a special type of error that executes **before the program is executes** in case there is problem with the syntax. This error **does not depend on runtime conditions** but the JS engine detects it solely based on the source code.


Here some things to keep in mind about how `SyntaxError` is **typically** generated:

- `SyntaxError`  has nothing to to with runtime conditions such as variables and control-flow
- `SyntaxError`  can be reported for a particular line that is far away from where the issue originates from, typically much later
- `SyntaxError`  are caught before the `execution phase`, so the program is not actually executed in this `preliminary phase`

**Note**: There are situations for which the `execution phase` can throw a `SyntaxError` just as other errors, which means that for 
           some cases, a `SyntaxError` can be caught using `try/catch/finally` such as for example:

          ```javascript
          JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0
          ```



### Other facts

---

- `template literal syntax` is a string that allows embedding expressions i.e. strings that allow interpolation. **These strings are enclosed by backticks rather than double/single quotes!**
- The introduction of `arrow functions` solves a problem referred to as `lost execution context` i.e. `context-loss`



### Questions; Answers and other random things

---

**Note**: Many of these questions will be answered by the course, so just carry them over and go from there.

- One example why knowing when what is coerced in to what is essential to know.
  
  - When `x` is a `String`, the expressions `x = x + 1;` and `x++` are **not equivalent**.
  
  What happens is the following:
  
  - ```javascript
    > let x = "5" // declare a local variable with identifier 'x' to hold the string "5"
    > x = x + 1   // number 1 is coerced into a string and concatenated to the string "5" ==> "51"
    = "51"        // which changes the value of 'x' from "5" to "51"
    ```
  
  - ```javascript
    > let y = "5" // declare a local variables with identifier 'y' to hold the string "5"
    > y++         // string is coerced into a Number and that number is incremented from 5 to 6.
                  // 5 is returned since the post-increment operator returns the number BEFORE incr.
                  // and NOT the number after incrementation
    ```
  
  