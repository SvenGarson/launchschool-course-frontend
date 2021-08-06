/*
    The Primitives are
      - 1
      - 2
      - 'a'
      - 'b'
      - false
      - null

    The Objects are:
      - Array : [1, 2, ["a", ["b", false]], null, {}]
      - Array :        ["a", ["b", false]]
      - Array :              ["b", false]
      - Object:                                   {}   
*/

let whatAreTheItems = [1, 2, ["a", ["b", false]], null, {}];
console.log(whatAreTheItems);