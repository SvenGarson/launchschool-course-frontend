# JS210 Notes Rewrite



## Running comments and thoughts





## Running notes to fit somewhere

- About strings

  - Double and single quotes can be escaped using `\` or the other type used for the
    respective other type of quote

  - Starting and ending the string with backticks (`) enables interpolation in the string using

    ```javascript
    ${someExpression}
    ```

    **Note**: feature is part of `template literals` and works only in a string between backticks!

- Division by zero is `Infinity` in JS, why?



## Terminology

- In terms of the official documentation:

  - `Constructor.prototype.methodName()` refers to an `instance method` which can be referred to as `prototype methods`
  - `Constructor.methodName()` refers to a `static method`

- Traditional JavaScript means ECMAScript versions up to and excluding ES6

- Modern JavaScript means ECMAScript versions starting at and including ES6

- `Explicit coercion` means using functions to convert between data types

- `Implicit coercion` means the JavaScript engine determines the data type based on the context.

  This mechanism can also be referred to as `silent` or `automatic` coercion.

- `Initializer` refers to the expression a newly declared variable is bound to on creation on the same line.



## The JavaScript language

JavaScript's official name is `ECMAScript` and is commonly abbreviated as `ES`.

JS/ES versions are often abbreviated using either:

- The release year, like for example `ECMAScript 2019` or `ES2019`
- The number of the version like for example `ECMAScript 10` or `ES10`

The version`ES6+` is considered `modern JS` because many improvements have been made starting at that version, but since many code bases still use older JS, also referred to as `traditional ES/JS` that was in use around `2005`, **we should know both for some time to come**.

Most modern browsers support ES6+ features well but older browsers do not, so when the compatibility is questionable:

