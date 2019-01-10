const returnFirstTwoDrivers = function(drivers) {
  const brick = drivers.slice(0, 2);
  // return drivers[0], drivers[1]
  return brick;
}

const returnLastTwoDrivers = function(drivers) {
  const brick = drivers.slice(-2);
  // return drivers[0], drivers[1]
  return brick;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
  return function fareMultiplier(input) {
    return input * num
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(arrayOfDrivers, fun) {
  return fun(arrayOfDrivers)
}
