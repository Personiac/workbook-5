"use strict";

let numbers = [1,2,3,4,5];
let tens = [];

for (const number of numbers) {
    tens.push(number * 10);
}

console.log(tens);

console.log("--------");

let hundreds = numbers.map(function (number) {
    return number * 100;
});

console.log(hundreds);

console.log("--------");

let thousands = numbers.map(function (number) {
    return number * 1000;
})

console.log(thousands);

let numList = [10,5,6,7,4];

let index = 0;
let pplList = numList.map(function (number) {
    return `${index} ${numList[index++]} person`
})

console.log(pplList);