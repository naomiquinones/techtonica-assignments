/*
a function called printCuteAnimals that expects an array to be passed in as an argument. You can name the function parameter whatever you like. When you pass the array to the function, it should contain strings, and the strings should be types of animals you think are cute.
Your function should:

First print the entire array and its length.
Print the array after you have called the .pop() method on it.
Concatenate another array of animal names onto the exisitng array. Feel free to look up how to do this using Google!
Print the array again and its new length.
Return the array.
*/

const printCuteAnimals = stringArray => {
  let length = stringArray.length;
  let plural = (length === 1)? '' : 's';
  
  console.log(`${stringArray} is ${length} item${plural} long.`);
  stringArray.pop();
  length = stringArray.length;
  plural = (length === 1)? '' : 's';

  console.log(`${stringArray} is now ${length} item${plural} long.`);
  length = stringArray.length;
  plural = (length === 1)? '' : 's';

  stringArray = stringArray.concat(["dugong","manatee","kiwi"]);
  length = stringArray.length;
  plural = (length === 1)? '' : 's';

  console.log(`${stringArray} is now ${length} item${plural} long.`);

  return stringArray;
}

printCuteAnimals(['pangolin','elephant']);



// write a function called bigWord that takes in a word as a string and returns True if the word has at least 10 letters and False if the word has 9 or fewer letters.
const bigWord = wordString => { return (wordString.length >= 10) ? true : false; }
// curly braces added around block because error occurs in repl.it console without them
bigWord('brontosaurus');


// write a function called findMax that takes in 3 integers as parameters and returns the largest of the 3 integers.
const findMax = ( int1, int2, int3 ) => {
  return ( int1 >= int2 && int1 >= int3 ) ?
    int1 : ( int2 >= int1 && int2 >= int3 ) ?
      int2 : int3;
}

findMax(4,5,3);