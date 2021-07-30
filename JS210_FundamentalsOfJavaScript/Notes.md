### JavaScript Versions

---

JavaScript's official name is `ECMAScript` and is commonly abbreviated as `ES`.

JS/ES versions are often abbreviated using either:

- The release year, like for example `ECMAScript 2019` or `ES2019`
- The number of the version like for example `ECMAScript 10` or `ES10`



The version`ES6+` is considered `modern JS` because many improvements have been made starting at that version, but since many code bases still use older JS, also referred to as `traditional ES/JS` that was in use around `2005`, **we should know both for some time to come**.

Most modern browsers support ES6+ features well but older browsers do not, so when the compatibility is questionable:

- Use a [Compatibility Table](http://kangax.github.io/compat-table/es2016plus) to determine if the feature is supported
- Use a transpilation tool like [Babel](https://babeljs.io/) to automatically mutate scripts into code that used only features for a particular environment



### How I am approaching this course

---

**The list of files I intend to use as notes in different contexts:**

- questions and answers per lesson and per notes: Once for the notes and once explicitly as another file for later?
- generality notes to keep track of stuff that does not fit anywhere else and for later reference



**The current plan**:

1. The JS introduction book is done in terms of rough notes
2. Finish the course and make notes, do not do much research here
3. Merge the JS intro and course notes and do the research there
4. Make Flashcards when notes are good



#### Code Style

---

- Make flashcards to get the [naming conventions](https://launchschool.com/lessons/7377ece4/assignments/88ed1c52) into my head



### Data Types

---

#### Primitive Data Types

- `Number`
- `Boolean`
- `String`  -  Can hold any UTF-16 Character
- `null`
- `undefined`
- `symbol` (ES6)
- `BigInt` (ES9)



#### Compound Data Type

- `Object`



### Variables

---

#### Assignment and Initializer

A variable can be declared two ways:

1. `Declare` a variable first and then `assign` a value in a separate statement.

   The default value of an un-initialized variable is `undefined`.

2. `Declare` a variable with an `initializer` on the same line.


While assignment and initialization look look identical, they are distinct in terminology:

- `Assignment` is a standalone expression that gives a variable a new value
- An `initializer` is an expression to the right of an `=` in a `variable declaration`



#### Declaring Variables

- `var` is the traditional way to declare variables
- use only `let` and `const` unless you work in an old a traditional environment



#### Dynamic Typing

JS/EC is a dynamically typed language which means that a variable can point to any data type.



### Expressions and Statements

---

#### Expressions

Any valid code that resolves to a value is an `expression` and can be used anywhere JS expects or allows
a value.

**Examples of expressions  -  Remember, these evaluate to an actual value**

- lonely string `'Humpty Dumpty'`
- arithmetic operation `15 + 28`
- assignment `sum = 95`



#### Statements

Statements **do not** evaluate to a value, but rather 'do things' that define the execution of a program.

**Examples of statements  -  Remember, these do not evaluate to an actual value**

- variable declaration **with** an initializer `let a = 255;`
- variable declaration **with** an initializer that used an expression `let f = (p + 55);`
- variable declaration **without** an initializer `let z;`
- if...else if; while; for; etc.



**Examples of invalid constructs with the reason they are not allowed**

- cannot use a statements as part of an expression `let e = (let u = 15);`



### Type Coercions

---

#### Explicit Primitive Type Coercions

Since primitives are immutable, JS returns a new value of a certain type for coercion and does not actually mutate data. Following are some forms of explicit primitive type coercions:

- **Converting Strings to Numbers**

  - **`Number(string)`**  -  The `Number` constructor without `new`?

    Returns a `String` representing the number or `NaN` if the string cannot be converted

  - **`parseInt(string, radix (optional))`**  -  Global function

    Returns a `Number` as integer or `NaN` if the string cannot be converted

  - **`parseFloat(string)`**  -  Global function

    Returns a `Number` as float or `NaN` if the string cannot be converted

- **Converting Numbers to Strings**

  - **`String`**  -  The `String` constructor without `new`?
  - **`Number.prototype.toString`**

- **Converting Booleans to Strings**

  - **`String`**  -  The `String` constructor without `new`?
  - **`Boolean.prototype.toString`**

- **Converting any value to Booleans**

  - **`Boolean`**  -  The `Boolean` constructor without `new`?
  - **Using the binary negation operator twice**  -  `!!someValue`



#### Implicit Primitive Type Coercions  -  Automatic Type Conversion

When the code does not use a function explicitly to convert data types but JS makes sense of an expression that includes different data types and generates some value based on implicit coercion rules.

**Note**: This type of coercion should generally be avoided. Use explicit coercion whenever possible!


The `plus` operator `+` converts **any** value into a Number using a crazy set of rules:

- **Plus operator with a single operand**

  ```javascript
  +('123')        // 123
  +(true)         // 1
  +(false)        // 0
  +('')           // 0
  +(' ')          // 0
  +('\n')         // 0
  +(null)         // 0
  +(undefined)    // NaN
  +('a')          // NaN
  +('1a')         // NaN
  ```

- **Plus operator with two operands**

  Then the hole things depends on the type of operands ...

  - **When one the operands is a String**
    The respective other operand is also converted to a string which results in string concatenation.

    ```javascript
    '123' + 123     // "123123" -- if a string is present, coerce for string concatenation
    123 + '123'     // "123123"
    null + 'a'      // "nulla" -- null is coerced to string
    '' + true       // "true"
    ```

  - **When operands are a combination of Numbers; Booleans; null or undefined**

    All operands are converted to Numbers and simply added together.

    ```javascript
    1 + true        // 2
    1 + false       // 1
    true + false    // 1
    null + false    // 0
    null + null     // 0
    1 + undefined   // NaN - JS considers 'undefined' to be NaN
    ```

  - **When one of the operands is an object, Arrays; Objects or Functions**

    Then both operands are converted to Strings and concatenated together.

    ```javascript
    [1] + 2                     // "12"
    [1] + '2'                   // "12"
    [1, 2] + 3                  // "1,23"
    [] + 5                      // "5"
    [] + true                   // "true"
    42 + {}                     // "42[object Object]"
    (function foo() {}) + 42    // "function foo() {}42"
    ```

- **The other arithmetic operators: `-` `*` `/` and `%`**
  These operators are defined exclusively for numbers, so non-number operands are converted to numbers.

  **Note**: When a String cannot be converted to a number, the operation evaluates to `NaN`

  ```javascript
  1 - true                // 0
  '123' * 3               // 369 -- the string is coerced to a number
  '8' - '1'               // 7
  -'42'                   // -42
  null - 42               // -42
  false / true            // 0
  true / false            // Infinity
  '5' % 2                 // 1
  'Meep' * 255            // 'Meep' cannot be converted to a Number so becomes NaN
  ```

- **Equality operators**

  **Note**: Some expressions may trigger multiple cycles of coercion and evaluation!

  - `Strict Equality and Inequality Operators`

    **Never perform type coercion** and return `true` only when **both** the **type** and the **value** match.

    ```javascript
    1 === 1               // true
    1 === '1'             // false
    0 === false           // false
    '' === undefined      // false
    '' === 0              // false
    true === 1            // false
    'true' === true       // false
    ```

  - `Non-Strict Equality and Inequality Operators`

    **Note**: Non-strict operators work exactly like the strict variant when operands are the same type!

    When operand types are different, the operands are coerced to the same type implicitly.

    - **When one operand is a String and the other a Number  - String is converted to Number**

      ```javascript
      '42' == 42            // true
      42 == '42'            // true
      42 == 'a'             // false -- becomes 42 == NaN
      0 == ''               // true -- becomes 0 == 0
      0 == '\n'             // true -- becomes 0 == 0
      ```

    - **When one operand is a Boolean  -  That Boolean operand is converted to a Number**

      ```javascript
      42 == true            // false -- becomes 42 == 1
      0 == false            // true -- becomes 0 == 0
      '0' == false          // true -- becomes '0' == 0, then 0 == 0
                            // (two conversions)
      '' == false           // true -- becomes '' == 0, then 0 == 0
                            // (two conversions)
      true == '1'           // true
      true == 'true'        // false -- becomes 1 == 'true', then 1 == NaN
                            // (two conversions)
      ```

    - **When both operands are either `null` or `undefined`  -  Always returns true**

      ```javascript
      null == undefined      // true
      undefined == null      // true
      null == null           // true
      undefined == undefined // true
      ```

    - **When one operand is `null` or `undefined` or `NaN`  -  Always returns false**

      ```javascript
      undefined == false     // false
      null == false          // false
      undefined == ''        // false
      undefined === null     // false -- strict comparison
      ```

      ```javascript
      NaN == 0              // false
      NaN == NaN            // false
      NaN === NaN           // false -- even with the strict operator
      NaN != NaN            // true -- NaN is the only JavaScript value not equal to                       // itself
      ```

  - **Relational Operators `<` `>` `<=` `>=`**

    These operators are defined only for Numbers and Strings.

    - **When both operands are Strings  -  Both operands are compared `Lexicographically`**

    - **Otherwise both operands are converted to Numbers and compared accordingly**

      ```javascript
      11 > '9'              // true -- '9' is coerced to 9
      '11' > 9              // true -- '11' is coerced to 11
      123 > 'a'             // false -- 'a' is coerced to NaN; any comparison with NaN is false
      123 <= 'a'            // also false
      true > null           // true -- becomes 1 > 0
      true > false          // true -- also becomes 1 > 0
      null <= false         // true -- becomes 0 <= 0
      undefined >= 1        // false -- becomes NaN >= 1
      ```



#### Best practices

- **For the Launchschool curriculum  -  Always use strict comparison**
- Use explicity type conversion to make intentions clear and not be surprised by implicit conversions
- On the other hand side, code should in general not compare values of different types unless there is a good reason for it. So when we use operators on operands with the same type, the non-strict operators are perfectly fine to use



### Conditionals

---

JavaScript supports the following **two** types of conditional statements.

**Note**: Since these are statements, they do **not** evaluate to a useful value!



#### Truthy and Falsy

When an expression in a conditional does not evaluate to a boolean value, the following rules apply:

- **Only the following six values are falsy in a conditional context**

  ```javascript
  if (false)        // falsy
  if (null)         // falsy
  if (undefined)    // falsy
  if (0)            // falsy
  if (NaN)          // falsy
  if ('')           // falsy
  ```

- **Every other value is truthy in a conditional context**

  ```javascript
  if (true)         // truthy
  if (1)            // truthy
  if ('abc')        // truthy
  if ([])           // truthy
  if ({})           // truthy
  ```



### Functions

---

- invoke function by appending `()` to the name
  but there are more ways to invoke functions
- function names are just local variables that have a function as value
- functions can be bound to variables just like any other value and invoked just as for the original function name!
- how the language works when the argument passed mismatch the parameter list
  - invoking a function with the wrong number of arguments, more or less, does not raise an error
  - a parameter that is note passed as argument is bound to `undefined`
- functions can be nested and there is not real limit here



#### Types of functions and ways to declare them

- **`Function Declarations`  -  `Function Statements`**

  A function declaration **must start with the `function` keyword** and defines a variable of type `function` with the same name as a function that has the function as it's value.

  This 'function variable' obeys the same exact scoping rules like other local variables and can be re-assigned to have another value.

  Re-assigning this function variable to some value other than the function, irreversibly shadows the function! (Right?)

- **`Anonymous Function Expressions`**

  An anonymous function expression defines a function **without a function name** as part of a larger expression, typically to a local variable:

  ```javascript
  const someFunction = function () { ... } // could also use let for the local variable
  someFunction(); // invoke the function just as normal
  ```

- **`Named Function Expressions`**

  Are declared and behave the same as an `anonymous function expression` with the difference that **we associate a function name to the function**. Following are some quirks:

  - The function name is **not** actually in the scope the function is declared, but it is accessible in the function definition itself through `methodName.name`:

    ```javascript
    let someFunction = function someName() {
     console.log(`I am a named function expression. My name is: ${someName.name}`);
    }
    
    someFunction(); // outputs: I am a named function expression. My name is: someName
    ```

  - A good reason to use named function expressions rather than anonymous ones is that the debugger can use the function name in the stack trace so that an error is, possibly, easier to track down.

- **`Arrow Functions`**

  Arrow functions are sort of a shorthand way to write function expressions.

  **Here a list of quirks in terms of arrow functions. Arrow functions ... :**

  - return implicitly i.e. no need to use the `return` keyword for one-line arrow functions

  - parameter list does not have to be encased when there is only a single parameter

  - inherit the `execution context` from the context the arrow function is declared in

  - are most often used as callback functions when function fits on a single line

  - steps of the notation

    1. The normal function declaration

       ```javascript
       const multiply = function(a, b) {
         return a * b;
       };
       ```

    2. Remove the `function` keyword and add the arrow after the parameter list

       ```javascript
       const multiply = (a, b) => {
         return a * b;
       };
       ```

    3. Put everything on a single line and get and get rid of the braces

       ```javascript
       const multiply = (a, b) => return a * b;
       ```

    4. Get rid of the `return` keywords as an arrow function returns implicitly

       ```javascript
       const multiply = (a, b) => a * b;
       ```

       



#### Function Declaration and Function Expression subtleties

If a declaration starts with the keyword `function`, as the very first words **without any leading characters** it is a function declaration, otherwise it is a function expression (anonymous or names).

Wrapping a function declaration inside parentheses is enough to go from declaration to expression:

```javascript
function () { ... }; // proper function declaration
(function () {} );   // not a declaration but an expression since 'function' not first
```





### Function/Functional Scope and Lexical Scoping

---

Every function or block creates a new variables scope.

#### Different types of scopes

- **Global Scope**

  Variables declared outside any functions or blocks exist in the global scope?

  What about declaring variables in some function/block scope and not prepend `let` or `const`, does that have the same effect is that a different mechanism?

- **Function Scope**  - Also referred to as `Local Variable Scope`  -  Yes the same as `Block Scope` Below!

  Function scope is the scope inside a function block. This scope behaves the same as local variable scope in that it can access the scope that surrounds it i.e. the `outer scope` where as the `outer scope` cannot access that `inner scope`.

  ![](./res/scoping_diagram1-20200720.png)


  **Note**: Apparently functions and variables behave the exact same up to the scope outside all blocks.

  ```javascript
  let name = 'Julian'; // global scope  -  Accessible to everyone?
  
  function greet() { // declared in global scope -  nothing special
    function say() { // function scope  -  behaves as local vaiables would
      console.log(name); // nested function scope  -  again, nothing special
    }
  
    say();  // function scope of 'greet' function
  }
  ```

- **Block Scope**  -  Also referred to as `Local Variable Scope`  -  Yes the same as `Function Scope` above!

  The scope introduced when constructs such as `while` loops are used confined to the opening and closing curly braces.

  ```javascript
  let name = 'Julian'; // global scope  -  Accessible to everyone?
  
  function greet() { // declared in global scope -  nothing special
    function say() { // function scope  -  behaves as local vaiables would
      console.log(name); // nested function scope  -  again, nothing special
    }
      
    while(true) {
     console.log("Hello!"); // block scope
    }
  
    say();  // function scope of 'greet' function
  }
  ```



**Note**: Both the function and block scope can also be referred to as `local scope`!

**Note**: Not every region between curly braces is a `block` technically such as the curly braces around an object as well as a function, but usually we refer to a  block when we mean an executable group of statements between curly braces!



#### Lexical Scoping

Lexical scope means that the structure of the source code defines a variable's scope.
Every time we write a function or a construct that have block scope, a new scope is introduced to that scope structure.

A scope is added for every block/scope, executed or not, which is why this type of scoping is referred to as `static scoping`. Every time we refer to some variable in a 'local scope', JavaScript walks up that hierarchy of scope structures from the local up to the global scope (possibly) and resolves a variable with the **first** occurence of that particular identifier/name.

This implies that variable shadowing can occur over this scope hierarchy.



#### Lexical scoping works identically for referencing as it does for assignment

**What happens is that:**

- When we reference a variable, JS walks up the hierarchy/structure of the code until a variable is found up to the global scope
- When we assign a variable to a new value, JS walk up the code structure the same exact way up to the global scope. But when no variable with the same identifier is found, a new, global variable is created!



#### Various Ways to add Variables to a (local) scope

- By using the `let`,  `const` or `var` keyword

  ```javascript
  let a = 15;
  const MEEPS = 5;
  ```

- By defining parameters for a function

  ```javascript
  function woof(a, b) {
    // a and b are local variables in the 'woof' function scope
  }
  ```

- Declaring a function creates a variable with the same name as the function

  ```javascript
  function eek() { /* do stuff */ }
  // eek is accessible as local variable
  ```

- Declaring a class also creates a variable with the class name



#### Some of the scoping rules overview

- Every function declaration introduces a new `local variable scope`, specifically a new `function scope`
- Every block also introduces a new `local variable scope`, specifically a new `block scope`
- Lexical Scopre uses the structure of the source code to determines a variables' scope which has nothing to do with executing the code. Only the static, written structure of the code matters.
- All variables, outside a function and/or block (code structure relatively speaking) are accessible inside these functions and blocks.



### Hoisting

---

#### Differences between declaring variables with `let` and `var`

- **At top-level**, `var` adds a property to the `global` or `window` object (depending on the execution context) where:

  - inside the `node.js` context, a property is added to the `global` object
  - inside the browser context, a property is added to the `window` object

  whereas `let` does not add that property.

  **The takeaway is that, at the top-level of the program, `let` is 'safer' because it does not add properties to the `global` or `window` objects, in other words, no global variable is created!**

- **Inside a function i.e. inside function scope**, `var` does **not** add a property to the `global`/`window`  object or any other object for that matter!

- `let` is `block scoped` which means that the variable is accessible only in the scope where it is originally declared (including nested/inner scopes) which is defined by curly braces **whereas** `var` is `function scoped` which means that the variable is accessible **within the function it is declared in**.

  ```javascript
  function foo() {
    if (true) {
      var a = 1;  // function scope  - i.e. accessible in the whole 'foo' function
      let b = 2;  // block scope  -  i.e. not accessible outsie the conditional
    }
  
    console.log(a); // 1
    console.log(b); // ReferenceError: a is not defined
  }
  
  foo();
  ```

- `block scope` variables that are declared with the `var` keyword are defined without the code ever being executed as in the following example:

  ```javascript
  function foo() {
    if (false) {
      var a = 1;  // this code is never executed, yet the variable is initialized to
    }             // the value undefined
  
    console.log(a); // undefined
  }
  
  foo();
  ```



#### Declared Scope VS Visibility Scope  -  A Mental Model by Launchschool

##### The Term `Global Scope`

This scope is typically referred to by people as `global scope` but the terms `file scope` and `module scope` would technically be more appropriate. 

In JavaScript, a variable cannot be explicitly declared in global scope as in other languages, but all variable declarations are **either one** of the following:

- `function scope`  -  Through the  `var` and `function` keywords

  At the top level of a program, which means outside any function, function scope refers to the entire file,
  in other words, global scope.

- `block scope`  -  Through the `let`; `const` and `class` keywords


**The following code snippet demonstrated the issue this mental model wants to clarify:**

```javascript
let foo = 1;      // variable declaration at top-level i.e. global
console.log(foo);
```

The model is based on the question `what scope does the variable 'foo' have'`?

- Since `foo` was declared with `let` it should have `block` scope
- But `foo` ends up being `global` scope
- Overall `foo` does have `block` scope but this just happens to coincide with the top-level `global` scope
  **in this case**

So what we could say about the `foo` variable scope

- `foo` has `global` scope but was declared in `block` scope
- `foo` has `block` scope but it happens to coincide with the `global` scope


**This is confusing but a common problem of the language in terms using only terminology for scope**

The model expresses the scope of a variable using **two attributes**:

1. **`Declared Scope`  -  Refers to how the variable was declared**

   Specifies if a variables was declared using `let`; `const`; `class`; `var` or `function` of which:

   - `let`;  `const` and `class` declare a variable with `block` scope
   - `var` and `function` declare a variable with `function` scope

   For this model, even if the variable in question is declared **outside** of any block or function, we
   say that is has either `block` or `function` scope. **Nothing else**.


   **Here a few examples:**

   ```javascript
   let foo = 1;        // declared scope is block scope
   var bar = 2;        // declared scope is function scope
   
   if (true) {
     let foo = 3;      // declared scope is block scope
     var qux = 4;      // declared scope is function scope
   }
   
   function bar() {    // declared scope is function scope
     let foo = 5;      // declared scope is block scope
     var bar = 6;      // declared scope is function scope
   
     if (true) {
       let foo = 7;    // declared scope is block scope
       var qux = 8;    // declared scope is function scope
     }
   }
   ```

2. **`Visibility Scope`  -  Refers to the actual visibility of the variable in the program scope**

   Specifies where a variable is visible in terms of it's accessibility in the executing program.

   This can be one of the following:

   - `global` scope  -  outside any function or block

   - `local` scope  -  inside a function or block (or any other combination not outside functions/blocks)

     **Additionally** for this `local` scope, we can specify whether a particular variable either of:

     - `local - function` scope
     - `local - block` scope

     These additional scopes represent where the variables are visible rather than how they were declared, which is why a variable declared with `let` can end up being `local  -  function` because it is declared at the start of the function.

   **Here a few examples**:

   ```javascript
   let foo = 1;        // visibility scope is global
   var bar = 2;        // visibility scope is global
   
   if (true) {
     let foo = 3;      // visibility scope is local (block)
     var qux = 4;      // visibility scope is global
   }
   
   function bar() {    // visibility scope is global
     let foo = 5;      // visibility scope is local (function)
     var bar = 6;      // visibility scope is local (function)
   
     if (true) {
       let foo = 7;    // visibility scope is local (block)
       var qux = 8;    // visibility scope is local (function)
     }
   }
   ```

   **Note**: By default we typically talk about the `visibility` scope of a particular variable because that is
              what we typically need to know for programming.



#### Node.js wraps code in a function whereas the Node REPL does not

When node.js executes code from a file, that code is wrapped into the following function:

```javascript
(function (exports, require, module, __filename, __dirname) {
  // the executed code is wrapped in this anonymous function expression
});
```

whereas the node REPL does **not** do that. This means that execution of certain code can have unexpected results. One notable example of such an unexpected situation is when using top-level `var` declarations.

Running the following code:

```javascript
var bar = 42;
console.log(global.bar);
bar += 1;
console.log(global.bar);

let foo = 86;
console.log(global.foo);
```

- in the node REPL, **line-by-line**, executes as follows: 

  ```javascript
  var bar = 42;
  console.log(global.bar); // 42
  bar += 1;
  console.log(global.bar); // 43
  
  let foo = 86;
  console.log(global.foo); // undefined
  ```

  This is because the `var` keyword adds properties to the `global` object when used at top-level

- and when executed through node directly, executes as follows:

  ```javascript
  var bar = 42;
  console.log(global.bar); // undefined
  bar += 1;
  console.log(global.bar); // undefined
  
  let foo = 86;
  console.log(global.foo); // undefined
  ```

  Which is actually **wrapped into a function in the node environment** and looks as follows:

  ```javascript
  (function (exports, require, module, __filename, __dirname) {
    var bar = 42;
    console.log(global.bar); // undefined
    bar += 1;
    console.log(global.bar); // undefined
  
    let foo = 86;
    console.log(global.foo); // undefined
  });
  ```

  This has the effect that `var` now **does not add properties to the `global` object** but rather add the `bar` variable in `function scope`!



### What is Hoisting?

---

JavaScript engines do not just execute the code but rather execute operate under two phases.

#### Creation Phase  -  Before the program is executed

Does preliminary work to prepare for the execution phase. One task of this phase is to find all declarations such as variable, function and class declarations and move them 'up' to the top of their respective scope where:

- Function scoped declarations are moved to the top of the function (or global!?)
- Block scoped declarations are moved to the top of the block (or global?!)


**Note**: When functions are hoisted, the function name/identifier is hoisted **along with the function definition**, which means that a hoisted function is
           accessible after the point is has been hoisted to and **not** in some sort of temporal dead zone.



This is the reason why functions can be invoked 'before' they are declared, in terms of the code structure.

**Illustration of this process**

1. The creation phase scans for, amongst other things, function declarations, such as for example:

   ```javascript
   console.log(getName());// invoking the function before it is defined in code structure
   
   function getName() {   // the creation phase scans the program to find this function
     return "Pete";
   }
   ```

2. The creation phase then moves the function to the top of it's scope, **which can be thought of** re-arranging the original code  into the following:

   ```javascript
   function getName() {  // function declaration is now a the top of it's scope
     return "Pete";
   }
   
   console.log(getName());  // the function can be invoked since it is declared before
   ```



#### Execution Phase  -  The execution of the prepared program

It the process where the program executes line-by-line.



### The Temporal Dead Zone

---

Variables declared with `let`, `const` and `var`  are also hoisted but behave differently in terms of how they are hoisted and how they can be accessed:

- Hoisted `var` variables are initialized with the value `undefined`. Since hoisting happens during the creations phase, `var` variables that are declared on program lines that never execute are also hoisted and initialized with the value `undefined` regardless.

  This is why the variable `meep` in the following code is declared, while never executed!

  ```javascript
  console.log(meep === undefined);  // hoisted and initialized to the value 'undefined'
  
  if (false) {
    // this block will never run
    var meep = 'piep pieep'; // hoisted even if never executed
  }
  
  console.log(meep === undefined);  // the same as the first case
  ```


  **In other words  -  Accessing `var` variables before their declaration resolves to `undefined` ** !

- Hoisted `let` variables and `const` constants are **not** initialized to any value and stay **not-defined** as if they did not exist i.e. as if they are not declared and we get a `ReferenceError` for both `let` and `const`.

  ```javascript
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo;
  ```

  ```javascript
  console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
  const qux = 42;
  ```

  **Note**: Do not use the term `undefined` here since it has nothing to do with the `undefined` primitive!

  

  **In other words  -  Accessing `let` and `const` variables/constants before their declaration results in a `ReferenceError`** !



The `Temporal Dead Zone` is the lines of a program or the places in the scope between the entering/top scope and declaration of these variables/constants where they cannot be accessed.

This Temporal Dead Zone ends when the variable/constants in question are declared.



#### Error messages reflect this

JavaScript engines make the difference between variables that are declared and variables that are not declared:

- If the variable `qux` is declared, hoisted and accessed before definition/initialization:

  > // ReferenceError: Cannot access 'qux' before initialization

- If the variable `baz` is never declared:

  > console.log(baz); // ReferenceError: baz is not defined




#### Hoisting for Function Declarations

The lesson is here is to **never nest function declarations in non-function blocks** and **if you do want to** declare a function in a block such as is an if statement, **always use a function expression**!

Hoisting works as expected for the following example, where a function is declared directly in the function scope of another function:

```javascript
function foo() {
  return bar();  // accessible because the function is hoisted to the top of the scope

  function bar() {// hoisting raises this function definition to the top of function scope
    return 42;
  }
}
```


**Other than the above example, never declare a function in a non-function block as follows:**

```javascript
function meep() {
  if (true) {  // conditionals have block scope
    function mayWorkMayNot() {  // function declaration in block scope - big no no
      // what am I doing
    }
  }
    
  mayWorkMayNot();
}
```

The problem is that implementations are inconsistent in this case and results are unexpected, so never do this, use function expressions instead! (Next up)



#### Hoisting for Function Expressions

When function expressions are used to assign functions as value to a variables or constant, these obey the exact same rules as the `var` and `let/const` hoisting rules above, just that the value of these variables/constants is now a function.


```javascript
console.log(func === undefined);

var func = function namedHoistedFunction() {
  console.log('I am a names, hoisted function!');
}

console.log(typeof(func) === 'function');
```



#### Hoisting when both variables and functions are declared

When a scope contains both functions and variables (including constants) then we can assume that:

1. Function declarations are hoisted **first** i.e. **above variable declarations**
2. Variables and constants are hoisted **second** i.e. **below function declarations**



**Some intuitive illustrations**

- For `var` variables, rather than thinking that it exists at two point with different states, think that the `var` variable in question has the value `undefined` until it's value is defined on a particular line.

- With these shifty rules, always consider if the global scope screws with the expected outcome.

- When nor variables at at play i.e. ther is no conflict between things, nothing is hoisted?

  ```javascript
  boo();
  
  function boo() {
    console.log("Boo!");
  }
  ```

  



#### Best Practices to follow to reduce confusion with hoisting based problems

- don't use `var` for declarations

- if you do have to use `var` for declarations, declare them at the top of the scope in the program structure like so:

  ```javascript
  function foo() {
    var a = 1;
    var b = 'hello';
    var c = false;
    // now we know that all the variables are initialized/defined
  }
  ```

- declare variables and constants using `let ` and `var` as close to their use as possible

- just declare functions **before** invoking them, don't rely on these rules



#### Hoisting Questions and Answers

- **How does the following snipper look after hoisting including functions and variables**?

  **Demonstration:** *The variable is not in scope in the function definition*!

  **Before**:

  ```javascript
  bar();              // logs undefined
  var foo = 'hello';
  
  function bar() {
    console.log(foo);
  }
  ```

  **After**:

  ```javascript
  function bar() {
    console.log(foo);
  }
  
  var foo;
  
  bar();          // logs undefined
  foo = 'hello';
  ```

- **Same thing here**
  **Demonstration** : *Variable is a function and then re-assigned to a string primitive (Not used in this example)*

  **Before**:

  ```javascript
  bar();             // logs "world"
  var bar = 'hello';
  
  function bar() {
    console.log('world');
  }
  ```

  **After**: 

  ```javascript
  function bar() {
    console.log('world');
  }
  
  bar();
  bar = 'hello';
  ```

- **And another one**

  **Demonstration**: *Functions are hoisted first, the variables follow. In this case the `bar` variable follows the function definition and thereby shadows the function 'variable' through which the function was available* 

  **Before**:

  ```javascript
  var bar = 'hello';
  bar();             // raises "TypeError: bar is not a function"
  
  function bar() {
    console.log('world');
  }
  ```

  **After**:

  ```javascript
  function bar() {
    console.log('world');
  }
  
  bar = 'hello';
  bar();
  ```

  

#### Hoisting is not real  -  It is one way to explain how JS works

The behavior we try to explain using the `hoisting` model is merely a consequence of the `creation` and `execution` phase.

The `creation` phase prepares code for execution. Each time the `creation` phase encounters a declaration, this identifier is added to the current scope, which depending on the context, is either the local or global scope (either function or block).

At this point JS know which identifiers exist and what exact scope each one belongs to.

During the `execution` phase JS does not care about the declarations, but it does care about the initialization and function/class definitions. At this point JS merely needs to lookup identifiers as they arrive.



#### Before hosting even occurs

An example:

```javascript
let foo = "hello";

function foo() {
  console.log("hello");
}
```

What happens here is that JS raises a `SyntaxError`:

- **during** the `creation` phase
  **but**
- **before** the hoisting affects how the program is interpreted

At this point the JS engine processes the program from top to bottom and considers identifiers and well as it check for duplicates. This means that if and identifiers is declared more than once, it is reported at this point.

**Note**: For the purpose of Launchschool, pretend that hoisting is something that actually happens!



#### Interesting scoping and hoisting exercises and facts

- all from [this](https://launchschool.com/lessons/7cd4abf4/assignments/1d43f233) and the previous page

- so `var` variables are hoisted and assigned `undefined` when hoisted, but when the **same** `var` variable is hoisted successively, then that initialization does not happen apparently which is why the following code works:

  ```javascript
  var a = 'hello';
  
  for (var index = 0; index < 5; index += 1) {
    var a = index;
  }
  
  console.log(a);
  ```

  In short, duplicate hoisted 'var' variables are ignored but the re-assignmend is executed!

  > This is from exercise 5 at https://launchschool.com/lessons/7cd4abf4/assignments/1d43f233





#### Questions I should be able to answer  -  Answer when re-working the notes

- What is hoisting
- How do `var`, `let`, and `const` interact with hoisting? How do they differ?
- How do functions and classes interact with hoisting? How do they differ?
- What part does hoisting play in the way a specific program works?
- How does hoisting really work?



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






### Arrays

---

#### Array quirks

- Array cells that exist but are not explicitly assigned a value are marked as 'empty', which is **different** from merely being `undefined`.

  **Note**: When a cell is marked empty, accessing it still return `undefined `!

- Arrays can shrink/expand by providing a value for a larger index than is currently held in the array and by changing the array `length` property. Both behave similarly.

- An array is an `Object` which is why the `typeof([1, 2, 3])` is not useful to detect an array, for this purpose use `Array.isArray(1, 2, 3)` instead.







### Various bits of information

---

- JS uses Floating Point to represents all numbers

- can add breakpoints programmatically using the `debugger` keyword as statement, and apparently this statement is ignored unless the browser dev tools are open.

  **Do note leave `debugger` statements in production code, but why exactly:**

  - can it slow the program down?
  - does it influence the program any other way in production code?
  - Because it enables users to step through the logic differently? They can open their dev tools and do it anyway!?
  - Maybe it just does not work the same between browsers and environments?

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

- Because a function declaration:

  - 'creates'  the function
  - creates a variable with the function name with the function as the value

  re-assigning the function name i.e. that local variable really, shadows the actual function!
  
- What is a `first-class object`? It has all of the following **three** attributes:

  1. can be assigned to variables and as elements of data structures (array, objects)
  2. can be passed to a function as argument
  3. can be returned as return value from a function/method



#### More questions and answers

---

- What is the difference between JS `strict mode` and whatever the alternative is?
  Does `strict mode` handle scoping of constants and other things differently than in another mode?
  
- How to properly use `BigInt` so that computations take place as expected and no weird conversion errors happen?
  
- JS's numerical accuracy is a things to learn about.
  The integer value JS can precisely represents is `9007199254740991` or rather specified by the constant `Number.MAX_SAFE_INTEGER`.
  If numbers in that range and over are expected, just use the new data type `BigInt` for this purpose, but remember that `BigInt` takes up more memory.
  
- So there is a difference between objects and primitives in that primitives are coerced to objects when needed?
  So there is a difference in the value of a variable based on how it has been initialized, i.e. through a literal or a constructor? and when object level functionality is needed , the value is converted/coerced to the object implicitly!?
  
- Understand how the local variable (or constant? or global?) `argument` works, what it contains and how it can be used when given to every function invocation.
  
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
  
    
  
- The following piece of code runs forever invoking functions and ends in a stackoverflow error because the invocation of the `foo` function as part of the expression passed to the `console.log` on line `8` does not call the previous definition of the previously hoisted `foo` function but rather the function invokes itself recursively with no way to stop recursion.
  
  ```javascript
  console.log(foo());
  
  function foo() {
    console.log('Waiting for bar!');
  }
  
  function foo() {
    console.log(foo);
    function bar() {
      console.log('bar again');
    }
  
    bar();
  
    function bar() {
      console.log('bar again and again');
    }
  }
  ```
  
  
  
- A rule about hoisting. When a scope contains declaration for multiple functions with the **same name**, these functions are apparently hoisted in the order from top to bottom, and in the end, the last i.e. the declaration at the bottom is the one invoked **where ever** that function is invoked.
  
  ```javascript
  function some() { console.log('first'); };
  some(); // third
  function some() { console.log('second'); };
  some(); // third
  function some() { console.log('third'); };
  some(); // third
  
  // because after hoisting
  function some() { console.log('first'); };
  function some() { console.log('second'); };
  function some() { console.log('third'); }; // this is the last declaration
  ```
  
  
  
- What is the namespace of different types of values/things?
  The course says that `let`/`const`  declarations cannot have a name identical to a function:

  ```javascript
  let foo = 3;
  function foo() {}; // SyntaxError: Identifier 'foo' has already been declared
  ```

  ```javascript
  function foo() {};
  let foo = 3;  // SyntaxError: Identifier 'foo' has already been declared
  ```

  What else should I know?

- Why is the following code **not exactly the same** as just defining the variable in the global scope?
  
  ```javascript
  function someFunction() {
    myVar = 'This is global';  // global.myVar is added but it is not exactly the same
  }                            // as declaring the variable directly in global scope!
  ```

  This should be answered somewhere in the JS210 course lesson 3 or later!?
  
- Apparently JS does add properties on the `global` or `window` object when a variable is declared like so:
  
  ```javascript
  function someFunction() {
    myVar = 'This is global';  // global.myVar is added
  }
  ```

  I though this only happens when the variable is declared at top level using `var`?
  Research and understand when these properties are actually added and when not.
  
- Understand when an identifier is 'taken'.
  Is the rule that:

  > ... can't have two declarations with the same name if one of those names is declared by `let`

  What about functions and classes with the same names?
  I think it does as explaines in the course since both of the following examples raise an error for the same reason, that the identifier is already in use but for different reasons:

  - ```javascript
    let foo = "hello";
    
    function foo() {
      console.log("hello");
    }
    ```

  - ```javascript
    function foo() {
      console.log("hello");
    }
    
    let foo = "hello";
    ```

- What exactly is the `global` object?

- Make a distinction between when local variables are created and when not.

  - When variables are declared without `let ` or `const`
  - When non-existing variables are re-assigned and JS cannot find it up to and including global scope

- What is the purpose of the `global` and `window` objects and how are they similar and/or different in the node/browser context? Are they the exact same thing but depend on the environment?

- What bits of the language make something a statement? Like the `let ` keyword for example?

- So the global scope is just most outer scope of all? And not some special thing?

- Does type coercion from number to String `let someNumberAsString = String(12.99);` use some function, or operator, or is it just the constructor of the `String` type?

  According to [this](https://stackoverflow.com/questions/50082312/difference-between-string-and-new-string-in-javascript) post, using `new String` vs `String` are completely different things, even up to how the primitives compare!

  **I think the real question here is to ask what the difference between invoking a constructor with the `new` keyword and without it is because apparently they return different things!**

- Make note of the fact that JS consider `NaN` to be a Number

- Understand how lexicographical string comparison works

- Can functions, because their names are local variables, made to point elsewhere so that the function is in-accessible? This would suck!

- For the following code snippet:

  ```javascript
  const name = 'Bob';
  const saveName = name;
  ```

  Is it correct that, given the fact that strings are primitive values, declaring initializing the `saveName` variable using another variable identifier allocates **new storage** in memory and actually copies the `name` string rather than pointing to the same string?
  
- The following code raises an error because the `average` identifier has been declared previously for the functions. Since a function name is just a variable, this makes sense. But is there more to this?

  ```javascript
  function average(someNumbers) { // code here ... }
  let average = average([1, 2, 3]); // average identifier already declared
  ```

- Can functions only be declared using the `function` keyword as first word, or are there options such as with constant?

- Does the 'accessing constant data through an non-constant pointer' problem exist in JS?
  In that we declare something as constant but can then assign that constant thing to a non-constant things and change it through that hack?

  I guess not, but what exactly are the mechanics?



### Running list of things to do

- make sure all [exercises](https://launchschool.com/exercises#js210_javascript_language_fundamentals) are finished as they are supposed to

