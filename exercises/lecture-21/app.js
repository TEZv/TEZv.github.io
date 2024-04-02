console.log("`1NOTE`: String -> [], fruits ==> []");
// THE TASK 1 SECTION
let fruits = "apple banana cantaloupe blueberries grapefruit";
fruits = fruits.split(" ");
console.log(fruits);
// THE TASK 1 SECTION

console.log("\n`2NOTE`: 'for(){}' loop shows each item of []");

// THE TASK 2 SECTION
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// THE TASK 2 SECTION

console.log("\n`3NOTE`: 'while(){}' loop shows each item of []");

// THE TASK 3 SECTION
let fruitElement = 0;
while (fruitElement < fruits.length) {
  console.log(fruits[fruitElement]);
  fruitElement++;
}
// THE TASK 3 SECTION

console.log("\n`4NOTE`: 'do{} while()' loop shows each item of []");

// THE TASK 4 SECTION
let index = 0;
do {
  console.log(fruits[index]);
  index++;
} while (index < fruits.length);
// THE TASK 4 SECTION

console.log("\n`5NOTE`: 'for(of){}' loop shows each item of []");

// THE TASK 5 SECTION
for (const fruit of fruits) {
  console.log(fruit);
}
// THE TASK 5 SECTION

console.log("\n`6NOTE`: 'for(){}' loop shows even items of Numbs[]");

// THE TASK 6 SECTION
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}
// THE TASK 6 SECTION

console.log("\n`7NOTE`: 'push()' added the 'Joker' to the end of []");

// THE TASK 7 SECTION
{
  const names = ["Batman"];
  names.push("Joker");
  console.log(names);
}
// THE TASK 7 SECTION

console.log("\n`8NOTE`: 'unshift()' added the 'Joker' to the start of []");

// THE TASK 8 SECTION
{
  const names = ["Batman"];
  names.unshift("Joker");
  console.log(names);
}
// THE TASK 8 SECTION

console.log("\n`9NOTE`: 'unshift()' added the 'Catwoman' to the start of []");

// THE TASK 9 SECTION
{
  const names = ["Batman", "Joker", "Bane"];
  names.unshift("Catwoman");
  console.log(names);
}
// THE TASK 9 SECTION

console.log("\n`10NOTE`: '...names' added the 'Catwoman' to the start of []");

// THE TASK 10 SECTION
{
  let names = ["Batman", "Joker", "Bane"];
  names = ["Catwoman", ...names];
  console.log(names);
}
// THE TASK 10 SECTION

console.log(
  "\n`11NOTE`: 'splice(1, 0, 'Catwoman')' added the 'Catwoman' on the 2nd place of []"
);

// THE TASK 11 SECTION
{
  const names = ["Batman", "Joker", "Bane"];
  names.splice(1, 0, "Catwoman");
  console.log(names);
}
// THE TASK 11 SECTION

console.log(
  "\n`12NOTE`: 'indexOf() and splice() ' removed the 'Catwoman' and 'Joker' from []"
);

// THE TASK 12 SECTION
{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  console.log(names);

  const indexCatwoman = names.indexOf("Catwoman");

  if (indexCatwoman !== -1) {
    names.splice(indexCatwoman, 1);
  }

  console.log(names);

  const indexJoker = names.indexOf("Joker");
  if (indexJoker !== -1) {
    names.splice(indexJoker, 1);
  }

  console.log(names);
}
// THE TASK 12 SECTION

console.log(
  "\n`13NOTE`: 'splice()' replaced the 'Catwoman' and 'Joker' with 'Alfred' in []"
);

// THE TASK 13 SECTION
{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  names.splice(1, 2, "Alfred");
  console.log(names); // => ['Batman', 'Alfred' ,'Bane']
}
// THE TASK 13 SECTION

console.log(
  "\n`14NOTE`: 'includes()' checks for the 'Alfred' in [], if absent - 'push()'"
);

// THE TASK 14 SECTION
{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  console.log(names);

  if (!names.includes("Alfred")) {
    names.push("Alfred");
  }
  console.log(names);
}
// THE TASK 14 SECTION

console.log(
  "\n`15NOTE`: 'indexOf()' checks for the 'Alfred' in [], if present - 'splice()'"
);

// THE TASK 15 SECTION
{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  console.log(names);

  const alfred = names.indexOf("Alfred");

  if (alfred !== -1) {
    names.splice(alfred, 1);
  } else {
    console.log("Couldn't find 'Alfred'. The array it was looked for above⬆️");
  }
}
// THE TASK 15 SECTION
