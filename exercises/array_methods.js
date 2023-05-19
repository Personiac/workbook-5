"use strict";

let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

let itemList = cart.map(function (cartItem) {
    return cartItem.item;
});

console.log(`Here's your cart:`);
for (const item of itemList) {
    console.log(item);
}
console.log("--------");
console.log(itemList);
console.log("--------");

function displayCart(names) {
    console.log(names);
}

console.log(`Here's your cart with the forEach loop:`);
itemList.forEach(displayCart);

itemList.sort();

console.log("--------");
console.log(`Here's your sorted cart loop:`);
itemList.forEach(displayCart);