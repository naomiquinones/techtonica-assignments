const url="https://www.eventbrite.com/e/volunteers-help-techtonica-participants-with-javascript-tickets-53896821845?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=eventcard";

function question1(str){
  const regex = /\?.*/;         // put your regex here. .* is an example of a regex.
  return str.match(regex)[0];  // the array index 0 is because str.match returns an array.
}

console.log("1: should be a string starting with ? with all query data");
const resultAfterQ1 = question1(url);
console.log(resultAfterQ1);
console.log();

function question2(str){
  const regex = /=\w*/g;
  return str.replace(regex, '=123abc'); // what should the second argument be instead of yourNewStringHere?
}

console.log("2: should be a string with 123abc for all values in the query data");
const resultAfterQ2 = question2(resultAfterQ1);
console.log(resultAfterQ2);
console.log();

function question3(str){
  const regex = /123abc/;
  return regex.test(str); //notice we're calling .test on the regex this time!
}

console.log("3: should be true");
const theBoolResultOfQ3 = question3(resultAfterQ2);
console.log(theBoolResultOfQ3);
console.log();

function question4(str){
  const regex = /=\w*/g;
  return str.replace(regex,'=abc');
}

console.log("4: should be same as 2 except no numbers");
const resultAfterQ4 = question4(resultAfterQ2);
console.log(resultAfterQ4);
console.log();

function question5(str){
  const regex = /(\W)/g;
  return str.match(regex);
}

console.log("5: should be an array of :, /, /, and so on");
const resultAfterQ5 = question5(resultAfterQ4);
console.log(resultAfterQ5);