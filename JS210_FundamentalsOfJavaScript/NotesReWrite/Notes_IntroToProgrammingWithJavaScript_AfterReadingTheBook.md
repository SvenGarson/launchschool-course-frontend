#### Exceptions  - Not everything between curly braces is a block, technically!

**While it is convenient** to think of the following two cases of `block`s **they are technically not blocks**:

- braces that surround an objects literal such as `{ a: 65, b: 66 }`
- braces that surround a function body such as `function meep() { // do stuff }` are not blocks but **can be treated as blocks most of the time** which is why other blocks are usually referred to as `non-function blocks` i.e. blocks that exclude function definitions.

**Note**: Variables declared with `let` and constants declared with `const` have the **same exact scope** !


​    

### Objects

---

A JS `Object` is the equivalent of a `Hash` that associates a set of keys with a set of values respectively, which are referred to as the `key/value pairs` of the `Object`.

- An object `key`  **must** be a `String` but note that JS implicitly coerces non-string values into strings before storing the key-value pair!

  **Does JS do the same when accessing a value? Does JS coerce a non-string key to a string?**

  The following will bite you at some point:

  ```javascript
  > let myObj = {}
  > myObj[true] = 'hello'   // implicitly coerces the boolean true to the string 'true'
  > myObj['true'] = 'world' // overrride the value store previously using the boolean
  > myObj[true] // world
  ```

- An object `value` can be any type, including other `object`s


**Ways to declare an object**:

- Using an `Object` `literal`: `let people = {};`
- Using a constructor: `let people = new Object();`


**Here an example of an object initialized with a few key-value pairs:**

```javascript
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};
```


**Things about the syntax**:

- While the `key` is a `String` we typically omit the quotes `'` when the key consists of alphanumeric characters and underscores

- The value can be **set and accessed** two ways:

  1. Using the `dot notation`

     ```javascript
     let person = {};
     person.name = 'Willis'; // add key-value pair using dot notation
     person.name;            // access key's value using dot notation
     ```

  2. Using the `bracket notation`. This notation has to be used if the key is a variable and not a literal.

     ```javascript
     let person = {};
     person['name'] = 'Karen'; // add key-value pair using bracket notation
     person['name'];           // access key's value using bracket notation
     ```

- Deleting a key-value pair through the `delete` **operator**:

  ```javascript
  let person = { name: 'Jane', age: 25 };
  delete person.name; // true
  delete person['age']; // ture
  ```



**Objects and Constants**

An `Object` behaves the same as an `Array` in terms of it being a constant.

A constant `Object` pointer can not be pointed to something else but any values in the object are not constant by default and hence can be changed. To make the key and values, i.e. `properties` adhere to the same rules, the `Object.freeze();` method must be used one the object to 'freeze' the properties.

```javascript
const MyObj = Object.freeze({ foo: "bar", qux: "xyz" });
```

**Note**: The behaviour works 1-level deep again and not for nested properties.



#### Prototypes

In terms of objects where a `child` inherits from a `parent`, the `parent` is referred to as the `prototype`.
When we specify some prototype for some object, we refer to this as follows:

> the child X uses parent Y as prototype



#### Terminology

- In JS, a key-value pair is referred to as `property` but typically we only refer to a pair's `key` to the `property`  **without** implying the value.

- In JS, an object `b` inherits from an object `a` is referred to as `object a is a prototype of object b` which means that the parent in this relationship is the `prototype`.

  

#### Common `Object` operations

- **`Object.values`**
  Returns an array of the object's values **in some order  - DO NOT rely on the order of the values!**

- **`Object.entries`**
  Returns an array of the object's key-value pairs as nested array **in some order**.

  The nested arrays contain:

  1. The key as the first element of the array
  2. The corresponding value as the second element of the array

- **`Object.assign(target, sources ...)`**
  Merges all the `sources` properties into the `target` object by **mutating the target object** and returns the `target` pointer.

  When a new Object is desired use something as the following code:

  ```javascript
  let a = { some: 12 };
  let b = { other: 25 }; 
  let result = Object.assign({}, a, b); // the Object literal is used to merge sources
  ```



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
  
  