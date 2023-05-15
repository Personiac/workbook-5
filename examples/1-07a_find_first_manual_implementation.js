"use strict";

function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
}

function find(array, conditionFn) {
  for (const value of array) {
    if (conditionFn(value)) {
      return value;
    }
  }
  return undefined;
}

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValOver60 = find(numbers, isOver60); // returns 64
if (firstValOver60 != undefined) {
  console.log(firstValOver60);
} else {
  console.log("No values over 60");
}
