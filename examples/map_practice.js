"use strict";

let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

function buildFullName(arrayElement) {
  return arrayElement.first + " " + arrayElement.last;
}

let namesList = kids.map(buildFullName);

let numElements = namesList.length;
for (const name of namesList) {
 console.log(name);
}