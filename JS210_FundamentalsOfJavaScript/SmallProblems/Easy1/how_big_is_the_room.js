/*
    # Further exploration

      sqm  = sqft * (sqm / 1sqft)
      sqft?


*/

const SQUARE_FEET_PER_SQUARE_METER = 10.7639;
const SQUARE_METERS_PER_SQUARE_FOOT = 0.092903;
const UNIT_METERS = '1';
const UNIT_FEET = '2';
const UNID_ID_NAME_MAP = {};
      UNID_ID_NAME_MAP[UNIT_METERS] = 'meters';
      UNID_ID_NAME_MAP[UNIT_FEET] = 'feet';
const RLSYNC = require('readline-sync');

function squareMetersToSquareFeet(squareMeters) {
  return squareMeters * SQUARE_FEET_PER_SQUARE_METER;
}

function squareFeetToSquareMeter(squareFeet) {
  return squareFeet * SQUARE_METERS_PER_SQUARE_FOOT;
}

console.log('Choose unit to input room dimensions:');
console.log("  '1' for meters");
console.log("  '2' for feet");
const chosenUnit = RLSYNC.prompt();
const chosenUnitName = UNID_ID_NAME_MAP[chosenUnit];

console.log(`Enter the length of the room in ${chosenUnitName}:`);
const roomLengthInChosenUnit = Number(RLSYNC.prompt());

console.log(`Enter the width of the room in ${chosenUnitName}:`);
const roomWidthInChosenUnit = Number(RLSYNC.prompt());

const roomAreaInSquareMeters = (roomLengthInMeters * roomWidthInMeters).toFixed(2);
const roomAreeInSquareFeet = squareMetersToSquareFeet(roomAreaInSquareMeters).toFixed(2);

console.log(`The area of the room is ${roomAreaInSquareMeters} square\
meters (${roomAreeInSquareFeet} square feet).`)
