let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let arr = [];
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(", ");
equipment = equipment.split(", ");
pets = pets.split(", ");
sleepAids = sleepAids.split(", ");


console.log(food.sort());
console.log(equipment.sort());
console.log(pets.sort());
console.log(sleepAids.sort());



//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHoldArr = [];

console.log(cargoHoldArr);


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
