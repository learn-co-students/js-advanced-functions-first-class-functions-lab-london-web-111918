// Code your solution in this file!
const returnFirstTwoDrivers = (collection) => {return collection.slice(0, 2)}

const returnLastTwoDrivers = (collection) => {return collection.slice(-2)}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = (mult) => {return (num) => num * mult}

const fareDoubler = (num) => {return num * 2}

const fareTripler = (num) => {return num * 3}

const fetchSpecifiedDrivers = (array, fn) => {return fn(array)}
