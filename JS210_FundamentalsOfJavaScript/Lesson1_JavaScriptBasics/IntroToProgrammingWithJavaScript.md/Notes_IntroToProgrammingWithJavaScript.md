### Official Documentation

---

Oficial ECMAScript documentation: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/


### Initial Stylistic conventions for JavaScript

---

- Control-flow or functions bodies using curly braces use the following style:

  ```javascript
  if (this_is_true) { // do not forget the space before the opening curly bracket
    // more code here
  }
  ```

- The same thing goes for functions

  ```javascript
  function meep() { // do not forget the space before the opening curly bracket
      // more code here
  }
  ```

- As usual use spaces between operators and operands

  ```js
  let meep = 5 + 8
  ```



### Naming Conventions

---

- Identifiers for variables; constants and functions should use only **alphanumerical** characters and:

  - the first character must be alphabetic
  - do not use consecutive underscores
  - do not use underscore as the last character

- Use camelCase for **all** variables and **non-constructor functions**

  ```javascript
  let theUltimateVariable = 5; // not readable at all woof
  function oneTwoThreePrint() {
      // function does some stuff
  }
  ```

- **Constructor function** identifiers should  use `PascalCase` also referred to
  as `camelCase with a capital C`

  ```javascript
  function DidYouYeet() { // do stuff }
  ```

- Constants

  - For **constants and un-changing** configuration values use **`SCREAMING_SNAKE_CASE`** 
    **Note**: Underscore are supposed to be used exclusively with uppercase constant identifiers and
               not for lowercase variable identifiers etc.

    ```javascript
    const MILES_PER_HOUR = 100;
    ```

  - For constants that **store a function**
    - use `camelCase` when the constant points to a **non-constructor** function
    - use `PascalCase` when the constant points to a **constructor** function
  - All other constants can use any, i.e.: `camelCase`; `PascalCase` or `SCREAMING_SNAKE_CASE`



### Initial MDN JavaScript documentation hints

---

#### Instance VS Static methods

- the format `Constructor.prototype.methodName()` refers to **instance methods**
- the format `Constructor.methodName()` refers to **static methods**



#### Terminology

- `Instance methods` are referred to as `Prototype methods`



### Data types

---

Traditional JavaScript (upto and exluding ES6) has **5 primitive data types** as follows.

- **`String`**

  - Double and single quotes can be escaped using `\` or the other type used for the
    respective other type of quote

  - Starting and ending the string with backticks (`) enables interpolation in the string using

    ```javascript
    ${someExpression}
    ```

    **Note**: feature is part of `template literals` and works only in a string between backticks!

- **`Number`**
  JavaScript uses a single data type for real numbers which includes integers and floating point numbers.

- **`Boolean`**
  Can only have one of two values, either `true` or `false` 

- **`Undefined`**
  Represents the absence of a value. This value can be used explicitly as literal.

- **`Null`**
  Represents the absence of a value similar to `undefined`.



#### The typeof operator and some type oddities

The `typeof` operator returns a string that represents the data type of the operand.

Some oddities to be aware of:

- `typeof(null)` returns a string with the value `object` which is an actual 'mistake' in JavaScript.
  The ECMAScript  standards specifies that `null` is and thus **is to be treated as a primitive value and not an object** .
- `typeof([1, 2, 3])` returns returns a string with the value`object`.
  Se one of the questions for reasons.



#### Undefined VS null

The difference between `undefined` and `null` is that:

- `undefined` can arise implicitly
- `null` must be used explicitly to be used through a literal



#### Object types

Every object type that **is not one of the primitive** data types is referred to as **`object type`**.



#### More primitive data types

JavaScript ES6 introduces **2 more primitive data types** over the previous 5 which are:

- `Symbol`
- `BigInt`



#### Literals

Data type values/objects can be represented by literals which enable us to represents fixed values in source code. In other words, a literal is a notation that instantiates an object of some type, such as the following examples:

```javascript
'Hello, world!'     // String literal
3.141528            // Number literal
true                // Boolean literal
{ a: 1, b: 2 }      // Object literal - Not a primitive data type
[ 1, 2, 3 ]         // Array literal - Derived data type? type of returns 'Object'
undefined           // Undefined literal
```



### Operations

---

#### Addition; Subtraction; Multiplication; Division an others

- If the result of one operand divided into another operand:

  - **is a decimal number** then the **result is also a decimal number**.
    In other words, the results has a decimal/fractional value.
  - **is an integer** then the **result is also an integer**.
    In other words, the result **does not have** a decimal/fractional value.

- The JS `%` operator is referred to as the `remainder operator` **and not the `modulo operator`**.
  **It does not compute the modulo value of the operands**.

- `NAN` stands for **N**ot **A** **N**umber
  This `Number` value **signals illegal or undefined operations of numbers** as principally happens in two cases:

  - Undefined operations in the mathematical sense such as `division by zero`
  - Attempting to convert a non-number value to a number

  **Note**: `NaN` is **the only value in JavaScript that is not equal to itself**!
  
  When comparing against `NaN` use one of the following two methods/functions:
  
    - `Number.isNaN(value)`
    - `Object.is(value, NaN)`
  
- `Infinity`
  Describes a number of infinite magnitude and has a negative counterpart. The mathematical operations on infinity are sometimes puzzling.
  Both `Infinity` and `-Infinity` are considered `Number`s

- **NaN vs Infinity**
  Most of the time the semantic difference does not matter but think of it this way:

  - `Infinity`  describes a number of infinite magnitude i.e. it cannot be expressed by writing it down because there is always another, larger number
  - `NaN` describes the result of a mathematical operation that is neither a valid number (a consequence of an undefined operation) nor an infinite number



### Coercion  -  Converting between data types (underlying objects)

---

#### Explicit Coercion  -  Using functions to convert between data types

- string to number using `Number('123')`
- string to integer using `parseInt('123x45')`
- string to float using `parseFloat('125.777')`
- number to string using `String(20)`

#### Implicit Coercion  -  The engine chooses how data types convert contextually

This happens for instance for the following situation: `'5' + 2` where the integer is **implicitly/silently coerced** into a string before the string are concatenated



### Data Structures

---

The most common complex data types (data structures) are:

- **`Arrays`**
  - can contain 'any' data type
  - literal  -  `arr = [1, 2, 3]`
- **`Objects`**  -  JS equivalent of a Hash data structure containing a set of key/value pairs
  - an object key is a string
  - a value is a value of any type
  - literal  -  `{ me: 'Jacob'}`



### Expressions and return values

---

An expression is any code that JS evaluates to a value, which includes `undefined` and `null`.
An expression can or cannot include operators.



### MDN Statements

---

A JavaScript statement is a group of keywords that cam span one or multiples lines.
Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements

This seems to be a bunch of single (despite the definition) and groups of keywords that make up the language such as looping, scope etc.


The key differences between an expression and statement is:

- Statements often include expressions as part of their syntax
- but a statement itself **is not an expression/not part of an expression** and the value of a statement cannot be capture in a variable



### Declaring and Assigning Variables

---

- the modern preferred way to declare variables is `let identifier = value;` using the `let` keyword

- if a variable is not explicitly initialized with a value then it is implicitly initialized with value `undefined`

  ```javascript
  let some; // the value of some is implicitly initialized to 'undefined'
  ```

- we can override the default value of a variable using an `initializer` `let some = 15; `

- variable assignment evaluates to the expression/value of the right side of the assignment i.e. the value/expression of the right side of the assignment operator

  ```javascript
  let first = 25;
  ```

  while ...

- declarations using an initializer, evaluate to `undefined` whether we provide a value explicitly or not

  ```javascript
  let a = 15; // declaration with an initializer always evalues to 'undefined'
  let b;      // declaration without an initializer always evaluates to 'undefined'
  ```

- for variable initialization the `=` operator is referred to `assignment operator` rather than just the `equal (sign) operator`

- given the results of following example:

  ```javascript
  let a = 15;
  let b = a;
  a = 99;
  console.log(b); // still points to 15
  ```

  shows that (at least at this level) re-assignment merely changes what a particular identifier points to and does not mutate the variable value itself (because no mutating method/function is called?)



### Declaring Constants

---

The `const` keyword lets us defined a **constant identifier**. Constants are **immutable and can not be mutated or re-assigned once the are initialized** until the constant can be discarded (programs exits?).

Convention dictates that constant identifiers are uppercase and words divided by underscores such as `const SOME_FIXED_RATE = 0.057;`.

**Note**: Constants must always be initialized with a value on declaration/initialization.



