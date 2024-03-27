// THE TASK 1 SECTION
const colors = ["blue", "green", "white"];
//++

function iter(item) {
  console.log(item);
}

colors.forEach(iter);
// THE TASK 1 SECTION

// THE TASK 2 SECTION

// THE TASK 2.1 SECTION
function iterate(item, index) {
  console.log(`${item} has index ${index}`);
}
colors.forEach(iterate);
// THE TASK 2.1 SECTION

// THE TASK 2.2 SECTION
function iterateOne(item, index, array) {
  console.log(`${item} has index ${index}`);
  if (index === array.length - 1) {
    console.log("The last iteration!");
  }
}
colors.forEach(iterateOne);
// THE TASK 2.2 SECTION

// THE TASK 2 SECTION

// THE TASK 3 SECTION
const letters = ["a", "b", "c"];

function iterateTwo(letter) {
  console.log(this === window);
}
letters.forEach(iterateTwo);
// THE TASK 3 SECTION

// THE TASK 4 SECTION
const Numbers = [22, 3, 4, 10];
let allEven = true;

Numbers.forEach(function (number) {
  if (number % 2 === 1) {
    allEven = false;
  }
});
console.log(allEven);
// THE TASK 4 SECTION

// THE TASK 5 SECTION
const allEvenNew = Numbers.every((number) => number % 2 === 0);
console.log(allEvenNew);
// THE TASK 5 SECTION

// THE TASK 6 SECTION
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log("first index : ", index);
// THE TASK 6 SECTION

// THE TASK 7 SECTION
const arr = [7, 33, 47, 99, 2, 103, 79];
const findElem = arr.find((elem) => elem > 10);
console.log(findElem);
// THE TASK 7 SECTION

// THE TASK 8 SECTION
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
console.log(array.some(even));
// THE TASK 8 SECTION

// THE TASK 9 SECTION
const numbers = [1, 30, 4, 21, 100000];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
// THE TASK 9 SECTION