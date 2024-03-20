console.log("`NOTE`: String -> [], fruits ==> []");
// THE TASK 1 SECTION
let fruits = 'apple banana cantaloupe blueberries grapefruit';
fruits = fruits.split(" ");
console.log(fruits);
// THE TASK 1 SECTION

console.log("\n`NOTE`: 'for(){}' loop shows each item of []");

// THE TASK 2 SECTION
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// THE TASK 2 SECTION

console.log("\n`NOTE`: 'while(){}' loop shows each item of []");

// THE TASK 3 SECTION
let fruitElement = 0;
while (fruitElement < fruits.length) {
  console.log(fruits[fruitElement]);
  fruitElement++;
}
// THE TASK 3 SECTION

console.log("\n`NOTE`: 'do{} while()' loop shows each item of []");

// THE TASK 4 SECTION
let index = 0;
do {
  console.log(fruits[index]);
  index++;
} while (index < fruits.length);
// THE TASK 4 SECTION

console.log("\n`NOTE`: 'for(of){}' loop shows each item of []");

// THE TASK 5 SECTION
for (const fruit of fruits) {
  console.log(fruit);
}
// THE TASK 5 SECTION

console.log("\n`NOTE`: 'do{} while()' loop shows each item of []");

// THE TASK 6 SECTION

// THE TASK 6 SECTION

console.log("\n`NOTE`: 'do{} while()' loop shows each item of []");

// THE TASK 7 SECTION

// THE TASK 7 SECTION

// THE TASK 8 SECTION

// THE TASK 8 SECTION

// THE TASK 9 SECTION

// THE TASK 9 SECTION