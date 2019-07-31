'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    // Write your code here
    // If the first character in string  is in the set aeiou, then return A.
    // If the first character in string  is in the set bcdfg, then return B.
    // If the first character in string  is in the set hjklm, then return C.
    // If the first character in string  is in the set npqrstvwxyz, then return D.    
    let letter = s[0];

    switch ('aeiou'.includes(letter)) {
        case true: return 'A';
    }
    switch ('bcdfg'.includes(letter)) {
        case true: return 'B';
    }
    switch ('hjklm'.includes(letter)) {
        case true: return 'C';
    }
    switch ('npqrstvwxyz'.includes(letter)) {
        case true: return 'D';
    }
}