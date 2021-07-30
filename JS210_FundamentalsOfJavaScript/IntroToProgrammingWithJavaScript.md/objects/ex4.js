let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let objUppercaseKeys = objKeys.map(key => key.toUpperCase());
console.log(objKeys);
console.log(objUppercaseKeys);
console.log(obj);