### Variable Scope

---

Variables and constants declared with the keywords `let` and `const` have **block scope**.
A block is a portion in the program that is contained between a pair or opening and closing curly braces such as:

```javascript
if (expression) { // block starts here
  doEpicShazzam();
} // block ends here
```

These block scope variables and constants are accessible in the scope they are declared in and any scope contained in that initial scope.

```javascript
if (true) {
  let some = 15;
  console.log(some); // variable 'some' in block scope
}

console.log(some); // variable 'some' NOT in block scope
```



#### Exceptions  - Not everything between curly braces is a block, technically!

**While it is convenient** to think of the following two cases of `block`s **they are technically not blocks**:

- braces that surround an objects literal such as `{ a: 65, b: 66 }`
- braces that surround a function body such as `function meep() { // do stuff }` are not blocks but **can be treated as blocks most of the time** which is why other blocks are usually referred to as `non-function blocks` i.e. blocks that exclude function definitions.

**Note**: Variables declared with `let` and constants declared with `const` have the **same exact scope** !



#### Types of Scopes

JavaScript supports **two** **types of variables in terms of the scope**:

1. **Global Variables**  -  Available everywhere in the program
   Any variable **not** declared **inside a function or a block** is a global variable!
   **Note**: This includes variables prefixed with `let` and `const`!

   > Global variables are generally to be avoided

1. **Local Variables**  -  Available only in the confines of a function or block (as well as the nested scope(s))
   Any variable declared **inside a function or a block** is a local variable and their use is limited to only that scope they are declared in or nested scopes it contains.

   Local variables in terms functions (local variables and parameters) come into scope when the function starts execution and are discarded when the function finished execution.



#### Common Variable Gotcha

**The lesson**: Always declare constants and variables using the `let` and `const` keywords
**The Problem**: When a variable is **declared without `let` or `const`**, that variabel/constant has global scope:

```javascript
if (true) {
  some = 'I am a global now';
}

console.log(some); // 'some' is in scope since it is a global
```



### Input / Output

---

#### Output

While `node.js` has more output methods through it's environment, the method that works both in node.js and the browser is `console.log();`.

Depending on what environment the program runs in, the `console.log();` method pipes the output to the browser console or the command line interface through node.js.

#### Input

- **Input through `node.js`**

  The JS input API is not straightforwards but depends on:

  - asynchronous programming concepts
  - higher order functions

  Which are not explore in this book but certainly in the course. The work-around used here is the `readline-sync library` through node's `npm`.

  Using it in Javascript in a node.js environment goes as follows:

  ```javascript
  let rlSync = require('readline-sync');
  let number1 = rlSync.question('Prompt message here ...');
  ```

  

- **Input in a browser**
  The browser environment is vastly different from the one node.js operates in and communicates with a JavaScript program in a different manner, which means we need to understand concepts such as:

  - DOM - The Document Object Model
  - Asynchronous programming


  Browsers also typically support the `prompt` input method that uses a pop-up in the browser to get text, user input and pipes it to the executing JavaScript program similar to the terminal application through node.js.

  The `prompt` method can be used as follows:

  ```javascript
  // This JavaScript program should be executed in a browser through HTML
  let name = prompt('Your name: '); // browser uses a pop-up to get user input
  console.log(`Hi, ${name}!`);
  ```

  

### Functions

---

#### Declaration / Definition

JS functions are declared/defined as follows:

```javascript
function say() {
  // do something
}
```


#### Return Values

All JS functions evaluate to a value:

- In case a function does not specify an explicit return value through the `return` keyword,
  JS returns an implicit value of `undefined`.
- In case a function does however specify an explicit return value through `return`, that is the value returned



#### Nested functions

Nested functions can be specified by specifying a function in the scope of one another function:

```javascript
function funcOut() {
  function funcIn() {
    // the nested function
  }
  
  funcIn(); // in scope
}

funcOut();
funcIn(); // NOT in scope since the nested function is defined in another scope
```


**A nested function such as `funcIn`:**

- is created and destroyed every time the containing function is executed (`funcOut`)
- is `private` in the sense that it cannot be accesses/invoked from the scope outside the 'outside' function (`funcOut`)
- seems to have scope rules similar to variables/constants




#### Terminology

- functions that always return a boolean value, true or false, are referred to as `predicates`
- functions that are called on some receiving object/value are referred to as `methods`



