/*
    Through experimentation I determines that Object.keys does
    not return an object's prototype keys, where as the For/In
    loop iterates the prototype properties.

    So the output is not the same between the two code snippets.
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// first snippet
console.log('\n\nOutput of first code snippet: ');
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// second snippet
console.log('\n\nOutput of second code snippet: ');
for (let key in myObj) {
  console.log(key);
}
