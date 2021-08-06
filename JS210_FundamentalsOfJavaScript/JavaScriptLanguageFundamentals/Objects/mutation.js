const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

/*

    # What does the code above output? Answer before you run the code!

      The first iteration populates 'array2' with the same string
      primitives as 'array1' has. The second iteration from line 8 to 12
      does not have any affect the array that has it's content printed
      because Strings are primitiva values and hence not mutable.

      In other words, the change in 'array1' is not reflected in 'array2'.

      It prints all the array with all names as in the original 'array1':

        Moe, Larry, Curly, Shemp, Harpo, Chico, Groucho, Zeppo

    
    # Further exploration

      # Would an object literal, that is copied to another array, reflect
        the changes made to that object through another array/reference?

        Since an object literal is an object, copying this object does
        copy the reference to that object and any changes made to it through
        one reference would indeed reflect through any other reference as
        it is the same object in memory.

          Correct!

      # How would you change the code so that changes made to 'array1'
        get reflected through 'array2'

        We could simply re-assign 'array2' to point to the same array
        in memory as 'array1'
          
          Correct!

*/

const anotherArray1 = ['Anke', 'Bob', {a: 65, b: 66}, false];
const anotherArray2 = [];

// copy all elements
for (const element1 of anotherArray1) {
  anotherArray2.push(element1);
}

console.log('\n\nFurther exploration: Mutation with an object literal');
console.log(anotherArray1);
console.log(anotherArray2);
console.log(anotherArray1[2].b === 66);
anotherArray1[2].b = 123;
console.log(anotherArray2[2].b === 123);


console.log('\n\nFurther exploration: Changing code so change are reflected');
const array11 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array22 = array1;

for (let i = 0; i < array11.length; i += 1) {
  if (array11[i].startsWith('C')) {
    array11[i] = array1[i].toUpperCase();
  }
}

// now all names referenced by both arrays that start with a capital C
// are uppercase
console.log(array22);