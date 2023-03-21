// jais code
//jais code
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//
function returnFirstTwoDrivers(drivers) {
  return [drivers[0], drivers[1]];
}
function returnLastTwoDrivers(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}
//should return fuinction and multiply
function createFareMultiplier(multiplier) {
  return function (value) {
    return multiplier * value;
  };
}
//fareDoubler
function fareDoubler(value) {
  return createFareMultiplier(2)(value);
}
//doubles the fare multiplies by 2
function fareTripler(value) {
  return createFareMultiplier(3)(value);
}
//triples it (3)
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}
