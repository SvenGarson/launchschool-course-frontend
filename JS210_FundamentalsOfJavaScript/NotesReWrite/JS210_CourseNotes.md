

### Closures

---

JavaScript Closures are technically a mix of lexical and runtime features, but for now it is easier to think of them as just lexical features, which means that they obey the structure of the code based on the source code, in other words (as said, for now until further learning) closures are  the result of how the code is structured and not how it is executed at runtime.



#### Answer I should be able to answer about Closures  -  Needs massive re-work!

- What is a closure? *The corrected definition*

- What is in a closure? *All the function declares internally and all it accesses through the scope, if it exists*

- When is a closure created? When a functions/methods are **defined** (Don't say declared here)

- What is the relationship between closures and scope? Their relationship is somewhat circular but we can think of this relationship as:

  - a closure is a function that has access to it's lexical surroundings/context which is based on the scope of available identifiers
  - scope uses closures under the hood which are created during the creation phase because closures provide the creations/definition context of a function i.e. which exact variables are accessible for a given function based on lexical program structure

  **Note**: This needs some work, is this what this question was going for?

- What do we mean when we say that closures are defined lexically?
  *This means that a closure determines the variables accessible to it based on the lexical structure of the program i.e. the source code itself i.e. the execution phase has nothing to do with it.*

- What is partial function application?
  See definition below.



#### Closures

**What is a closure?**

Closures and scope a intimately connected concepts because closures effectively use the scope at a particular point in the program lexically to determine what surrounding variables some closure can access.

The variables that are in scope when a function is executes depends on the closure that is created when a function is defined.

> A closure is the combination of a function and the lexical environment within which that function was defined.

In the above definition, the term `defined` is accurate since a function can be declared and bound to a local variable using function declarations and function expressions of different types. This terms includes both because saying `declared` would exclude function expressions.


**What does a closure contain?**

In other words, when a function is defined and accesses variables not declared or initialized in that function, these variables, if they exist, are then part of the functions closure.

In my words, a closure is a function has access to all function variables as well as all variables the function accesses and has access through scope, if these outer variables exist.


Closures have access to:

- Only variables that exist off course. If a non-existent variable is referenced, the typical errors are thrown.
- Only the variables the closure itself references, if it is not used in the closure, it is not kept track of


**When is a closure created?**

A closure is created when a function or method is defined (again, do not use the term declared here).
That closure then has access to the surrounding context that is defined by scope i.e. to what the function definition has access to lexically.



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



**How exactly does a closure keep track of variables to be able to change them?**

- A pointer to the pointer, because we want to be able to make the pointer point to another piece of data in memory and **not** just change the memory contents
- Make sure to understand how JS handles pointers etc generally



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



### More on coding style  -  Merge this with the rest

---

When working in a professional setting, the relevant bits that are affected by that setting are:

- **Formatting and Aesthetics**: Indentation; spacing; single vs double quotes etc.
- **Best practices**: how to perform coercions, how to define variables with hoisting rules.
  These are generally designed to avoid common pitfalls but are usually very opinion heavy.

LS recommends the [AirBNB JavaScript style guide](https://github.com/airbnb/javascript) for students.

**Note**: Whatever style is chosen, the most important thing is to **be consistent**



**Some styles to be aware of right now**:

- **Spacing**

  - Use only spaces for indentation. If using tabs convert tabs to spaces. Use two spaces per level.

    ``` javascript
    // a · represents a single space
    function foo() {
    ··let bob = 'omp';
    }
    ```

  - Use single space before the opening curly brace

    ```javascript
    function test()·{
      // do stuff
    }
    ```

  - Place single space before opening parenthesis in control statements:

    ```javascript
    if·(someThing)·{
      // do stuff
    }
    ```

  - Do not precede a function parameter list with a space

    ```javascript
    function·meep·(a, b)·{  // not good, no space before argument list!
      // do stuff
    }
    
    function·meep(a, b)·{  // good, no space before argument list
      // do stuff
    }
    ```

  - Distance operators and operands with single space

    ```javascript
    let x=5*u; // bad
    let x = 5 * u;
    ```

  - Do not padd parenthesis with spaces

    ```javascript
    if ( someThing ) { /**/ } // bad
    if (someThing) { /**/ }   // good
    ```

  - No spaces preceeding `,` and `;`

    ```javascript
    someFunc(a ,b) ; // bad
    someFunc(a, b);  // good
    ```

  - No whitespace at the end of lines and no white space in 'empty' lines

    ```javascript
    let x = 5 * 9;·· // bad
    let x = 5 * 9;   // good
    ···              // bad  -  this is supposed to be an empty line
    ```

  - Never nest ternary operators

- **Blocks**

  - Leave a blank line after blocks and before the statements after that block

    ```javascript
    if (goNoGo) {
      // do stuff
    }
    
    moreStuff();
    ```

  - Do not padd blocks with empty lines

    ```javascript
    if (someThing) {
                     // bad - unnecessary padding  
      return 5;
    } else {
      return -1;
                     // bad - unnecessary padding
    }
    
    
    ```

  - single line control flow can go without braces **on the same line**

    ```javascript
    if (someThing) doThis(); // good
    ```

  - always use braces for multi line statements

    ```javascript
    if (someThing) {  // good
      doThis();
    }
    ```

  - function declarations should always use multiple lines and braces (this excludes arrow functions!?

    ```javascript
    function woof() { return false; }  //  bad
    
    function woof() {  // good
      return false;
    }
    ```

  - For if-else if statements put the else (and else if) on the same line as previous closing brace

    ```javascript
    if (truthy) {
      // event 1
    } else {        // on the same line as previous block closing brace
      // event 2
    }
    ```

- **Semicolons**

  - Use semicolon after every statement apart from behind a block **unless that block is a function expression (both function expressions in normal and arrow syntax)**

    ```javascript
    let woof = 'doggy';  // good  -  finalize statements with semicolon
    
    while (true) {
      // do epic stuff
    };                   // bad  -  no semicolon after block
    
    while (true) {
      // do more good stuff
    }                    // good  -  no semicolon ...
    ```


    ```javascript
    // do not finalize function declaration with semicolon
    function meep() {
      // do stuff
    }                   // good  -  this is not a function expression
    
    // DO finalize a function expression with semicolon
    const foo = function () {
     return -1;
    };                  // good  -  this IS a function expression
    
    // DO finalize function expression for arrow style syntax, TOO!
    const melon = () => true;  //  good  -  this is also a function expression
    ```

- **Naming conventions**

  - Use `camelCase` for both variables and function names

    ```javascript
    let fooBar = () => true;
    let heightMap = [1, 2, 3];
    ```

  - Constants **can** be `SCREAMING_SNAKE_CASE` but it is acceptable to use `camelCase`

    ```javascript
    const PI_SQUARED = (3.1415 ** 2);
    const piSquared = (3.1415 ** 2); // acceptable
    ```

  - Imported functionality can use `camelCase` even if it is bound to a constant variable

    ```javascript
    const readlineSync = require('readline-sync'); // acceptable
    ```

- **Strings**

  - Use single quotes for strings
  - Use explicit coercion

- **Numbers**

  - Always use the  `Number` constructor for type casting values into numbers (if `parseInt` is not used)

    ```javascript
    let toNumber = Number('3.1415');
    ```

  - Always specify the `parseInt` `radix` argument to make intentions clear (if `Number()` is not used)

    ```javascript
    let toInt = parseInt('154.58');
    ```

- **Booleans**

  - When converting any value to the boolean equivalent based on the value's truthiness, use one of the following two methods

    ```javascript
    let toBoolean = Boolean(25);  // good
    let alsoToBoolean = !!99;     // best    
    ```

- **Variable Declarations**

  - Always prefer `let` and `const` to `var`

  - Declare variables as close to their use as possible **when not using `var`**

  - When declaring variables using `var`, **do declare at the top of the scope**

  - Use `const` if the 'variable' will never be re-assigned (but it might still be mutated unless the contents are frozen).

    Use `let` or `const` as you see fit, but keep the naming and intentions clear and constants.

- **Functions**

  - Never declare functions in a non-function block. Part of the reason is that the function will be accessible in the 'outer ' scope regardless, and putting a function declaration inside a conditional does not change that.

    If you must declare a function in a non-function block such as a conditional, use a function expression instead and bind the function to a local variable with the expected scope.

    ```javascript
    // bad - Do not declare functions in non-function blocks
    if (someThing) {
      function meep() {  // this function is accessible outside conditional anyway
        // do stuff
      }
    }
    
    // good - clear intention of defining the function if conditional executes
    let maybe;
    if (true) {
      maybe = () => console.log('Yep. This works!'); // can also be multi-line
    }
    ```

  - Never use the identifier `arguments` for a parameter or variable, constant or not inside function scope. If you do, the built-in `arguments` object, that is passed to every function invocation implicitly is 'shadowed'. Instead use an identifier such as `args`.

    ```javascript
    function meep(name, arguments) {
      // 'arguments' parameter now shadows 'arguments' that is passed to every function
    }
    
    function meep(name, args) {
      // this is fine
    }
    ```

  - Passing a callback function to a function invocation can be done a few ways, where if it the complexity oft the function allows, arrow functions are the preferred way to do this.

    ```javascript
    // pass as function expression to a function invocation as callback
    [1, 2, 3].map(function (value) {
      return value * 2;
    });
    
    // do the same thing using an arrow function - better here because the function is // simple to contain everything in a single line
    [1, 2, 3].map(value => value * 2);
    ```
  
- **Method/Function choise**

  - Prefer `String()` over `.toString()` when converting from other types to strings. This is for two reasons:
    1. The `String()` constructor works with all types, including `undefined` and `null`.
       Invoking `toString` on `null` etc results in an error.
    2. `String()` always returns a string whereas `toString()` can be overridden by a custom implementation.
  
- **Looping**

  - Apparently the modern opinion is to **not** use incr/decrement operators for incr/decrementing           numbers, apart from a for loop `for(var index = 0; index <= 5; index++) ...` because they can lead to strange bugs/results, especially if programmers are not aware/mindful of the return value.

    The problem here is not the fact that these operators increment and decrement in various ways, but rather what exact value the operator evaluates to if it is not used with numbers etc.






### Arrays

---

#### Array quirks

- Array cells that exist but are not explicitly assigned a value are marked as 'empty', which is **different** from merely being `undefined`.

  **Note**: When a cell is marked empty, accessing it still return `undefined `!

- Arrays can shrink/expand by providing a value for a larger index than is currently held in the array and by changing the array `length` property. Both behave similarly.

- An array is an `Object` which is why the `typeof([1, 2, 3])` is not useful to detect an array, for this purpose use `Array.isArray(1, 2, 3)` instead.

- Using ar



#### Array methods that are good to know and some things that they are typically used for

- push; pop; shift and unshift
- indexOf; lastIndexOf
- slice; splice; concat; join



#### Arrays and operators

- Using arithmetic operators when an operand is an array is in general not useful and relies on implicit coercion

- Using comparison operators acts on the basis that only the same exact pointer to an array in memory is the same i.e. both operands are arrays and the same exact pointer.

  Mixing arrays and other values/objects when using comparison operators has the same problems as using arithmetic operators, i.e. implicity coercion.

  **Some things to keep in mind here:**

  - `someArray === otherArray` evaluates to true only if both pointers point to the same data
  - `someArray == otherArray` also compares based on the pointer value without coercion
  - `someArray === notAnArray`  when array is strictly compared with a non-array value/object, the array is **coerced into a string before** before anything else happens.

- Interesting operator examples:

  ```javascript
  [5] - 2;              // 3
  [5] - [2];            // 3
  5 - [2];              // 3
  5 - [2, 3];           // NaN -- becomes 5 - '2,3', then 5 - NaN
  [] + [];              // '' -- becomes '' + ''
  [] - [];              // 0 -- becomes '' - '', then 0 - 0
  +[];                  // 0
  -[];                  // -0
  ```

  ```javascript
  [] == '0';               // false -- becomes '' == '0'
  [] == 0;                 // true -- becomes '' == 0, then 0 == 0
  [] == false;             // true -- becomes '' == false, then 0 == 0
  [] == ![];               // true -- same as above
  [null] == '';            // true -- becomes '' == ''
  [undefined] == false;    // true -- becomes '' == ''
  [false] == false;        // false -- becomes 'false' == 0, then NaN == 0
  ```

- Do not use the operators `>`; `>=`; `<` and `<=` with arrays as they return boolean values in completely unexpected ways i.e. **do not use these with array operands**.



#### Arrays as Objects

- If an array cell is assigned a value using a negative index, two things are interesting:
  1. The value is not added to that index but added to the array object as key value pair but is **not** added as a typical array element
  2. The array.length property is not affected by elements added as key-value pairs based on negative indices



### Objects

---

#### Introduction to the basics

While JS is an Object-Oriented language, it uses `Object`s to organize code and data into single packages.

JS does provide built-in objects such as for instance: `String`; `Array`; `Object`; `Math`; `Date`  and many more,  but these built-in objects are not to be confused with the primitive data types such as for instance `String` and `Number` even though their names are the same. 

We can technically not call methods on primitive values, such as for example:

```javascript
// we can call the String.prototype.length method/property on a String literal
// which is just a primitive String or String primitive
'hello'.length // 5
```

The reason this works is that JS **automatically** and **temporarily** coerces the primitive into it's built-in 
object counterpart for the sake of invoking a method, which means:

- **we do not need to instanciate built-in objects just use the methods on values**
- **we do not to make a difference between primitives and Objects for the purpose of invoking methods**



This mechanism is reflected by the `typeof` operator based on how the value has been created:

```javascript
let stringPrimitive = 'doctor';                    // using a string literal
let uppercase = stringPrimitive.toUpperCase();     // DOCTOR
console.log(uppercase === 'DOCTOR');               // temporarily coerced to String object
console.log(typeof(stringPrimitive) === 'string'); // true

let stringObject = new String('who?');             // using a constructor
console.log(typeof(stringObject) === 'object');    // true because String is a built-in 
                                                   // Object
```



#### Ways to create custom objects

There are **three** ways to create objects (but all of these are discussed in detail in the OO course):

1. Custom objects using using the object literal notation

   ```javascript
   const customObject = {
     color: 'green',
     toString: function () { return 'I like green!'; },
   };	
   console.log(customObject.color === 'green');
   console.log(customObject.toString()) // I like green
   ```

2. Using built (and custom classes discussed later) through their constructor:

   ```javascript
   let stringInstance = new String();
   ```

3. Using the `Object.create` method



#### Objects as containers of state and behavior through properties

Objects are containers for **both data/state and functionality/behavior** where:

- The **data/state** consists of key-value pairs that represents the attributes of a particular object. In JS terminology, a particular key-value pair of an object is referred to as a `property`, which includes both the name and value of that property.

  These properties are typically accessed and set using the `dot notation`.

- The **behavior** of an object is defined by the functions an object contains, which in the context of being 'contained' in a object are referred to as `method`.

  This behavior is used by accessing the method as any other property and invoke the method by appending parentheses.



**Example of object property terminology:**

```javascript
const someObject = {
 pseudo: 'Uncle Bob'
}
```

The `someObject` object has a single `property` where:

- `pseudo` is `someObject`s property `name`
- `Uncle Bob` is `someObject`s `pseudo` property `value`



#### Style conventions when specifying objects

When we use `literal object notation` to specify an object **over multiple lines**, end **every property** with a comma, **including the last one**!

This has **two advantages** from not appending a comma to the last property:

- When re-organizing object properties, there is now updating of the comma's because every property has one
- `git diff` interprets a property added with a comma appended as single line change where as it does register two new lines without comma

**Note**: Do not append a comma after the last property when the object is declared on a single line `let coordinates = { x: 25, y: 50 };`



#### ES6  -  Compact Method Notation

ES6 introduced the `compact method syntax` so that instead of specifying a property function like:

```javascript
const someObject = {
 someFunc: function() { /* do stuff */ },
};
```

we can write it like:

```javascript
const someObject = {
  someFunc() { /* do stuff */ }  
};
```

and this is the recommended syntax unless some older ES version must be supported.



#### Do not use arrow methods to define an actual method

Arrow functions can be used as we did up until know i.e. passed as callback argument to a function invocation but arrows functions should never be used to define an actual method as arrow functions have the following  subtle difference in behavior as opposed to 'normally declared functions' which usually make arrow functions unsuitable for function/method declaration.

This important distinction is ??? !!!



#### Specifying Object properties

Object properties can be accessed using `dot notation` and `bracket notation` but **bracket notation must be used when the name is an an invalid identifier** such as a string that contains a space `white bear`.

**Note**: By convention, use dot notation whenever possible!



**The common operations on an object**

- **add/insert** property value pairs using the dot- or bracket notation. When the property name is already present in the object, the value is overridden with the new one.

  Property names can be any valid string and property values can be any valid expression.

- **remove/delete** property value pairs using the `delete` keyword on the object property.



#### Arrays are Objects

JS uses objects to implement arrays. For that reason we can access a property like `Array.prototype.length`, it is just another object property that is maintained by JS to track the contents of the 'array' i.e. object.

```javascript
let array = ['hello', 'world'];
let object = {0: 'hello', 1: 'world'};

// arrays and objects are both objects
console.log(typeof(array) === typeof(object));

// since both are object, in this case they return the same 'keys'
console.log(`array keys: ${Object.keys(array)} match object keys: ${Object.keys(object)}`)

// same access using bracket notation
console.log(array[1] === object[1]);
```

**Note**: Arrays and objects do not behave exactly the same, there are some nuanced differences.





#### The Array `length` property


**Array facts from the [official documentation](https://262.ecma-international.org/5.1/#sec-15.4)**

- The array `length` property is always a non-negative integer less than 2^32
- The array `length` is always one larger than the largest array index
- The array `length` property value can be set manually


**Array behavior for array 'elements' and key-value pairs**

- A property name, i.e. the value between brackets is considered an `array element index` when it is non-zero. These elements are referred to as `array elements`. 

- Other properties add key-value pairs to the array that are **not** considered `array elements` but key-value pairs of the underlying hash.

- In many contexts, only `array elements` are considered and key-value pairs are **left out or interpreted differently**, for example:

  - `Array.prototype.indexOf` searches only through `array elements` and **not** object key-value pairs

  - logging the content of an 'array' logs `array element` using only their value in order and key-value pairs are output using the key and value

  - `Array.prototype.length` does not include the number of `non index properties` i.e:

    ```javascript
    const array = [1, 2, 3]; // adds 3 array elements
    array[-1] = 'John';      // add non-index property
    array['cool'] = 'aid';   // add another non-index property
    console.log(array.length === 3); // only array elements are counted
    console.log(Object.keys(array).length === 5); // Object.keys considers both array elements and non-index properties
    ```

  - Iterating through an array using `forEach` does not pass `empty elements` and `non-index properties` to the callback  i.e. ignores them, but using a `for / of` loop does consider them.

- Properties names of `array elements` are referred to as `array index property` and properties of key-value pairs can be referred to as `non-index property`

- When an array `length` is set to a lower value, the array is shrunk, loses data right away and the `length` property reflects the new length of the array. 

- empty or uninitialized slots do not count as actual elements but are display to show that there is a gap between actual actual array elements



**Intuitive thinking**

- Instead of thinking 'array index' when working with arrays, think of a 'property name' that is interpreted as either an array element index or property name in case of key-value pairs

- The number of array elements using `array.length` does include empty/un-initialized elements but not non-index properties

- Un-initialized elements act like normal elements with the difference that they are of value `undefined` and logged as `empty` cells

- Built-in method generally ignore `non-index properties` in arrays/objects, which has implication on the following operation for example:

  ```javascript
  let array = ['a', 'bb', 'ccc'];
  array.name = 'Jack';
  let counts = array.map(string => string.length);  // array.map ignores non-index properties such as array.name
  console.log(counts); // 1, 2, 3
  ```

- This ambiguity between `index properties` and `non-index properties` complicate the notion of an `empty array`. What is an empty array?

  This depends on what we mean with empty array, example:

  ```javascript
  let someArray = []
  someArray[-5] = 'Jack'
  
  // is the array empty? That depends on the context
  console.log(someArray.length === 0)              // yes that array is empty in terms of the array elements
  console.log(Object.keys(someArray).length !== 0) // no the array is not empty in terms of the non-element properties
  ```

  



#### Using Object operations through arrays

Since arrays are really objects, every operation that works on an object also works on arrays. **Doing this is generally a bad idea though. Use more idiomatic, array based ways to execute the same operations to show the intent!**

Notable examples of these operations are `delete` and `in`, which can be used on objects but **should not be used on arrays**.

- use `splice` on arrays to delete entries instead of `delete`
- use array properties directly instead of using `in`



#### Arithmetic operators and arrays and objects

Using arithmetic operators with arrays and objects are  **generally not useful** but here are some rules nonetheless when using arithmetic operators:
Here a list of examples using the following rules if you really want to learn these: https://launchschool.com/lessons/79b41804/assignments/5dc08268

- When one operand is an object and the other operand is not, JS coerces the object to the string `[object Object]`
- In certain context, such as when a block literal is used as the first thing on a line, it is interpreted as a block of code instead of an object

Strictly comparing two objects only evaluates to true if both objects are the same exact data in memory, i.e. the same as strict comparison works for arrays.



#### Random Objects  facts

- the value `undefined` has **no** built-in object counterpart, what about `null`? As it seems both `undefined` **and** `null` have no built-in Object counterpart.



#### Sparse Arrays

In the context of an array, `sparse` refers to the situation when an array contains less elements than `array.length` returns in terms of non-initialized elements. Built-in methods typically ignore un-initialized elements and `Object.keys` does too:

```javascript
let array = [1, 2];
array.length += 2;
console.log(array);              // 1, 2, <2 empty items>
console.log(Object.keys(array)); // '0', '1'      Object.keys ignores non-initialized elements

// initializing an empty item to undefined is interpreted and any other value
array[3] = undefined;
console.log(array);             // 1, 2, <1 empty item>, undefined
console.log(Object.keys(array)) // '0', '1', '3'
```


When an un-initialized array element is accessed using random access, JS return `undefined` but that does **not mean that the value of the element is `undefined`** because the value of the non-initialized element **is not set to a value at all**!

When an non-initialized/empty element is changed to `undefined` explicitly, that element is interpreted as any other value:

- it is logged and used by built-in functions/methods
- it is returned as array/object key using `Object.keys`



Again, this adds ambiguity in terms of what an empty array actually is. Adding to the previous notes about `what is an empty array`:

- If the array only contains non-initialized values, the array could be considered 'empty' in terms of the absence of an initialized value based on `Object.keys`
- If the array only contains non-initialized values, the array could be considered 'non-empty' in terms of the `array.length` because non-initialized elements are still counted towards the length of the array

```javascript
let arr = [];
arr.length = 3;

// Is arr empty?
console.log(arr.length);       // 3      No
console.log(Object.keys(arr))  // []     Yes
```





#### Mutability of values and objects

- Primitive values are **immutable** in that **their content cannot be mutated**

  ![](./res/mutable_objects0.png)

  Operations on primitives always return a new value of the same type of the immutable value.

- Objects **are mutable** in terms of **changing their content without changing the object reference itself**
  ![](./res/mutable_objects1_rev.png)

  Operations on objects may mutate the object



**Illustrative example of re-assigning an array element**:
Assigning or re-assigning an array index/element from one value to another value, means to **change what that particular cell is pointing to**.

![](./res/mutable_objects2.png)



### Pure functions and side-effects

---



**When a function does any of the following, the function is considered to 'have side-effects'**:

- **The function call re-assigns non-local variables**

  When variable, that is not local to the function, is re-assigned:

  ```javascript
  let number = 42;
  function incrementNumber() {
    number += 1; // side effect: number is defined in outer scope
  }
  ```

- **The function call mutates a value referenced by a non-local variable**

  When an object, that is passed as argument, is mutated in the function and the mutation persists in state outside of the function.

  ```javascript
  let letters = ['a', 'b', 'c'];
  function removeLast(array) {
    array.pop(); // side effect: alters the array referenced by letters
  }
  
  removeLast(letters);
  ```

- **The function call reads from or writes to any data entity that is non-local to that program**

  This concerns all input and output operations executes during the lifespan of an executed function which includes:

  **Reading and writing to/from**:

  - files on disk
  - networks
  - keyboard
  - command line
  - display
  - speakers
  - system hardware such as: pointing devices; clock; random number generator, system clock, camera etc.

- **The function call raises an exception**

  When a function raises an exception and does not handle that exception itself.

  ```javascript
  function divideBy(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Divide by zero!"); // side effect: raises an exception
    }
  
    return numerator / denominator;
  }

- **The function call invokes another function that has side-effects**

  This includes a very wide range of situations where the function itself only has side effects because the functions it invokes do have side effects.

  **Some illustrative examples are:**

  - `console.log`  -  Writes to the command line
  - `readline.question`  -  Read and writes from/to the command line and probably more under the hood
  - `new Date()`  -  Accesses the system clock
  - `Math.random()`  -  Accesses the system random number generator



**A function is used as intended when**:

- all the required arguments are passed to the function on invocation
- all the arguments passed to the function on invocation are of the expected type
- all preparations and precautions specified by the requirements of that function must be met before the function is invoked



#### Mixing side-effects and return values

A function should, in general, **either** have a side-effect  **or** return a useful value and **not both**.

This is because we tend to forget one or the other. We may disregard the return value for the side-effect and vice-versa, which is a bad thing.

There are exceptions to this off course, when we want to read data from a database, we want to:

1. Access the database to read some data
2. Return the data returned by the database

**Note**: When a function has both side-effects and returns a value, the return value should be a useful one!



#### What are pure functions?

**Pure functions have two principal attributes:**

1. They have **no** side effects
2. They return the **exact same** value given the **exact same input**, **every time**.
   This implies that the function returns a value based **solely** on the arguments.



**These rules assure us that:**

- Invoking a pure function does not affect anything outside the function.

- The inner working of a pure function is not affected by any state external to the function itself.

  This is great for testing because we know that no other part of the program affects how the function operates.



When talking about the purity of functions though, we should focus on the purity of the function `call` and not on the function itself, because
the same function can pure when invoked/called with some arguments and not-pure when invoked/called with another set of arguments.



### Working with function arguments

---

Sometimes it is useful to have access to arguments that are not specified as parameters in terms of the function definition. When an actual argument is passed for which no corresponding parameter is defined, that argument is simply discarded and when a parameter is defined for which no actual argument is passed, the parameter is bound to `undefined`.

There are ways to access passed arguments, given the parameters or not.

There are **two ways to pass and access an arbitrary number of arguments** to/from a function:

- **The traditional approach**

  Every function block/definition has access to an **array-like** local variable name `arguments`, which contains **all the arguments** passed to the function, no matter what the parameter list is.

  The `arguments` local variable **shares only two attributes with arrays**:

  1. `arguments` has a `length` property that return the number of elements it holds

     ```javascript
     function meep() {
      console.log(Array.isArray(arguments) === false);
      return arguments.length; // returns the number of actual arguments passed to the 'meep' invocation
     }
     ```

  2. `arguments` elements can be accessed using the bracket notation just as arrays

     ```javascript
     function peep() {
       for (let index = 0; index < arguments.length; index += 1) {
         const currentArgument = arguments[index];
         console.log(`argument at index '${index}' is of type ${typeof(currentArgument)} and value ${currentArgument}`);
       }
     }
     ```

  **This is where the similarity between `arguments` and Arrays end**!

  There is a way to convert the arguments 'array-like' value to an actual array using the following approach:

  ```javascript
  function argumentsAsArray() {
    // convert the arguments object to an actual array
    const argumentsArray = Array.prototype.slice.call(arguments);
    console.log(Array.isArray(argumentsArray) === true);
    return argumentsArray;
  }
  ```

- **The modern approach  -  `rest parameters`**

  ES6 introduces a new mechanism to access an arbitrary number of argument through an array bound to local variables that we can choose a name for by specifying a so called `rest parameter` in the parameter list.

  **This is the preferred and more readable way to do this**.
  
  ```javascript
  function justDoIt(a, b, ...rest) {
   console.log(a);
   console.log(b);
   console.log(`a parameter is a true array: ${Array.isArray(rest) === true}`)
   console.log(`rest content: ${rest}`);
  }
  ```
  
  **Note**: Do not name the rest parameter `arguments` as that will shadow the `arguments` local variable mentioned above!



### Various bits of information

---

- `\` at the end of a line forces JS to ignore the new line, this is great to chain long strings together.
  But beware the spaces because JS treats each space/tab etc as an actual space/tab in the string

  - The verbose version

    ```javascript
    let longText = 'esfesvsfawesvef ef sev es esfse es\n' +
                   'esfesf ef sef osjefn sief iosnevion';
    ```

  - The less verbose and less flexible version

    ```javascript
    let longText = 'awdd awca cesesfsefs es se\n\
    dawd  awdwdwad wad wa dwa\n\
    dwawd wf ffesfes skf sef';
    ```

- When making a line wrap using a backward slash, the backward slash must be the last character on that line. Even one space after the slash results in a SyntaxError.

- What is a `first-class object`? It has all of the following **three** attributes:
  **We are mostly interested in the fact that first-class functions create first-class local variables so to say**

  1. can be assigned to variables and as elements of data structures (array, objects)
  2. can be passed to a function as argument
  3. can be returned as return value from a function/method

- When 'stringifying' values, depending on what the value is and how it is stringifyed, the result string is different, here some examples:

  - Passing a function value as argument to `console.log`  outputs `[Function: functionName]`
  - Using a function value in string interpolation and concatenation results in the full definition of the function as string

- Apparently the object literal notation interprets the following two key-value pair definitions the same way `let obj = {a: 25, 'a': 35}` and the value for  `a` ends up being `35` because `'a'`' and `a` are interpreted the same way.

- All this time I wondered the following code needs parentheses around the number part to call Number methods on:

  ```javascript
  17.toString();   // does not work
  (17).toString(); // that does work
  ```

  The first line does not work because we attempt to invoke a method on a number primitive, which has no methods associated with it. The second line implicitly coerces the primitive value `17` into a `Number` object which is why we can invoke Number methods on line `2`.

  

#### More questions and answers

---

- Does JS coerce values into strings implicitly when non-string values are used as Object keys?
  
- Be aware of how default sorting is executed in JS. Apparently `Array.prototype.sort` converts values to strings and then sorts the array based on that string?

- LS seems to make a difference between variable shadowing and dynamic typing in the following way:

  - If some variable is declared and initialized to some value and then re-assigned in the same scope,
    LS does not consider this to be variable shadowing but dynamic typing, since any variable can be
    re-assigned to a value of any type at any point in time.

    ```javascript
    var foo = 1;
    
    function foo() {}
    
    // after hoisting
    
    function foo() {}
    var foo = 1;      // 'foo' is simply re-assigned to Number 1
    ```

  - If some variable declared at an outer scope, and then an insider/deeper scope declares a new variable in that nested scope with the same identifier, LS considers this variable shadowing.

    ```javascript
    function bar() {
      let foo = 2;       // this is a new scope, so this 'foo' shadows the global 'foo'
      console.log(foo);  // logs 2
    }
    
    let foo = 1; // this global is not accessible until this line
    bar();
    ```

- What exactly is the `global` object?

- Understand how lexicographical string comparison works

