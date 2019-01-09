// Code your solution in this file!
const returnFirstTwoDrivers = (collection) => collection.slice(0, 2)

const returnLastTwoDrivers = (collection) => collection.slice(-2)

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = (mult) => (num) => num * mult

const fareDoubler = (num) => num * 2

const fareTripler = (num) => num * 3

const fetchSpecifiedDrivers = (array, fn) => fn(array)