#### Mutating the caller

We can mutate values by invoking mutative method on a particular value/object such as a string.

Some quirks of JavaScript:

- Primitive values are immutable - Their values never change -  Always return new values on operation
  Immutable primitives are: `Number`s; `String`s and `Boolean`s
- Non-Primitive values **may be** mutable through their methods - Not every method mutates the value
  Mutable values are: `Array`s and `Object`s

**Note**: Like in Ruby, to know which method mutates the value of a value use the documentation!



#### Pass-By-Reference or Pass-By-Value

JavaScript uses:

- pass-by-value for primitive values
- pass-by-reference for non-primitive values such as arrays and objects



### Function Composition

---

This is merely the technique of invoking a function/method as argument to another function/method without intermediate variable creation.

```javascript
function sum(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mult(a, b) { return a * b; }

// using function composition rather than intermediate variables
mult(sum(1, 5), sub(10, 8));
```



### Three Ways to Declare Functions in JavaScript

---

The following are different ways to declare functions:

1. **`Function Declaration`**
   The most common way to declare a method using a function definition block:

   ```javascript
   greetPeepz(); // invoking a function before it is even declared
   
   function greetPeepz() {
     console.log('Heeeeey peeps! :)');
   }
   ```


   **Quirks**:

   - Can be invoked in the code before it is declared. Before as in lines before the declaration.

2. **`Function Expression`**
   A function declared and bound to a variable/constant:

   ```javascript
   let functionExpression = function(name, age) {
     console.log(`${name} is exactly ${age} years old!`);
   }
   
   functionExpression('Jane', 28);
   ```


   **First-class functions**  - The thing about them is that first-class functions can treated as any other value

   In fact, all JavaScript functions are:

   - first-class functions
   - are just objects, and thus can be, for instance:
     - passed to a function as arguments
     - returned from a function

   **Quirks:**

   - **Cannot** be invoked before it is declared since it is bound to a particular variable/constant

   - Any function definition that **does not start with the keyword `function`** is a **function expression** and **not a function declaration**!


     **Examples of function expressions in different situations:**
    
     - Function expression bound to a variable:
    
       ```javascript
       let meep = function sumsum(a, b) { return a + b; }
       ```
    
     - Function expression in parentheses that almost looks like a function declaration
    
       ```javascript
       (function woof(food) { // function wrapped in parenthesis
         console.log(`Woofy likes ${food}!`);
       })
       ```
    
     - Function expression in higher order function
    
       ```javascript
       function better() {
         return function evenBetter() { // does not start with keyword 'function'
           console.log('This is so much better!');
         }
       }
       ```

3. **`Arrow Functions`**
   This type of function declaration is similar to `Function Expression` with the differences:

   1. Uses a different syntax
   2. Returns a return value implicitly


   An examples of an `add` function expressed as `Arrow Function` that return the expression implicitly:

   ```javascript
   let add = (a, b) => a + b;
   ```


   Behaviour and requirements of `Arrow Functions`:

   - we can omit the `return` keyword **only if the function body expression evaluates to a single value**. This can be a single expression, or expressions with sub-expressions.

   - if the body does not evaluate to a single value we must:
     **Note**: Here we can still use the `Arrow Function` syntax for the functions name and arguments!

     - explicitly specify a return value just as in normal functions
     - use curly braces around the multi-line function body


     **Example**:
    
     ```javascript
     // just use a function expression instead?
     let getNumber = (text) => {
       let input = prompt(text);
       return Number(input);
     };
     ```


​     

### The Call Stack

---

This is the same as for other programming languages but the idea, again is the following:

- When a JavaScript program starts the `main` call frame is pushed onto the call stack.
- The flow of the program then dictates, through the functions executes, what other stack frames are pushed onto the stack
- When a function is executed, a stack frame is pushed onto the call stack containing contextual information about that particular function and it's argument data:
  - function name/address
  - arguments
  - space for local variables
- Only the topmost stack frame is executed and the stack frames below are paused
- When a function finished execution, the stack frame from that particular function is popped of the call stack and the stack frame below, if any exists, resumes execution where it left of
- This happens until the `main` stack frame finished execution and the program exits because it has nothing more to execute



### Flow Control

---

#### Conditionals

JS allows a single line statement without curly braces after a conditional like so:

