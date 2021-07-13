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

    



#### Various bits of information

---

- JS uses Floating Point to represents all numbers

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

    

#### More questions and answers

---

- What bits of the language make something a statement? Like the `let ` keyword for example?

- Does type coercion from number to String `let someNumberAsString = String(12.99);` use some function, or operator, or is it just the constructor of the `String` type?

  According to [this](https://stackoverflow.com/questions/50082312/difference-between-string-and-new-string-in-javascript) post, using `new String` vs `String` are completely different things, even up to how the primitives compare!

  **I think the real question here is to ask what the difference between invoking a constructor with the `new` keyword and without it is because apparently they return different things!**

- Make note of the fact that JS consider `NaN` to be a Number
