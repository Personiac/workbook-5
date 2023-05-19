"use strict";

(a, b) => a * b;
// (a, b) is the parameter list
// => is the arrow and indicates the body follows
// if there is only a single expression, the value
// calculated is automatically returned

let numbers = [300, 150, 25];
/*
function getSum(currentTotal, arrayValue) {
 return currentTotal + arrayValue;
}
*/
let sum = numbers.reduce((currentTotal, arrayValue) => currentTotal + arrayValue, 0);
// sum contains 475