```javascript
if (something)
 console.log('something is true!');
```

**But this form should be avoided in general to avoid flow bugs because of missing curly braces**:

```javascript
// the following conditional is incorrect
if (something)
  console.log('Executed if something evaluates to true');
  console.log('This looks like part of it, but is not part of the conditional');

// prefer the following syntax
if (something) {
  console.log('Executed if something evaluates to true');
  console.log('This looks like part of it, but is not part of the conditional');
}
```



#### Comparisons

Comparison operators **always returns one of two boolean values** which is either `true` or `false`.

Here some important ones:

- **`===`  -  `Strict Equality Operator`  -  `Identity Operator`**

  **Evaluation**:

  - `true` when operands have the same **type and value**
  - `false` otherwise

- **`!==`  -  `Strict Inequality Operator`**

  **Evaluation**:
  **Note**: The **opposite** of `===` for the same operands!

  - `true` when operands have **different type and/or value**
  - `false` when operands have the same **type and value**

- **`==`  -  `Non-Strict Equality Operator`  -  `Loose Equality Operator`**

  **May attempt to coerce one or both operands to another operands type before comparison**.

  **Evaluation**:

  - **After the optional coercion of one or both operands **, returns `true`  when the **values are the same**
  - `false` otherwise

  - Weird examples to be aware of:
    - `'' == 0 ` evaluates to `true` because the String is coerced into a number using `Number('')` which evaluates to the number `0`

- **`!=`  -  `Non-Strict Inequality Operator`  -  `Loose Inequality Operator`** 

  **May attempt to coerce one or both operands to another operands type before comparison**.

  **Evaluation**:

  - **After the optional coercion of one or both operands **, returns `false`  when the **values are the same**
  - `true` otherwise

- **`<`  -  `Less Than Operator`**

  **May attempt to coerce one or both operands to another operands type before comparison**.

  **Evaluation**:

  - `true` when the left operator **value** is **less than** the right operator value
  - `false` otherwise

- **`> ` and `<=` and `>=`**

  **Same behaviour as the `<` but checking values in a specific way**!



#### Which comparison operator(s) to use?

LS's advice is to not use the loose types of equality operators such as `==`  and `!=` because the rules are complex and hard to remember, but they are totally fine to use if the programmer takes adequate precautions.

Here a few things to keep in mind:

- Good code should, in general, not compare different types of values/things to each other.
  If the case of operands not being of the same type is avoided, the loose equality operators do not trigger the coercion and hence we just need to reason about the values we want to compare.

  If a program compares different types, the design is probably flawed.

- **Launchschool dictates a style that uses the strict variant only**.



### Logical Operators

Logical operators enable us to **combine operators and conditions**:

- **`!`  -  `Not Operator`**

  **Inverts** the boolean value of it's operand that is situated to **the right of the operator**!

  **Evaluation**:

  - `true` when operand is `false`
  - `false` when operand is `true`

- **`&&`  - `And Operator`**

  **Evaluation**:

  - `true` when **both** operands are `true`
  - `false` when **either** operand is  `false`

- **`||`  -  `Or Operator`**

  **Evaluation**:

  - `true` when **either** operand is `true`
  - `false` when **both** operands are `false`

**Note**: The return value of one or multiple chained logical operators is always the last value evaluated
            Whether the logical operators short-circuit or not!



#### Short Circuit Evaluation

Given a logical expression, JavaScript stops evaluating that logical expression as soon as the result is known and does not evaluate subsequent logical/conditional expressions unless the answer is unknown.

The following examples illustrate this mechanism:

- ```javascript
  if isRed(item) && isSmall(item) { // if item red and small }
  ```

  The logical operator evaluates to `true`  only if both operands evaluate to `true`, this means that when any operand evaluates to `false`, the whole expression cannot be `true`.

  In other words, if `isRed(item) === false` then JS stops evaluating because `&&` can never be `true` and never evaluates `isSmall(item)`!

- ```javascript
  if isGreen(item) || hasWheels(item) { // if item green or has wheels }
  ```

  The logical operator evaluates to `true` if either operand is `true`, this means that when any operand evaluates to `true`, the whole expression cannot be `false`.

  In other words, if `isGreen(item) === true` then JS stops evaluating because `||` must be `true` and never evaluates `hasWheels(item)`!



#### Truthiness

