// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
// Is the program behaving as expected?

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   console.log(launchReady = true);
} else {
   console.log('WARNING: Insufficient fuel!');
   console.log(launchReady = false);
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   console.log(launchReady = true);
} else {
   console.log('WARNING: Crew or computer not ready!');
   console.log(launchReady = false);
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }

//The value for launchReady should be true
//Not sure where to place the new variables to resolve the reassignment issue!, "Yet"