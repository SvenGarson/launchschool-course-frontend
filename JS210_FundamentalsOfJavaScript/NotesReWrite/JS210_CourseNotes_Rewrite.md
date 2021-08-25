# JS210 Notes Rewrite



## Running comments and thoughts

- Gather up the lists of random nodes per category and determine if they should stay in these random lists or be categorized properly



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



## The JavaScript language and other random JavaScript facts

JavaScript's official name is `ECMAScript` and is commonly abbreviated as `ES`.

JS/ES versions are often abbreviated using either:

- The release year, like for example `ECMAScript 2019` or `ES2019`
- The number of the version like for example `ECMAScript 10` or `ES10`

The version`ES6+` is considered `modern JS` because many improvements have been made starting at that version, but since many code bases still use older JS, also referred to as `traditional ES/JS` that was in use around `2005`, **we should know both for some time to come**.

Most modern browsers support ES6+ features well but older browsers do not, so when the compatibility is questionable:

- Use a [Compatibility Table](http://kangax.github.io/compat-table/es2016plus) to determine if the feature is supported
- Use a transpilation tool like [Babel](https://babeljs.io/) to automatically mutate scripts into code that used only features for a particular environment


**More facts:**

- Dynamically typed language which means that a variable can point to any data type

- When a function is invoked and the same function identifier was used before, the most recent function is invoked.

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

- The JS `%` is **not** the module operator but the remainer

- `NaN` is the only JS value that is not equal to itself in terms of using equality operators. To equality between `NaN` values, one of the following two method can be used:

    - `Number.isNaN(value)`
    - `Object.is(value, NaN)`

- `Infinity` values are considered Numbers



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

All data types that are not one of the traditional or modern JS primitive data types are referred to as `complex`; `compound` or `composite` data types. These can be made up of other objects and values.

Examples of complex data types are the built-in `Array` and `Simple Object`; `Date` and `Function` .



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

Implicit type coercion occurs when the JavaScript engine makes sense of an expression and determines the data type to convert a value to implicitly based on the context of the code in question. Depending on the rules applied, multiple cycles and level of coercions may be triggered before the actual operations are performed.

**Note**: Implicit type coercions in to be avoided in general!



## Operators

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


**Strict equality operator -  Identity Operator  -  No implicit type coercion occurs before comparison**

- `true` only when **both** the **type** and **value** of the operands are the exact same
- `false` otherwise

```javascript
1 === 1               // true
1 === '1'             // false
0 === false           // false
'' === undefined      // false
'' === 0              // false
true === 1            // false
'true' === true       // false
```

**Strict in-equality operator - The same as the strict-equality but opposite result**

- `true` when the type **or** value of the operand is different
- `false` when the operand have the same type and value


**Non-strict equality operator  -  Loose equality operator  -  Implicit type coercion may occur before comparison**

Works the same as the strict-equality operator if, and only if both operand types are the same, otherwise the operands may be implicitly coerced to the same type before their values are compared. Here some cases:

- When one operand is a string and the other a number, the string is coerced into a number

  ```javascript
  '42' == 42            // true
  42 == '42'            // true
  42 == 'a'             // false -- becomes 42 == NaN
  0 == ''               // true -- becomes 0 == 0
  0 == '\n'             // true -- becomes 0 == 0
  ```

- When one operand is a boolean, that boolean operator is coerced into a number 

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

- When both operands are either `null` or `undefined`, always evaluates to `true`

  ```javascript
  null == undefined      // true
  undefined == null      // true
  null == null           // true
  undefined == undefined // true
  ```

- When one of both operands is `null`; `undefined` or `NaN` , always returns `false`

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


**Non-strict in-equality operator  -  Loose in-equality operator  -  The same as non-strict inequality but opposite result**



### Relational operators `<`; `>`; `<=` and `>=`

Specified exclusively for numbers and strings. There are two cases:

- When both operands are strings, both operands are compared `lexicographically`

- Otherwise both operands are coerced into numbers first

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

  

### Logical operators `!`; `&&` and `||`

Logical operators enable us to combine other operators in various ways.

**The not operator `!`  -  Evaluates to the opposite of the boolean value of it's operand**

The following works for both boolean and non-boolean operands.

- `true` if the operand evaluates to `false`
- `false` if the operand evaluates to `true`


**The and operator `&&`**

Think of it in terms of short-circuit logic. When the first operand is falsy, then and operator is done and returns the first operand. But when the first operand is truthy, we want to check the second operand as well, so that one is returned, boolean or any other type of value.

- returns the first/left operand when the first/left operand is `falsy`
- returns the second/right operand otherwise



**The or operator `||`**

Again, think of it in terms of short-circuit logic. When the first operand is truthy, the operator is done and returns the first opeand. But when the first operand is falsy, we want to check the second opeand as well, so the second operand is returned, boolean or any other type of value.

- returns the first/left operand when the first/left operand is `truthy`
- returns the second/right operand otherwise



### Short Circuit Evaluation

Given a logical expression, JavaScript stops evaluating that logical expression as soon as the result is known and does not evaluate subsequent logical/conditional expressions unless the answer is unknown.



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



## Variable scope



**Remember:** Every function definition and block creates a new variable scope in terms of the call stack.



### Conceptual types of scopes

- **Global scope**

  Variables declared outside any function and block have global scope which makes them accessible everywhere in the program.
  This includes declarations using `let` and `const`.

- **Function scope and block scope**
  Function and block scope can both be referred to as `local variable scope` in terms of how the scope works in different parts of the program.
  Both of the following types of conceptual scopes work the same way in terms of relative, i.e. inner and outer scopes, but at different levels because we want to differentiate between function and further, more deeply nested scopes.

  **The differentiation to make is the following:**

  - `Function scope` means that a variable/constant is declared immediately inside a function definition but outside any block inside that function. These variable/constants are accessible in the function as well as any nested/inner function relative to the top level of the function definition, but the specifics depend on which keyword has been used for the declaration, i.e. `let`; `const` or `var` and where the variable/constant was declared.

    ![](./res/scoping_diagram1-20200720.png)

    __*Code example*__

    ```javascript
    let name = 'Julian'; // global scope  -  Accessible to everyone?
    
    function greet() { // function declared in global scope - which makes this a global function
      function say() { // nested function is declared directly in function scope - equivalend to local variable/block scope
        console.log(name); // function invocation in nested function scope
      }
    
      say();  // function scope invocation of the 'say' function
    }
    ```

  - `Block scope`  means that a variable/constant is declared in the confines of a curly-braces delimited block which can be achieved in different ways, for instance:

    - Simple `{}` block that contains the declarations
    - Control flow such as if-statements and switches
    - Looping constructs
    - etc.


    __*Code example*__
    
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



### Common variable scoping rule gotcha

***Given the following code***:

```javascript
if (true) {
  // We assume that the 'some' variable has not previously been defined in any scope i.e.
  // the following is a declaration and not assignment or re-assignment
  some = 'I am a global now';
}

console.log(some); // 'some' is in scope since it is a global
```

**What is expected**: The `some` variable is declared inside the block scope delimited by the conditional and not accessible outside the conditional

**What actually happens**: The `some` variable ends up being declared as a new global variable

**The lesson**: When a block scope variable is desired declare the variable using `let` or `const`

**The mechanism**: When JavaScript sees the assignment on line `4` it searched up the lexical scope up to the global scope and does not find a declaration for a variable with the identifier `some`. The engine then finally declares a new local variable at the global scope with the identifier `some` and initializes it to the string value `I am a global now`.



## Lexical scope

Lexical scope means that the structure of the source code defines a variable's scope, lexical scope has nothing to do with how the program is executed i.e. the 'static' source code so to say, which is why lexical scope is often referred to as `static scope`.

Every time a function or block is declared, a new variable scope is introduced to that scope structure, executed or not, which is why this type of scoping is referred to as `static scoping`. Every time we refer to some variable in a 'local scope', JavaScript walks up that hierarchy of scope structures from the local up to the global scope (possibly) and resolves a variable with the **first** occurrence of that particular identifier/name.

This implies that variable shadowing can occur over this scope hierarchy.

Whenever we references/access or declare a variable, JavaScript walks up the lexical hierarchy of the source code up to the global scope in order to check if a particular identifier is already declared.



#### Here a few ways new variables are added to a local scope

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
  // eek is now accessible as local variable
  ```

- Declaring a class also creates a variable with the class name



## Declared scope VS visibility scope  -  A mental model by Launchschool

### The problem with the term `global scope`

While the scope where identifiers are accessible to the whole program or file are typically referred to as `global scope`, the terms `module scope` and `file scope` would technically be more representative of what is actually happening.

In JavaScript, identifiers cannot have their scope specified as global explicitly as is typical in many other languages, but rather, the global scope is a consequence of where and how specifically an identifier is declared.  The keyword used to declare something  has a great impact on the scope at the declaration level:

- When using the `var` and `function` keywords the identifier has `function scope`
- When using the `let`; `const` and `class` keywords the identifier has `block scope`

**Note**: When used at top-level, both `function scope` and `block scope` coincide with `global scope`!



### Example of the ambiguity

***Given the following code***

```javascript
let foo = 1;      // variable declaration at top-level i.e. global
console.log(foo);
```

When we answer the question `What scope does the variable 'foo' have?`, we can deduce the following from the previous explanation:

- Since `foo` was declared using the `let` keyword, `foo` has `block scope`
- But since the variable is declared at top-level, `foo` ends up having `global scope` merely because of where it is declared

**Note**: The result would be the same if `foo` were declared using the `var` keyword. 



This is the ambiguity in talking about what scope a variable has specifically, to clarify the ambiguity in terms of the example, we could say in other words:

- `foo` was declared in `block scope` but  the declaration location is at the top-level so `foo` ends up having `global scope`


**This is the basis for the mental model, the point is to differentiate between:**

- how and where an identifier has been declared

  **and**

- what the final scope of that identifier is



### The mental model

In order to express the actual scope of an identifier with less ambiguity, determine **both** of the following scopes for a particular case:

#### 1) Declared scope  -  Based on which keyword was used to declare something

The declared scope can be one of the following two options:

- If the keyword for declaration used is `var` or `function`, the declared scope is `function scope`
- If the keyword for declaration used is `let`; `const` or `class`, the declared scope is `block scope`


**Note**: Here we disregard where something is declared i.e. we only consider how specifically something was declared based on the keyword!

***A few examples of declared scope***

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



#### 2) Visibility scope  -  Based on where something is accessible in terms of the scope of an executing program

When talking about the concept of 'scope' in general, this is typically the scope we are interested in when programming because this tells us where exactly identifiers are accessible.

The visibility scope can be one of the following options:

- If the declaration occurs outside any function and/or block, the visibility scope is `global scope`

  **Note**: An exception here seems to be the case where an identifier is inside a block at top-level and declared with `var`. This is hoisted to a global.

- If the declaration occurs inside any function and/or block, the visibility scope is `local scope`.

  Here we can additionally specify whether an identifier is:

  - `local scope -> function scope`  -  the identifier is not global and has function scope

    **or**

  - `local scope -> block scope`  -  the identifier is not global and has not function scope


***A few examples of declared scope***

```javascript
let foo = 1;        // visibility scope is global
var bar = 2;        // visibility scope is global

if (true) {
  let foo = 3;      // visibility scope is local (block)
  var qux = 4;      // visibility scope is global - it is inside a block but 'var' is used which hoists to top of current scope
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





## Flow control

### Truthiness  -  Truthy and Falsy

When an expression in a conditional context does not evaluate to a boolean value, the values are evaluated i.e. coerced based on the following rules:

- **Only the following six values are falsy in a conditional context**

  ```javascript
  if (false)        // false => falsy
  if (null)         // falsy
  if (undefined)    // falsy
  if (0)            // zero  => falsy
  if (NaN)          // falsy
  if ('')           // empty string => falsy
  ```


  **Note**: All types of zero's, i.e. zero, negative and BigInt zero evaluate to falsy in a conditional context!

- **Every other value is truthy in a conditional context  -  i.e. every non-falsy value is truthy**

  ```javascript
  if (true)         // truthy
  if (1)            // truthy
  if ('abc')        // truthy
  if ([])           // truthy
  if ({})           // truthy
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





## Functions

### Types of functions and ways to declare them

- **`Function Declarations`  -  `Function Statements`**

  A function declaration must start with the `function` keyword and defines a variable of type `function` with the same name as a function that has the function as it's value. This 'function variable' obeys the same exact rules as any other local variables in terms of scope etc.

  **Note**: Re-assigning this function variable to some value other than the function, irreversibly shadows the function!

  ```javascript
  function foo() { /* function declaration */ }
  (function bar) { /* function keyword not the first in this line, so not a function declaration! */ })
  ```

- **`Anonymous Function Expressions`**

  An anonymous function expression defines a function without a function name as part of a larger expression, typically to a local variable and does not start with the `function` keyword.

  ```javascript
  const someFunction = function () { ... } // could also use let for the local variable
  someFunction(); // invoke the function just as normal
  ```

   ```javascript
   // function expression assigned to a local variable  
   let meep = function sumsum(a, b) { return a + b; }
   ```

  ```javascript
  // function expression in parentheses that almost looks like a function declaration
  (function woof(food) { // function wrapped in parenthesis
    console.log(`Woofy likes ${food}!`);
  })
  ```

  ```javascript
  // unction expression in higher order function   
  function better() {
    return function evenBetter() { // does not start with keyword 'function'
    console.log('This is so much better!');
    }
  }
  ```

- **`Named Function Expressions`**

  Are declared and behave the same as an `anonymous function expression` with the difference that we associate the function to an identifier. 


  The function name is **not** actually in the scope the function is declared, but it is accessible in the function definition itself through `methodName.name`:

  ```javascript
  let someFunction = function someName() {
   console.log(`I am a named function expression. My name is: ${someName.name}`);
  }
  
  someFunction(); // outputs: I am a named function expression. My name is: someName
  ```

  A useful advantage of named function expressions rather than anonymous ones is that the debugger can use the function name in the stack trace so that an error is, possibly, easier to track down.


- **`Arrow Functions`**

  Arrow functions are sort of a shorthand way to write function expressions. If the arrow function fits onto a single line, the function returns the value  the expression in the function definition evaluates to implicitly without the need of the `return` keyword.

  If the arrow function takes only a single argument, the parameter does not have to be encased in parentheses. An arrow function inherits the `execution context` from the context the function is declared in and so has access to the declaration scope.

  If the function spans multiple code lines, the function does not return the last value implicitly as with one-liners and needs to be encased with curly braces.

  ```javascript
  // multiline arrow function
   let getNumber = (text) => { // multiline needs curly-braces
     let input = prompt(text);
     return Number(input);    // must return desired value explicitly because of multiple lines
   };
  ```



### Function Declaration and Function Expression subtleties

If a declaration starts with the keyword `function`, as the very first words **without any leading characters** it is a function declaration, otherwise it is a function expression (anonymous or names).

Wrapping a function declaration inside parentheses is enough to go from declaration to expression:

```javascript
function () { ... }; // proper function declaration
(function () {} );   // not a declaration but an expression since 'function' not first
```



### Functions facts

- Functions are merely local variables that have a function as the value
- No exceptions/error is raised when a function is invoked with the wrong number of arguments, more or less but when a parameter does not have a correspondent argument on function invocation, that parameter is bound to `undefined`
- Functions can be nested





## **Input** and Output

### Output

While `node.js` has more output methods through it's environment, the method that works both in node.js and the browser is `console.log();`.

Depending on what environment the program runs in, the `console.log();` method pipes the output to the browser console or the command line interface through node.js.

 ### Input

There are typically two contexts in which we want to get input and both have different mechanisms in place to do so.

1. **Input in the context of a program running in `node.js`**

   The JS input API depends on asynchronous programming concepts and higher order functions. These are explored later in the course.
   A workaround to not deal with asynchronous concepts is to use the `readline-sync` library which can be used as follows in a node.js program:

   ```javascript
   let rlSync = require('readline-sync');
   let number1 = rlSync.question('Prompt message here ...');
   ```

2. **Input in the context of a program running in a browser**

   The browser environment is vastly different from the one node.js operates in and communicates with a JavaScript program in a different manner tht required working knowledge of the concepts:

   - DOM - The Document Object Model
   - Asynchronous programming

   Browsers also typically support the `prompt` input method that uses a pop-up in the browser to get text, user input and pipes it to the executing JavaScript program similar to the terminal application through node.js.

   The `prompt` method can be used as follows:

     ```javascript
   // This JavaScript program should be executed in a browser through HTML
   let name = prompt('Your name: '); // browser uses a pop-up to get user input
   console.log(`Hi, ${name}!`);
     ```

   **The `prompt` function returns the following values based on the user input**

   - if the user pushes the `OK` button, `prompt` returns the entered value as a String, which can be empty
   - if the user pushed the `Cancel` button, `prompt` returns `null` whatever the input was



## The Call Stack

The concept of a Call Stack in terms of JavaScript as a programming language coincides with the concepts I learned in `Grokking Algorithms`.
Nevertheless, here is the concept as illustrative sequence in terms of a JavaScript program:

1. When a JavaScript program starts the `main` call frame is pushed onto the call stack.
2. The flow of the program then dictates, through the functions executes, what other stack frames are pushed onto the stack
3. When a function is executed, a stack frame is pushed onto the call stack containing contextual information about that particular function and it's argument data:
   - function name/address
   - arguments
   - space for local variables

4. Only the topmost stack frame is executed and the stack frames below are paused

5. When a function finished execution, the stack frame from that particular function is popped of the call stack and the stack frame below (if any exists) resumes execution where it left of

6. This happens until the `main` stack frame finished execution and the program exits because it has nothing more to execute



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



### Best practices

- Use strict-equality comparison whenever possible to make the intentions clear and not rely on implicit coercion
- Even though strict-equality should be used, only the same type of values should be compared. The implication is that then, the loose-equality operators are totally fine to use since there would be no implicit coercion.



## Documentation

- [Official ECMAScript Documentation](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)



## Questions and answers

- What are higher order functions?