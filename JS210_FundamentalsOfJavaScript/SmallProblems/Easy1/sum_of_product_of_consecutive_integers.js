/*

    # Input
      1. ask user to input an integer INPUT in the range [1; +inf]
      2. ask user to choose between the sum or product in
         the range = [1; INPUT]

    # Output
      - the output based on the user input and choicse
      - no special format needed for the results in terms of
        decimals/precision since we are working with integers

    # Other requirements
      ? does the sum/product range include start and end range?
        the sum of range [1; 5] = 1 + 2 + 3 + 4 + 5 = 15
        so yes, they are inclusive
      ! assume that the input is correct and ignore input validation
        for now

    # Pseudo flow

      const chosenInteger = askForInteger(Please enter an integer greater than 0: );
      const chosenOperation = askForOperation(Enter "s" to compute the sum, or "p" to compute the product.)

      # chosenOperation could return a function to spit out the result based on
      # the chosen operation
      console.log(The sum of the integers between 1 and CHOICE is RESULT.);
*/

const RLSYNC = require('readline-sync');
const OPERATION_SUM = 'sum';
const OPERATION_PRODUCT = 'product';

function askForInteger(question) {
  return parseInt(RLSYNC.question(question));
}

function askForOperation(question) {
  const chosenOperation = RLSYNC.question(question);
  return (chosenOperation === 's') ? OPERATION_SUM : OPERATION_PRODUCT;
}

function eachNumberInInclusiveRange(rangeBottom, rangeTop, callback) {
  for (let currentNumber = rangeBottom; currentNumber <= rangeTop; currentNumber += 1) {
    callback(currentNumber);
  }  
}

function rangedSum(chosenNumber) {
  let sum = 0;

  eachNumberInInclusiveRange(1, chosenNumber, currentNumber => sum += currentNumber)

  return sum;
}

function rangedProduct(chosenNumber) {
  let product = 1;

  eachNumberInInclusiveRange(1, chosenNumber, currentNumber => product *= currentNumber)

  return product;
}

function determineOperation(chosenOperation) {
  return (chosenOperation === OPERATION_SUM) ? rangedSum : rangedProduct;
}

function originalProblem() {
  const chosenInteger = askForInteger('Please enter an integer greater than 0: ');
  const chosenOperation = askForOperation(`Enter "s" to compute the sum, or "p" to compute the product. `);
  const operationFunction = determineOperation(chosenOperation);
  const operationResult = operationFunction(chosenInteger);
  console.log(`\nThe ${chosenOperation} of the integers between 1 and ${chosenInteger} is ${operationResult}.`)
}


// note: further exploration starts below
function askForIntegerList(question) {
  const chosenCommaSeparatedIntegerList = RLSYNC.question(question);
  const chosenIntegerListAsStrings = chosenCommaSeparatedIntegerList.split(' ');
  const chosenIntegerListAsNumbers = chosenIntegerListAsStrings.map((numberString) => {
    return parseInt(numberString.trim());
  });

  return chosenIntegerListAsNumbers;
}

function numberListSum(numberList) {
  const sum = (accumulatedSum, currentNumber) => accumulatedSum += currentNumber;
  return numberList.reduce(sum, 0);
}

function numberListProduct(numberList) {
  const product = (accumulatedProduct, currentNumber) => accumulatedProduct *= currentNumber;
  return numberList.reduce(product, 1);
}

function sentencifyNumberList(numberList) {
  const numberListAsCommaSeparatedString = numberList.join(', ');
  // ??? !!!
  if numberList >= 2
}

function furtherExploration() {
  const chosenIntegerList = askForIntegerList('\n\nPlease enter a comma separated list of integers greater than 0: ');
  const chosenOperation = askForOperation(`Enter "s" to compute the sum, or "p" to compute the product. `);
  
  let operationResult;
  if (chosenOperation === OPERATION_SUM) {
    operationResult = numberListSum(chosenIntegerList);
  } else {
    operationResult = numberListProduct(chosenIntegerList);
  }
  
  console.log(`\nThe ${chosenOperation} of the integers ${chosenIntegerList} is ${operationResult}.`)
}

// run the original implementation first, then the further exploration
originalProblem();
furtherExploration();