- Use a [Compatibility Table](http://kangax.github.io/compat-table/es2016plus) to determine if the feature is supported
- Use a transpilation tool like [Babel](https://babeljs.io/) to automatically mutate scripts into code that used only features for a particular environment



### JavaScript facts

- Dynamically typed language which means that a variable can point to any data type



## Data types

JavaScript differentiates between `primitive` and `complex`data types.



### Primitive data types

Traditional JS specifies `5 primitive data types`:

- `String`
- `Number`  -  The only numerical data type. Used for both integer and floating point numbers.
- `Boolean`  -  Can only every hold the value `true` or `false`
- `Undefined`  -  Represents the absence of a value and can be used explicitly through the literal `undefined`
- `Null`  -  Represents the absence of a value similar to `undefined`


Modern JS introduces `2` more primitive data types over the previous `5`: 

- `Symbol` introduced in `ES6`
- `BigInt` introduced in `ES9`


**Primitive values are immutable. No operation can ever mutate the value of a primitive value but always returns a new value.**



### Complex/Compound/Composite data types

All data types that are not one of the traditional or modern JS primitive data types are referred to as `complex`; `compound` or `composite` data types.

Examples of complex data types are the built-in `Array` and `Object`.



#### The `typeof` operator

The `typeof` operator returns a string that represents the data type of the operand. Some quirks to be aware of:

- `typeof(null)` returns a string with the value `object` which is an implementation error in the JavaScript implementation which cannot be fixed without breaking all code written so far. So this behavior will stay as is for the forseeable future.

  The ECMAScript  standard specifies that `null` is a `primitive` and **not** an `object` i.e. `null` is to be treated as a primitive value and **not** an object.

- `typeof` with an array operand returns a string with the value `object` because an array is actually an object under the hood



#### `undefined` VS  `null`

- `undefined` is a primitive value that is used when a variable is declared but not initialized.
  This data type can arise implicitly through non-initialized variables.
- `null` is a primitive value that is used when a variable is declared and initialized with an 'empty' value i.e. the absence of a value.



## Type coercion

### Explicit type coercion

Explicit type coercion occurs when functions are used to convert one data type to another. A non-exhaustive list of explicit type coercions:

- **Converting Strings to Numbers**
  - `Number(string)`  -  Returns a `String` representing the number or `NaN` if the string cannot be converted

  - `parseInt(string, radix (optional))`  -  Global function  -  Returns a `Number` as integer or `NaN` if the string cannot be converted

  - `parseFloat(string)`  -  Global function  -  Returns a `Number` as float or `NaN` if the string cannot be converted

- **Converting Numbers to Strings**
  - `String`
  - `Number.prototype.toString`

- **Converting Booleans to Strings**
  - `String`
  - `Boolean.prototype.toString`

- **Converting any value to Booleans**
  - `Boolean`
  - Using the binary negation operator twice `!!someValue`



### Implicit type coercion

Implicit type coercion occurs when the JavaScript engine makes sense of an expression and determines the data type to convert a value to implicitly based on the context of the code in question.

**Note**: Implicit type coercions in to be avoided in general!



### The plus `+` operator

The `+` operator can be used as unary and binary operator.

**As unary operator - The rules are complex and not necessarily useful**

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


**As binary operator - The rules depend on the type of both operands**

- If one operand is of type String, the respective non-string operand is implicitly coerced into a String and the expressions boils down to string concatenation.

  ```javascript
  '123' + 123     // "123123" -- if a string is present, coerce for string concatenation
  123 + '123'     // "123123"
  null + 'a'      // "nulla" -- null is coerced to string
  '' + true       // "true"
  ```

- When operands are any combination of Numbers; Booleans; null and undefined, all operands are converted to numbers and summed together.

  ```javascript
  1 + true        // 2
  1 + false       // 1
  true + false    // 1
  null + false    // 0
  null + null     // 0
  1 + undefined   // NaN - JS considers 'undefined' to be NaN
  ```

- When any of the operands is an object, i.e. an Array; Object or a function, both operands are coerced to a String and concatenated together.

  ```javascript
  [1] + 2                     // "12"
  [1] + '2'                   // "12"
  [1, 2] + 3                  // "1,23"
  [] + 5                      // "5"
  [] + true                   // "true"
  42 + {}                     // "42[object Object]"
  (function foo() {}) + 42    // "function foo() {}42"
  ```



### Arithmetic operators `-`; `*`; `/` and `%`

Non-number operand are coerced into numbers if possible and then the arithmetic is carried out of both number operands.
In case an operand cannot be coerced into a number, the operator evaluates to `NaN` because the operation cannot possible result in a number.
This implies how other data types such as strings and booleans are implicitly coerced into a number.

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



### Equality operators

There are two types of equality operators that vary in their strictness and how the operands and interpreted.

#### Strict equality





### Figuring out how to structure these notes

- equality operators, both strict and non-strict
- relational operators





## Expressions and statements

### Expressions

Any piece of code that resolves to a value is an expression, this includes the values `undefined` and `null`.

These expressions can be used anywhere a value is expected. Some examples that evaluate to a value are:

- Literals
- Mathematical operations
- Assignment



### Statements

Any piece of code that **does not** evaluate to a value is a statement. Some examples that **do not** evaluate to a value are:

- Variable declaration **with and without** an initializer
- Control flow constructs such as if-statements; while-loops etc.


The following is an example of an invalid statement. The problem is that the initializer of the `e` variable attempts to use a statement as part of an expression, in this case the variable declaration of the `u`  variable:

```javascript
let e = (let u = 15);
```



## Declaration and assignment of variables and constants

In terms of assigning a value to a variable/constant as part of declaration through an initializer, the `=` is referred to as `assignment operator` rather than just the `equal` operator. In that context, initializing a variable is distinct in terminology:

- `Assignment` is a standalone expression that gives a variable a new value **not during declaration**
- An `initializer` is an expression to the right of an `assignment operator` **during variable declaration**



### Declaration and assignment of variables

Variable can be declared with and without initializer on declaration.
When a variable is not explicitly initialized with an initializer it is implicitly initialized to `undefined`.



### Declaration and assignment of constants

Constants are declared using the `const` keyword and must be initialized upon declaration. Constant identifiers are immutable in that:

- their value cannot be mutated
- they cannot be re-assigned to another value





## ECMAScript conventions



### Styling and formatting conventions

#### Control flow

- Spacing and positioning of curly braces around control flow

  ```javascript
  if (this_is_true) { // do not forget the space before the opening curly bracket
    // more code here
  }
  ```

- `if` `for` and `while` statements always use spaces around around the keywords between parentheses

  ```javascript
  if(true) { // bad - spaces missing }
  if (dingDong) { // good - spaces missing }
  ```

#### Functions

- Spacing and positioning of curly braces around function definition/declaration

  ```javascript
  function meep() { // do not forget the space before the opening curly bracket
      // more code here
  }
  ```

#### Expressions

- Spacing between operands and operators

  ```js
  let meep = 5 + 8
  ```


#### Source code

- Always use spaces and not tabs for indentation



### Naming conventions

#### Functions

- Use `camelCase` for non-constructor function identifiers

  ```javascript
  function oneTwoThreePrint() { /* do stuff */ }
  ```

- Use `PascalCase` for constructor function identifiers

  ```javascript
  function DidYouYeet() { // do stuff }
  ```

#### Variables

- Use `camelCase` for all variables

  ```javascript
  let someThing = 5;
  ```

#### Constants

- For constants that do not point to a function and un-changing configuration values use screaming snake case

  ```javascript
  const MILES_PER_HOUR = 100;
  ```

- For constants that point to a function

  ```javascript
  const someFunction = ... // non constructor functions use camelCase 
  const SomeConstructor = ... //  constructor functions use PascalCase
  ```

#### Variables; Constants and functions

- Identifiers should use only alphanumerical characters and
  - the first character should be an alphabetic letter; underscore `_` or dollar sign `$`
  - should not use consecutive underscores
  - should not use an underscore as last character
  - cannot be a reserved word

#### Idiomatics

- Acronyms should use uppercase

  ```javascript
  function tinyURL() {}; // URL is uppercase because it is an acronym
  ```



## Documentation

- [Official ECMAScript Documentation](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)



## Questions and answers

