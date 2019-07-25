/*

a function called calculate that takes in 3 arguments. You can choose the parameter names for the arguments.

The first argument should be a number
The second argument should be a string that contains one math operator (eg: '+' or '-' or '*' or '/' or '%')
The third argument should be a number
The calculate function should return the result of the math expression that you've specified using the arguments

*/

const calculate = ( num1, operator, num2 ) => {
  return (operator === '+') ? num1 + num2:
         (operator === '-') ? num1 - num2:
         (operator === '*') ? num1 * num2:
         (operator === '/') ? num1 / num2:
         (operator === '%') ? num1 % num2: 
         "try an arithmetic operator";
}

console.log(
  calculate( 3, "+", 2 ),
  calculate( 3, "-", 2 ),
  calculate( 3, "*", 2 ),
  calculate( 3, "/", 2 ),
  calculate( 3, "%", 2 )
);  