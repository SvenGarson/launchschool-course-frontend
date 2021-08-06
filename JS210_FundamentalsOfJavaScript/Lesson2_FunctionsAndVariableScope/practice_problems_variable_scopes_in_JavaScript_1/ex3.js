let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

/*

    Explain what the program outputs:
      
      line 1: empty
      line 2: play station
      line 3: computer

    Explain how the relevant parts of the program work:

      1) declare global variable 'basket'
      3) declare global function that is invoked on line 26
      4) declare nested function with local/function scope
         that when invoked re-assign the global 'basket' variable
         to the string 'tv'
      8) output the still unchanged global variable 'basket' with
         value 'empty'
19 - 20) invoke the shop1 and shop2 function where the overall side-
         effect is that the global variable 'basket' is re-assigned
         to the string 'tv' then to the string 'computer'
     21) invokes the shop3 function which declares a local variable
         'basket' and initializes it with the value 'play station' 
         that shadows the global 'basket' variable.

         The local 'basket' variable is the output with the value
         'play station'.
     23) Outputs the global 'basket' variabel with the
         value 'computer'

*/