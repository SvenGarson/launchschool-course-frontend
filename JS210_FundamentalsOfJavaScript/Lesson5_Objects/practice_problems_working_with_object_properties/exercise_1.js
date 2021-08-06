function objectHasProperty(object, string) {
  return object[string] !== undefined;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog') === true);
console.log(objectHasProperty(pets, 'lizard') === false);
console.log(objectHasProperty(pets, 'mice') === true);