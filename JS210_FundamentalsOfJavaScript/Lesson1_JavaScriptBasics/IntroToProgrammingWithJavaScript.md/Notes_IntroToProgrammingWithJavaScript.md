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

#### Input

The JS input API is not straightforwards but depends on:

- asynchronous programming concepts
- higher order functions

Which are not explore in this book but certainly in the course. The work-around used here is the `readline-sync library` through node's `npm`.





### Other facts

---

- JS uses overloaded syntax
- `template literal syntax` is a string that allows embedding expressions i.e. strings that allow interpolation. **These strings are enclosed by backticks rather than double/single quotes!**



### Intuitive facts

---

- think in terms of primitive  and complex data types
- if an `Object` refers to a complex data type that is a Hash, the term object should be used in the right context?
- use node or the browser console to execute JavaScript code
- running JS in the browser has a different environment and capabilities than running JS through node.js
- In JS functions and class names are variables



### Questions; Answers and other random things

---

**Note**: Many of these questions will be answered by the course, so just carry them over and go from there.

- get an idea what node's `npm` is and how it works

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