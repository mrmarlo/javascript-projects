let launchReady = false;
let fuelLevel = 17000;
// let crewStatus = true;
// let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   console.log(launchReady = true);
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
//Not behaving as expected!