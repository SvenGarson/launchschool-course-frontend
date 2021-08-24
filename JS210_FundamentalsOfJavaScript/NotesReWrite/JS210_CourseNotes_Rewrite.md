# JS210 Notes Rewrite



## Running comments and thoughts

- Clearly differentiate the difference between statement and expression
- 



## Running notes to fit somewhere

- About strings

  - Double and single quotes can be escaped using `\` or the other type used for the
    respective other type of quote

  - Starting and ending the string with backticks (`) enables interpolation in the string using

    ```javascript
    ${someExpression}
    ```

    **Note**: feature is part of `template literals` and works only in a string between backticks!



## Terminology

- In terms of the official documentation:

  - `Constructor.prototype.methodName()` refers to an `instance method` which can be referred to as `prototype methods`
  - `Constructor.methodName()` refers to a `static method`

- Traditional JavaScript means ECMAScript versions up to and excluding ES6

- Modern JavaScript means ECMAScript versions starting at and including ES6

- `Explicit coercion` means using functions to convert between data types

- `Implicit coercion` means the JavaScript engine determines the data type based on the context.

  This mechanism can also be referred to as `silent` coercion.

- `Initializer` refers to the expression a newly declared variable is bound to on creation on the same line.



## The JavaScript language

- Dynamically typed language which means that a variable can point to any data type.



## Data types

JavaScript differentiates between `primitive` and `complex`data types.



### Primitive data types

Traditional JS specifies `5 primitive data types`, which are:

- `String`
- `Number`  -  The only numerical data type. Used for both integer and floating point numbers.
- `Boolean`  -  Can only every hold the value `true` or `false`
- `Undefined`  -  Represents the absence of a value and can be used explicitly through the literal `undefined`
- `Null`  -  Represents the absence of a value similar to `undefined`


Modern JS introduces `2` more primitive data types over the previous `5`: 

- `Symbol` introduced in `ES6`
- `BigInt` introduced in `ES9`



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

