const input = require('readline-sync');
let str = "LaunchCode";
let str3 = "Lau";
let longInput = (" ");
let word = "JavaScript";
let newWord = word.slice(4).toUpperCase();
console.log(newWord);


//numOfLetters;
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str2 = str.slice(3);
console.log(str2);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str2}${str3}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
numOfLetters = input.question("Enter the numbers of letters you want to relocate ")

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (str3.length > numOfLetters){
console.log("it works");
}else {
    console.log(`ERROR: You entered too many numbers!`);   
}


