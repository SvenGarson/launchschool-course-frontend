### Arrays are JavaScript objects

**make sense of**:

- Array can have non-integer and other objects as indexes. These are not true elements but are **properties** on the array `object` and **do not count toward the `length`** of the array!

- can use the `Object.keys` method to get the object keys of an array `Object.keys(array);`
  This method ignores un-initialized elements that have not been explicitly initialized or re-assigned.

- An array is an `Object` which is why the `typeof([1, 2, 3])` is not useful to detect an array, for this purpose use `Array.isArray(1, 2, 3)` instead.

- If an array cell is assigned a value using a negative index, two things are interesting:

  - The value is not added to that index but added to the array object as key value pair but is **not** added as a typical array element
  - The array.length property is not affected by elements added as key-value pairs based on negative indices

- JS uses objects to implement arrays. For that reason we can access a property like `Array.prototype.length`, it is just another object property that is maintained by JS to track the contents of the 'array' i.e. object.

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

- empty or uninitialized slots do not count as actual elements but are display to show that there is a gap between actual actual array elements



### Arrays automatically shrink and expand

**make sense of**:

- The array `length` property value can be set manually
- Assigning a value to a positive, out-of-bounds array index grows the array and pads the array with empty in-between elements if needed.
- changing an array's `length` property can truncate and expand the array, where **new elements are not initialized** but left `undefined`.
- Arrays can shrink/expand by providing a value for a larger index than is currently held in the array and by changing the array `length` property. Both behave similarly.
- When an array `length` is set to a lower value, the array is shrunk, loses data right away and the `length` property reflects the new length of the array. 



### Sparse arrays

**make sense of**:

- When array contents are changed, un-initialized elements are treated differently to elements that have merely been set to `undefined` as JS interprets the slots as `empty items.` but the following expression evaluates to true for a given un-initialized array item:

  ```javascript
  let array = new Array(3); // declares a new array with 3 un-initialized elements
  let result = (array[0] === undefined); // true
  ```

  **In other words**, array elements that have not been initialized **can** be treated differently from elements that were set to `undefined` after the fact even though un-initialized elements compare to the primitive `undefined` as true

- Array cells that exist but are not explicitly assigned a value are marked as 'empty', which is **different** from merely being `undefined`.

  **Note**: When a cell is marked empty, accessing it still return `undefined `!


**Below is a whole new section**

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





### Constant arrays

**make sense of**:

- constant arrays cannot be pointed to another value but the array cells can be pointed to other values because while the array may be constant, the cell contents themselves are not constant by default.

  ```javascript
  const array = [1, 2, 3];
  array[1] = 'X';    // does work, even on a constant array value
  array = [4, 5, 6]; // does not work because the array is a constant
  ```

- because of how pointers work, we cannot change what a constant identifier points to but we can change the memory contents of a constant identifier



### Arrays and equality

**make sense of**:

- when comparing arrays using strict comparison, arrays are compared based on their pointers and not their actual contents. This is also the case for nested arrays off course.



### Arrays and operators

- Using arithmetic operators when an operand is an array is in general not useful and relies on implicit coercion

- Using comparison operators acts on the basis that only the same exact pointer to an array in memory is the same i.e. both operands are arrays and the same exact pointer.

  Mixing arrays and other values/objects when using comparison operators has the same problems as using arithmetic operators, i.e. implicity coercion.

  **Some things to keep in mind here:**

  - `someArray === otherArray` evaluates to true only if both pointers point to the memory location
  - `someArray == otherArray` also compares based on the pointer value without coercion
  - `someArray === notAnArray`  when array is strictly compared with a non-array value/object, the array is **coerced into a string before** before anything else happens.

- Interesting array operations examples

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

- #### Arithmetic operators and arrays and objects

  Using arithmetic operators with arrays and objects are  **generally not useful** but here are some rules nonetheless when using arithmetic operators:
  Here a list of examples using the following rules if you really want to learn these: https://launchschool.com/lessons/79b41804/assignments/5dc08268

  - When one operand is an object and the other operand is not, JS coerces the object to the string `[object Object]`
  - In certain context, such as when a block literal is used as the first thing on a line, it is interpreted as a block of code instead of an object

  Strictly comparing two objects only evaluates to true if both objects are the same exact data in memory, i.e. the same as strict comparison works for arrays.



### Array CRUD operations

**make sense of**:

- aspects of functions and properties

  - in terms of functions also which ones are mutative and what they return
  - which operations access array elements and which the array object key-value aspect?

- access using the `[]` operator and methods like `slice` (can be used to duplicate an array); `indexOf`; `lastIndexOf`; `slice`

- insertions using methods such as `push`; `concat`; `unshift`; `splice`

- deletion using methods like `pop`; `splice`; `shift`

- various transformations using methods like `map`; `filter`; `reverse`; `join`

- aggregation using method like `reduce`; 

- inclusion using methods like `includes` (which uses the `===` operator for comparison)




## Intuitive array facts

- nstead of thinking 'array index' when working with arrays, think of a 'property name' that is interpreted as either an array element index or property name in case of key-value pairs

- Un-initialized elements act like normal elements with the difference that they are of value

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

  



### Misusing arrays as Objects

#### Using Object operations through arrays

Since arrays are really objects, every operation that works on an object also works on arrays. **Doing this is generally a bad idea though. Use more idiomatic, array based ways to execute the same operations to show the intent!**

Notable examples of these operations are `delete` and `in`, which can be used on objects but **should not be used on arrays**.

- use `splice` on arrays to delete entries instead of `delete`
- use array properties directly instead of using `in`