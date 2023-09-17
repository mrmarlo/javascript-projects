let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

//3) Do split or join change the original string/array? Yes, they both do. data gets shuffeled around.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";


 

console.log(str.split('a'));
//console.log(arr.join(" "));
console.log(arr.join());//removes all the spaces 
console.log(arr.join('a'));//Inserts the letter and removes the commas
console.log(arr.join(' '));//Removes all commas and keeps the spaces
console.log(arr.join(''));//Removes the spaces and commas
//console.log;(arr.join('a'))
//cargoHold.();
