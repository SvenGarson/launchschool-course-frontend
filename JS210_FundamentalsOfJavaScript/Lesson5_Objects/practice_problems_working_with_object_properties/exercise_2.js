function incrementProperty(object, propertyName) {
  const propertyDoesNotExist = !object.hasOwnProperty(propertyName);
  
  if (propertyDoesNotExist) {
    object[propertyName] = 1;
  } else {
    object[propertyName] += 1;
  }

  return object[propertyName];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie') === 5);
console.log(wins);  // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy') === 1);
console.log(wins);  // { steve: 3, susie: 5, lucy: 1 }