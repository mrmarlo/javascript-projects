let launchReady = false;
// let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   console.log("launchReady");
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}
//Yes, it's working as expected!