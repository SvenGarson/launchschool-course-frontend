function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true) === 1400);
console.log(calculateBonus(1000, false) === 0);
console.log(calculateBonus(50000, true) === 25000);

/*

    # Explain how the implementation works

      The 'calculateBonus' function uses a ternary operator to
      return:

        - half the salary if the first operand is truthy
        - 0 if the first operand is falsy

      This implementation uses the 'arguments' object available
      to every method inside it's definition when executed.

      In this case:

        - arguments[0] represents the number of the salary to determine
          the bonus from
        - arguments[1] represents the boolean i.e. whether to grant the
          bonus to a particular salary or not

*/