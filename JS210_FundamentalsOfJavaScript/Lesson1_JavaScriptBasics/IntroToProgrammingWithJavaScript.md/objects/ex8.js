function copyObj(copyThis, arrayOfKeys=[]) {
  // create and return a copy of the argument
  // if no array is defines just copy the whole obj
  // if it is defined, copy only the entries with that key in the array

  if (arrayOfKeys.length === 0)
    return Object.assign({}, copyThis);

  // we know the arrayOfKeys array is not empty
  // so add all the key value pairs with keys that appear in
  // arrayOfKeys
  let copyWithSpecifiedKeys = {};
  arrayOfKeys.forEach(function(key) {
    copyWithSpecifiedKeys[key] = copyThis[key];
  });

  return copyWithSpecifiedKeys;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }