let a = 'outer';  // block - global

function testScope() { // function - global
  let a = 'inner';  // block - function
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/*
    Predict the output of the following program:

      line 1: outer
      line 2: inner
      line 3: outer

    Interesting code line-by-line

      1) declare variable 'a' with value 'outer' and vscope: global
      3) declare function 'testScope' wit h vscope: global
      4) declare variable 'a' with vscope: local/function
         This variable shadows the global 'a' variable

      8) output the global varable 'a' value 'outer'
      9) invoke the global 'testScope' function and output inner
      10) same as line 8
*/