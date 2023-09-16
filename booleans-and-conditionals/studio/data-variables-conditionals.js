

// Initialize Variables below

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 5;
let astronautStatus = ('Ready');
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -255;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = ('Clear');
let preparedForLiftOff = true;

if (astronautCount <=7) {
    console.log(`Astronaut count is: ${astronautCount}`);
}
if (astronautStatus) {
    console.log(`Astronauts: ${astronautStatus}`);
}else {
    console.log(`Astronauts NOT Ready!`);
}
if (totalMassKg > maximumMassLimit) {
    console.log(`Launched scrubbed: Shuttle Mass is: ${totalMassKg}`);
}else {
    console.log(`Total Mass is within range: ${maximumMassLimit}`);
}
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
     console.log(`Fuel temperature in range: ${fuelTempCelsius}`);
 }else {
     console.log(`Launch scrubbed: Fuel temperature out of range: ${fuelTempCelsius}`);
}
if (fuelLevel < 100) {
    console.log(`Launch scrubbed: Check FUEL LEVEL ${fuelLevel}`);        
}else {console.log(`Fuel Level PASS: ${fuelLevel}`); 
 
}
if (weatherStatus) {
    console.log(`The weather is OK: Proceed with Launch!`);
}else {
    console.log(`Launch scrubbed: Bad weather!`);
}     
if (astronautCount && astronautStatus && totalMassKg && fuelTempCelsius && fuelLevel && weatherStatus) {
    console.log(`ALL systems are a go: "Have a safe flight team!"`);
}else {
    console.log(`Launched SCRUBBED: Maybe next time team!`)
}


