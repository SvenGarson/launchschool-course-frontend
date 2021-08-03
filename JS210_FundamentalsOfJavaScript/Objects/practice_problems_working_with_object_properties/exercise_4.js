function incrementProperty(object, propertyName) {
  const propertyDoesNotExist = !object.hasOwnProperty(propertyName);
  
  if (propertyDoesNotExist) {
    object[propertyName] = 1;
  } else {
    object[propertyName] += 1;
  }

  return object[propertyName];
}

function wordCount(string) {
  const splitWords = string.split(' ');
  const splitWordsCounted = {};

  for (const word of splitWords) {
    incrementProperty(splitWordsCounted, word);
  }

  return splitWordsCounted;
}

const wordCountResult = wordCount('box car cat bag box');
console.log(wordCountResult.box === 2);
console.log(wordCountResult.car === 1);
console.log(wordCountResult.cat === 1);
console.log(wordCountResult.bag === 1);
