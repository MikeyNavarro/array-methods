const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "KeyBoard", price: 25 },
];

// Get all the items that are less than 100 dollars

const filterdItems = items.filter((item) => {
  return item.price <= 100;
});

// console.log(filterdItems);

// Get a name of every Item

const itemNames = items.map((item) => item.name);
// console.log(itemNames);

// find a single object in an array

const foundItem = items.find((item) => item.name === "Book");
console.log(foundItem);

// Itterate over Items

items.forEach((item) => console.log(item.name));

// Check if some of your price items are less than 100 Dollars

const hasInexpesniveItems = items.some((item) => item.price <= 0);
console.log(hasInexpesniveItems);

// Check if every item falls under category

const allFree = items.every((item) => item.price <= 0);
console.log(allFree);

// reduce does operation to array and returns operation. Add price of all items

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const includesTwo = items.includes(4);
console.log(includesTwo);
