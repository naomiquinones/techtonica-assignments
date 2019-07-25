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

/*

Challenge
Here are some other ways you can extend your calculator. Choose whichever one(s) sound most interesting to you!

Add the ability to use a square root.
Add the ability to use exponents.
Add the ability to use constants, such as pi (3.14).
Add the ability to operate on a third number.
Incorporate a function from the Math library.


*/