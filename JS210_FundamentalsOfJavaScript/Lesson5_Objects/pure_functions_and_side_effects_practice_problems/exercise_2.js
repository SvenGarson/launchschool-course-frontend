// Which ones of the following functions are pure?

// Not a pure function as it has the side-effect of printing output
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// While the return value of this function is certainly not the intended one,
// the function is pure because it does not have side effects and return the
// same value of 'undefined' for all sets of arguments
function sum(a, b) {
  a + b;
}

// Indeed a pure function because it does not have side effects and returns
// the same exact number for the same set of arguments
function sum(a, b) {
  return a + b;
}

// Not a pure for two reasons:
//  1. It has the side-effect of reading from the system random number generator
//  2. The returned value is not always the same based on the set of arguments
//     passed but depends on what the random number generator returns
function sum(a, b) {
  return a + b + Math.random();
}

// While this functions return value makes no sense and makes no use of the
// arguments passed to it, by definition, this function is pure because it has
// no side-effects and return the same floating point number for all sets
// of arguments passed
function sum(a, b) {
  return 3.1415;
}

// So the pure functions are examples: 2; 3; 5