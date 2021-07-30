function joinArrayContent(someArray) {
  let contentString = '';

  for (let arrayItem of someArray) {
    contentString += String(arrayItem);
  }

  return contentString;
}

console.log(joinArrayContent([1, 'a', 4]) === '1a4');