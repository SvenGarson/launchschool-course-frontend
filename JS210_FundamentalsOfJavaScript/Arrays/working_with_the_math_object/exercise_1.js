/*
    # Exercise

      Declare a function that uses the Math.PI property to convert
      from radians to degrees.

    # Approach

      
      Given the number of radians


      degrees per radian = 180 / PI
      degrees = radians * degrees per radians


*/

const DEGREES_PER_RADIAN = 180 / Math.PI;

function radiansToDegrees(radians) {
  return radians * DEGREES_PER_RADIAN;
}

console.log(radiansToDegrees(1)); // approximately 57.2958
