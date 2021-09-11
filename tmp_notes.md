# Douglas Crockford

# The JavaScript programming language



## Notes

- an object is a dynamic collection of properties where every property has a key string that is unique withing that particular object

- fundamental object operations are get; set and delete

- What is a property?

  A property is a named collection of attributes, and the attributes of these properties
  are:

  - property value
  - writeable boolean
  - enumerable boolean
  - configurable boolean
  - get
  - set

- two kinds of properties in the language

  - Data properties
  - Accessor properties

- ES uses one single data type to represent number which is a double precision 64-Bit floating point type.  Decimal fractions are approximate so the following is the case:

  ```javascript
  a = 0.1;
  b = 0.2;
  c = 0.3;
  
  (a + b) + c === a + (b + c); // false - because fractions are approximate
  ```

  and in order to work with numbers like this correctly, the numbers should be converted to integers before doing the work and the converted back into the decimal representation. The upper limit of the numbers that are intuitively handled in ES is  about 9 quadrillion, at which weird behaviour occurs.

  Also, the associative law does not always work as expected.

- The built-in prototypes can be 'extended' or 'augmented' by changing the properties of those particular objects. This is useful when browser do not yet support features that will be supported in the future, as a work-around. 

  The problem is that when the functionality gets added to a particular environment and we change the prototype to implement out own, we probably want to use the standard version for it's probably higher speed and documentation.

- The `Math` object is an idea from Java and most of the method in that object should have been `Number` methods

- About the `NaN` nastyness

  ```javascript
  NaN === NaN // false
  NaN !== NaN // true
  ```

- String are sequences of 16-bit unicode characters

- The `parseint` function stops reading the string given when on the first non-digit character.
  The radix argument should always be used to avoid the following, very common problem where a number starting with a zero is interpreted as octal number.:

  ```javascript
  parseInt('08') === 0 // true
  parseInt('08', 10) === 8 // true
  ```

- Arrays

  Inherit from `object` and use that hash that an object is to simulate the functionality of an array through that hash.
  Array indices are converted to strings and used to lookup array elements in terms of the underlying hash through hashing and linked list buckets.

  ES Arrays are not very efficient in general because of that, but they are for sparse arrays, which are rarelly used.

  Advantages are though:

  - No need to specify a length, because the array is based on a hash
  - No need to specify a type


  The size of an array is always one larger than the largest index key? This allows the use or traditional constructs to iterate over a range of number.

  Avoid the use of `for/in` loops for arrays as the indices may not be iterated in order and avoid using the dot notation for arrays.

  Dont use delete for deletion because it leaves an empty element, use the `split` method instead, which is slow as it needs to rehash the whole hash potentially to reflect the new indices

- When to use arrays vs object

  - Use objects when names/keys are arbitrary strings
  - Use arrays when the names/keys are sequential integers

  In this language, objects are the `associative arrays`.

- `null` and `undefined` are special in that they are not objects

  - `null` represents nothing which return `undefined` from `typeof`
  - `undefined` the default value for variables and parameters and the value of missing members in objects
    and `typeof` returns `object` instead of `null`, this was an honest mistake in the first version of the language at it will probably stay

- ES is loosely typed, which means that any type can be stored in a variable, passed as a parameter to any function etc.

- identifiers start with letter of `_`  or `$` followed by zero or more letters, digits, `_` or `$`

- apparently it is very important to use `PascaleCase` as identifiers for constructors, which require the `new` keyword. Do not use `PascaleCase` for anything but constructors.

- do not use `_` and `$` as leading character because they are used in the implementation

- A nice idiom to avoid `null` references

  ```javascript
  // I think the talker made a mistake here, since we want to avoid null references based on the property we pull
  
  if (a) { // this should be a.member right?
    // a is truthy so we could access a member - bear with the example, because the member could be not-defined
    return a.member;
  } else {
    return a;
  }
  
  // can be written in short, using the ternary operator too off course, but it is common in JavaScript to
  a && a.member
  ```

  The similar but 'reverse' thing can be done using the `||` operators.

- Bitwise operators convert the operand to a signed 32-bit integer, apply the bitwise operator and then turn the result back into a 64-bit floating point.

  So bitwise operators cannot be used to make things faster because of this, use the appropriate operator for that.

- Switch statements have a fall-through hazard. The switch value can be an expression i.e. does not need to be a constants. This expression can then evaluate to anything? It does not have to evaluate to a string or an integer and the cases will be compared using the strict-equality operator.

- How inheritance works in JavaScript.

  it is class-free, objects inherit from other objects directly using `delegation`, also referred to as `differential inheritance`.
  So each object contains only what makes it different from the object it inherits from, which can make objects much smaller.

  ```javascript
  let newObject = Object.create(oldObject); // newObject inherits from oldObject
  ```

- On using constructors:

  The `new` operator is **required** when invoking a constructor function. If it is omitted erroneously, the global object is 'clobbered' by the constructor and there is **no compile or runtime warning** about this.

  Do not use `new` anymore?

- A nice pattern to package data and code to contain code where it is needed and nowhere else is to use closures and returning functions:

  ```javascript
  var digit_name = function() {
    const names = ['one', 'two', 'three', etc...];
      
    return function(digitIndex) {
      names[digitIndex];
    };
  }
  
  // since the constant array 'names' is allocated and deallocated everytime the function is invoked we use a closure
  // which keeps track of the established array in the returned function, which means that, as long as the closure 'lives'
  // and has access to the 'names' array, ES will just keep track of it as is.
  digit_name(2); // three
  ```

  This same pattern can be used to build objects with a particular interface and private + public state as similar to instantiating an instance from a class, but without the need for a class since we build the object directly in code and return it. This is referred to as the `module pattern` to create singletons, which can be used as constructor.

  ```javascript
  const singleton = function(type, legs) {
    // we could leak i.e. state could be injected with references!
    let privateType = type;
    let privateLegs = legs;
  
    // the following function are closures that keep the above in context
    return {
      type: () => privateType,
      legs: () => privateLegs,
      speak: function() {
        console.log(`I am a ${privateType} with ${privateLegs} legs!`);
      },
    }
  };
  
  const human = singleton('Human', 2);
  human.speak();
  
  const dog = singleton('Dog', 4);
  dog.speak();
  
  ```


  
  The above technique follows the following recipe to create an object with **state; behaviour and an interface** through a simple ES object.
  `Crockford` refers to this as the `Power Constructor`:

  1. **Make an object through one of the many mechanisms**

     This could be using an **object literal**; **`new`**; **`Object.create`** or a call to another `power constructor`.
     For previously documented reasons, usage of the `new` keyword is highly discourages because of the dangers it poses.

  2. **Define state and functions through variables and functions**

     These represent the private members of that particular object that will be laid out based on the interface.

  3. **Augment the object with 'privileged method'**

     This is synonymous to building the interface of that particular object.

  4. **Return the object**

     Return the established object to be used through it's interface.



## Resources for later

- First Crockford lesson in for this lesson: https://www.youtube.com/watch?v=RO1Wnu-xKoY&t=2327s
- Second one: https://www.youtube.com/watch?v=hQVTIJBZook



## People

- Joe Rogan
- Jordan Petersons
- Sadghuru
- Matthew McConaughey
  - https://www.youtube.com/watch?v=_YwQwVIaNZg
- Will Smith
- Jim Carrey



## Questions and answers

Since objects are passed by reference, even when they are returned by a function, does the language keep track of what the program references and so return the pointer + does the usual garbage collection thing and deallocate memory if there is no reference to the thing anymore, or does it work differently?