// const twoDrivers = (function returnFirstTwoDrivers(drivers) {
//   return drivers.slice(1,3);
// });

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function(num){
  return function(fare){
    return fare * num
  }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}