An expression in a conditional does not have to evaluate to a boolean value of `true` or `false` because JS does coerce any non-boolean value into a boolean value in a conditional context.

**Again**: JS can use any value in a condition because it can coerce any value to a boolean value when needed.

Whenever a non-boolean value is used in a conditional and JS coerces that non-boolean value into a boolean, we refer to this process as `evaluate that non-boolean value into a boolean value`.

- **Values that evaluate to `false` in a conditional context**
  **Note**: We refer to these values as `truthy` because, while they are not booleans, they evaluate to `true`!
  - `false`
  - Empty String `''`
  - `undefined`
  - `null`
  - `NaN`
  - Zero in the following variations of zero in JavaScript:
    - `Number` zero value `0`
    - `Number` negative zero value `-0`
    - `BigInt` zero value `0n`
- **All other Expressions evaluate to `false` in a conditional context**
  **Note**: We refer to these values as `falsy` because, while they are not booleans, they evaluate to 



#### Operator Precedence and Associativity

For expressions that use multiple operators and sub-expressions, here are some precedences from
**high (top of the list) to low (downwards)** that are good to know by heart:

- `<=`, `<`, `>`, `>=`  - Comparison operators
- `===`, `!==`, `==`, `!=` - Equality operators
- `&&` Logical AND
- `||` Logical OR

Another mechanic to know about is associativity, which specifies in what order operators along with their operands are evaluated when the precedence between operators and their operands is the same.

**Note**: To make the intention of a program clear, always parenthesize the operators we want evaluated first
           instead of working with rules implicitly!


**The rules for complex expressions that use many parentheses to show intended precedence**:

- JS evaluates expressions in the parentheses in the algebraic order.
  This means that innermost parentheses are evaluates first towards to outer parentheses.
- When there are multiple parentheses at the same 'depth', the parentheses are evaluated from left to right.
- Once all parentheses are evaluates, the whole expression is evaluated.



**Note**: Short-circuiting does not change precedence but may be confusing if the expression is complex!



### Loops and Iteration

---

**A short overview of the types and quirks of loops:**

- **`While Loop`**

  Executes the loop as long as the expression after the `while` keyword evaluates to `true`.

  ```javascript
  while (condition) { // first JS checks is the condition is still truthy
   // runs once, only if the condition is truthy
  }
  ```

- **`Do/While Loop`**

  Executes the loop **at least once** and then works exactly like a `While Loop` after the initial loop execution.

  ```javascript
  do {
    console.log('You see this at least once!');
  } while (condition); // the loop runs again only if the condition is truthy
  ```

- **`For Loop`**

  Executes the loop based on the first line which includes the `initialization`; `condition` and `incrementation`:

  ```javascript
  for(initialization; condition; incrementation) { // looped code ... }
  ```



#### Controlling Loop Flow

JavaScript provides **two** keywords to provide more control over how loops execute:

- **`continue`**  -  Skips the rest of the loop and starts the next cycle as if the loop finished execution
- **`break`**  -  Stops looping altogether and resumes execution the line after the loop definition



#### Iterating Arrays using built-in methods and `anonymous functions`







**Operators**

- **`someVariable++`  -  `Post-Increment Operator`**

  Increments the operand by one and returns the value of the variable **before incrementation**

- **`++someVariable`  -  `Pre-Increment Operator`**
  Also increments the operand by one and returns the new value of the variable **after incrementation**

- **Pre and Post-Decrement operators function the exact same but decrement the value**.



**Note**: Apparently the modern opinion is to **not** use incr/decrement operators for incr/decrementing   
           numbers, apart from a for loop `for(var index = 0; index <= 5; index++) ...` because they can 
           lead to strange bugs/results, especially if programmers are not aware/mindful of the return value.



### Other facts

---

- JS uses overloaded syntax
- `template literal syntax` is a string that allows embedding expressions i.e. strings that allow interpolation. **These strings are enclosed by backticks rather than double/single quotes!**
- function parameters are actually local variables with a scope limited to the function being executed.
  These function local variables, i.e. parameters are initialized through the function argument passed to the function when invoked.



### Intuitive facts

---

- think in terms of primitive  and complex data types
- if an `Object` refers to a complex data type that is a Hash, the term object should be used in the right context?
- use node or the browser console to execute JavaScript code
- running JS in the browser has a different environment and capabilities than running JS through node.js
- In JS functions and class names are variables
- preceeding an identifier with `let` or `const` triggers local scope for that particular identifier



