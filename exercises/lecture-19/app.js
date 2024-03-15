// THE TASK 1 SECTION
let str1 = "I'm a string!";
let str2 = "I'm a string!";

function equalTo(str1, str2) {
  const lengthEqual = str1.length === str2.length; // Check the equality // true

  const strictEqual = str1 === str2; //Strict check

  const looseEqual = str1 == str2; //Non-strict check

  console.log(`The length of "${str1}" and "${str2}" is equal:`, lengthEqual);
  console.log("Strict check:", strictEqual);
  console.log("Non-strict check:", looseEqual);
}
equalTo(str1, str2);
// THE TASK 1 SECTION

// THE TASK 2 SECTION
let string5 = "Hello World";

console.log(string5[0]);
console.log(string5.charAt(0));
// THE TASK 2 SECTION

// THE TASK 3 SECTION
let str3 = "Hello Javascript";
let letterToFind = "J";

let index = str3.indexOf(letterToFind);

if (index !== -1) {
  let foundLetter = str3[index];
  console.log(foundLetter); // Output: J
} else {
  console.log(`The symbol '${letterToFind}' doesn't exist`);
}
// THE TASK 3 SECTION

// THE TASK 4 SECTION
console.log(str3[str3.length - 1]);
console.log(str3.slice(-1));
// THE TASK 4 SECTION

// THE TASK 5 SECTION

// THE TASK 5 SECTION

// THE TASK 6 SECTION

// THE TASK 6 SECTION

// THE TASK 7 SECTION

// THE TASK 7 SECTION