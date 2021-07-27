/*

    # Input
      > bill amount
      > tip rate

    # Output
      - the tip
      - the total: bill + tip

    # Requirements
      - assume that the input is valid i.e. the user 
        inputs numbers

    # Pseudo

      billAmount = ask to float
      tipPerc = ask to float

      tipAmount = billAmount * (tipPerc / 100.0)
      billTotalWithTip = billAmount + tipAmount

*/

const RLSYNC = require('readline-sync');
const PRECISION = 2;

function promptForNumber(message) {
  return parseFloat(RLSYNC.question(message));
}

const billAmount = promptForNumber('What is the bill? ');
const tipPercentage = promptForNumber('What is the tip percentage? ');

const tipAmount = billAmount * (tipPercentage / 100.0);
const billTotalWithTip = billAmount + tipAmount;

console.log(`\nThe tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${billTotalWithTip.toFixed(2)}`);