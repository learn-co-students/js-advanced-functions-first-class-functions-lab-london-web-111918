// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers [1]];
}

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length -2], drivers[drivers.length -1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareDoubler = function(fare) {
  return fare * 2;
}

const fareTripler = function(fare){
  return fare * 3;
}

const createFareMultiplier = function(int) {
  return function(fare) {
    return fare * int;
  };
};

const fetchSpecifiedDrivers = function(drivers, fn) {
  return fn(drivers);
}
