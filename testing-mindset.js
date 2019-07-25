// A function that takes in two numbers and returns true if the first number is larger than
// the second number. Otherwise, it should return false.
const isGreater = ( num1, num2 ) => {
  return (num1 > num2) ? true : false
};

isGreater( 1, 2 ); // expect false
isGreater( 2, 1 ); // expect true
isGreater( 2, 2 ); // expect false

// A function that takes in an array of numbers, and returns the third number in the array.
const getThirdNum = ( numArray ) => {
  return (numArray.length > 2) ? numArray[2] : "Need a longer array"
};

getThirdNum( [14, 15, 16]); // expect 16
getThirdNum( [ 2, 1 ]); // expect "Need a longer array"

// A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and 
// target. Return whether target number is between the min and the max (inclusive).
const isBetween = ( min, max, target ) => {
  return (target >= min && target <= max) ? true : false;
}

isBetween( 1,3,2 ); // expect true
isBetween( 1,3,1 ); // expect true
isBetween( 1,3,3 ); // expect true
isBetween( 1,3,4 ); // expect false

// A function that takes in a number, and prints the word "Hello" that many times.
const printHelloTimes = numTimes => {
  if (numTimes < 1) {
    alert("Need a positive number greater than 0");
    return;
  }
  for ( let i = 1; i <= numTimes; i++ ) {
    console.log("Hello");
  }
}

printHelloTimes(0); // expect nothing
printHelloTimes(1); // expect Hello
printHelloTimes(5); // expect Hello five times