let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

function numberEven(number) {
  return ((number %  2) == 0);
}

// using nested iteration instead of flattening the nested arrays
console.log('\n\nUsing iteration');
for(let irow = 0; irow < myArray.length; irow += 1) {
  let row = myArray[irow];
  for(let icol = 0; icol < row.length; icol += 1) {
    let number = row[icol];

    if (numberEven(number))
      console.log(number);
  }
}

// using first-class functions
console.log('\n\nUsing nested, first-class functions');
myArray.forEach(function(row) {
  row.forEach(function(rowNumber) {
    if (numberEven(rowNumber))
      console.log(rowNumber);
  });
});

