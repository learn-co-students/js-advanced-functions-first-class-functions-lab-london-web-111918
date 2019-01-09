// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = function() {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function() {
  return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// selectingDrivers[0]()

function createFareMultiplier(integer){
  return function(num) {
    return num * integer
  }
}

// createFareMultiplier(5)(6)

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

// fareDoubler(8)
// fareTripler(21)

// const fareDoubler = function(fare) {
//   return fare * 2;
// }
//
// const fareTripler = function(fare) {
//   return fare * 3;
// }

function fetchSpecifiedDrivers(drivers, fname){
  if (fname === returnFirstTwoDrivers){
    return returnFirstTwoDrivers()
  }
  else {return returnLastTwoDrivers()
  }
}

// fetchSepcifiedDrivers(drivers, returnFirstTwoDrivers)

// function fetchSpecifiedDrivers(drivers, driverFunction) {
//   return driverFunction(drivers)
// }
