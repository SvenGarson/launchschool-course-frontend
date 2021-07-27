const UNIT_METERS = 'meters';
const UNIT_FEET = 'feet';
const SQUARE_FEET_PER_SQUARE_METER = 10.7639;
const SQUARE_METERS_PER_SQUARE_FOOT = 0.092903;
const RLSYNC = require('readline-sync');

function squareMetersToSquareFeet(squareMeters) {
  return squareMeters * SQUARE_FEET_PER_SQUARE_METER;
}

function squareFeetToSquareMeter(squareFeet) {
  return squareFeet * SQUARE_METERS_PER_SQUARE_FOOT;
}

function toAreaInAlternateUnit(currentArea, currentUnitType) {
  let areaInAlternateUnit;

  if (currentUnitType === UNIT_METERS) {
    areaInAlternateUnit = currentArea * SQUARE_FEET_PER_SQUARE_METER;
  }
  else if (currentUnitType === UNIT_FEET) {
    areaInAlternateUnit = currentArea * SQUARE_METERS_PER_SQUARE_FOOT;
  }

  return areaInAlternateUnit;
}

function toAlternateUnitType(alternateUnitType) {
  return (alternateUnitType === UNIT_METERS) ? UNIT_FEET : UNIT_METERS;
}

console.log('Choose unit to input room dimensions:');
console.log("  '1' for meters");
console.log("  '2' for feet");
const chosenUnitType = (RLSYNC.prompt() === '1') ? UNIT_METERS : UNIT_FEET; 


console.log(`Enter the length of the room in ${chosenUnitType}:`);
const roomLengthInChosenUnit = Number(RLSYNC.prompt());

console.log(`Enter the width of the room in ${chosenUnitType}:`);
const roomWidthInChosenUnit = Number(RLSYNC.prompt());

const roomAreaInChosenUnit = (roomLengthInChosenUnit * roomWidthInChosenUnit);
const roomAreaInAlternateUnit = toAreaInAlternateUnit(roomAreaInChosenUnit, chosenUnitType);
const alternateUnitType = toAlternateUnitType(chosenUnitType);

const resultMessage = 'The area of the room is ' + 
                      `${roomAreaInChosenUnit} square ${chosenUnitType}` + 
                      `(${roomAreaInAlternateUnit} square ${alternateUnitType}).`
console.log(resultMessage);
