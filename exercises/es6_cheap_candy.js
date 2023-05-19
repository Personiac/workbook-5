"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

let cheapProducts = products.filter((p) => p.price < 4);
console.log(cheapProducts);

// console.log(products.filter((p) => p.price < 4));

console.log("============");

let mmProducts = products.filter((p) => p.product.includes("M&Ms"));
console.log(mmProducts);

console.log("============");

let swedishFish = products.find((p) => p.product == "Swedish Fish");
const answer = swedishFish ? "Yes" : "No"
console.log(answer);
console.log(swedishFish);
