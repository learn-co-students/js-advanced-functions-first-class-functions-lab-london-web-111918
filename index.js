// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers) {
  return drivers.slice(0, 2)
})

const returnLastTwoDrivers = (function(drivers) {
  return drivers.slice(-2)
})

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return integer * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
fareDoubler(fare)
fareTripler(fare)

function fetchSpecifiedDrivers(drivers, functionOfDrivers) {
  return functionOfDrivers(drivers)
}
