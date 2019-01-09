// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length-2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
  return function(multiplier) {
    return fare * multiplier;
  }
}

const fareDoubler = function(fare) {
  return fare * 2;
}

const fareTripler = function(fare) {
  return fare * 3;
}

const fetchSpecifiedDrivers = function(arrayOfDrivers, functionTBD) {
  return functionTBD(arrayOfDrivers);
}
