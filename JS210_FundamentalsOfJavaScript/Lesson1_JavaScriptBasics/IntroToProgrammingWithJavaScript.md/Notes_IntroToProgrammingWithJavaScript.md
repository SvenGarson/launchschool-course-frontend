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



### Questions; Answers and other random things

---

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