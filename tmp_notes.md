# Douglas Crockford

# The JavaScript programming language



## Notes

- **Arrays**


 When to use arrays vs object

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
- David Goggins



## Questions and answers

Since objects are passed by reference, even when they are returned by a function, does the language keep track of what the program references and so return the pointer + does the usual garbage collection thing and deallocate memory if there is no reference to the thing anymore, or does it work differently?