### Questions; Answers and other random things

---

**Note**: Many of these questions will be answered by the course, so just carry them over and go from there.

- are the following operators `a += 2`; `a *= 5` etc really operators in JavaScript?
  
- what do control flow structures such as `if` statements evaluate to if they are bound to a variables such as for instance:
  
  ```javascript
  result = if true
    5
  else
    15
  ```
  
  Is this a thing in JS?
  
- Research and understand the actual difference between an expression and a statement.
  
- what does a JavaScript switch statement use to determine the equality of the argument and the cases?
  Is there any coercion involved? If it is it is certainly based on one of the equality operators!

- Is it necessary to return form a thrown error is that error is thrown in a function such as for example:

  ```javascript
  function evenOrOdd(number) {
    if (!Number.isInteger(number)) {
      console.log('Sorry, the value you passed is not an integer');
      return;
    }
      
    // more code ...
  }
  ```

  

- read up the JS terminology about properties in terms of instance variables  and OO etc.
  Before making any research, I think that `property` is the terminology used for an instance variables accessible through the object that 'owns' that particular variables, or method even?

- read up and understand the most common comparisons between operands and different operators.
  Here some interesting ones to look up:

  - `"42" < "402"` evaluates to `false`
  - `"42" < "420"` evaluates to `true`
  - `"42" < 420` evaluates to `true`

- do some research on the error raising model of JS:

  - what are the ones to be aware of?
  - how to implement custom errors?
  - what is the most language semantic way to implement errors etc
  
- are there global constants? Also get an absolutely detailed understanding of the types of objects and their scope such as (these just come to mind, check what JavaScript actually supports):

  - local variables 
  - local constants
  - global constants
  - public/private
  - what about functions?

- does a nested function have the same scope rules like variables/constants? What else should I know?

- so variables are global when:

  - declared **outside** any function definition or block
  - not prefixed with `let` or `const`

- LS calls a nested function a `private function`, is this a way to explain it or the actual mechanic to make a function private?

- get an idea what node's `npm` is and how it works

- syntax style or necessity: specifiy JS functions with or without trailing semicolon?

- learn how JS types are converted for different operators

- For the following code snippet using constants:

  ```javascript
  const FOO = 'bar';
  {
    const FOO = 'qux';
  }
  
  console.log(FOO);
  ```

  **This code does not throw an error!**
  While I though it would raise an error, without doing research, I think that when constants are in different scopes, the constants identifiers can be 're-used' because it is not accessible in another scope.

  Two important rules to remember here (**confirm this through research!**):

  1. Constants **cannot be re-assigned** **nor can they be re-declared** in the same scope
  2. **Identical constant identifiers can be re-used** as long as they are re-used in **different scopes**

- What are the rules concerning the declaration of variables not prefixed with `let` or `const`?
  (And probably also `var` for that matter) apart from the global thing?

- In case the differentiation between variables, identifiers and constants is somehow not clear check up on the following LS book portion again: https://launchschool.com/books/javascript/read/variables

- Get a better feeling for what statements really are.

- What is the `typeof` operator and how does it work?

- After checking the return value of the `typeof` operator, I found that an `Array` literal does not return the type `Array` but rather `Object`.

  Look up the following stackoverflow post to get pointed into the right direction by a user named `Prinzhorn`: https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array

  I can already say by flying over it that is has to do with the fact that JS principally differentiates between:

  - `primitive data types`
  - `compound data type` / `special objects`
  
  **Note**: The answer here should be container by the h3 content: `The typeof operator and some type oddities`
  
- Unless that is taught in the course before I get back to this question, check the following.
  Order of operations of JS and how operations are performed on different primitive data types, are there promotions/demotions?

  I heard that JS is not that great with numbers?

- Learn about numerical data types and how they are represented in memory that cause mathematical operations like `26.4 - 25` to result in `1.3999999999999986` instead of `1.4`.

- Learn about the difference between a `remainder operation and modulo operation`. This will prove useful since the `%` in JavaScript **does not perform a modulo operation**.
  The the link and the portion from LS that waters it down: https://launchschool.com/books/javascript/read/basics

  ![](res/remainder_vs_modulo.png)