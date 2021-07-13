const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

/*  
    What does the following code output?

      line 1: Bob Bob

    Explain this result!

      The key thing here is that because Strings are primitives,
      Strings cannot be mutated by calling methods on them.

      Line 3 merely invoked a String method but does nothing
      with the return value so it has no overall effect and the
      names are not changed.
*/