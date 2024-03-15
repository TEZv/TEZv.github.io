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
function lastCharFirstExample(str) {
  return str.charAt(str.length - 1);
}

function lastCharSecondExample(str) {
  return str.slice(-1);
}

function lastCharThirdExample(str) {
  return str[str.length - 1];
}

console.log(lastCharFirstExample(str3));
console.log(lastCharSecondExample(str3));
console.log(lastCharThirdExample(str3));
// THE TASK 5 SECTION

// THE TASK 6 SECTION
let a = "When candles are out,";
let b = "all cats are grey.";

console.log(a.concat(" " + b));
// THE TASK 6 SECTION

// THE TASK 7 SECTION
function changeValue() {
  let fact = "Fifteen is the same as";
  let a = 5;
  let b = 10;
  fact += " " + (a + b);
  console.log(fact);
}
changeValue();
// THE TASK 7 SECTION

// THE TASK 8 SECTION
let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName(firstName, lastName));
// THE TASK 8 SECTION

// THE TASK 9 SECTION
function greeting(firstName, lastName) {
  let hi = "Hello,";
  let full = getFullName(firstName, lastName);
  return hi + " " + full + "!";
}
console.log(greeting(firstName, lastName));
// THE TASK 9 SECTION

// THE TASK 10 SECTION
let template = `
<div><h1>${greeting(firstName, lastName)}</h1></div>
`;

const div = document.getElementById("new");
div.innerHTML = template;
console.log(template);
// THE TASK 10 SECTION

// THE TASK 11 SECTION
let string1 = "  The name of our game  ";
console.log(string1.trim());         // Output: "The name of our game"
console.log(string1.trimEnd());      // Output: "  The name of our game"
console.log(string1.trimStart());    // Output: "The name of our game  "

const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim());     // Output: '555-123'
console.log(phoneNumber.trimStart());  // Output: '555-123 \n'
// THE TASK 11 SECTION

// THE TASK 12 SECTION
let sentence = "Always look on the bright side of life";

console.log(sentence.includes("look up"));
console.log(sentence.includes("look on"));
console.log(sentence.includes("look on", 8));
// THE TASK 12 SECTION

// THE TASK 13 SECTION
console.log(sentence.indexOf("l"));
console.log(sentence.indexOf("l", 3));
console.log(sentence.indexOf("L"));
// THE TASK 13 SECTION

// THE TASK 14 SECTION
console.log(sentence.substring(7));
console.log(sentence.substring(0, 6));
console.log(sentence.split(" ")[1]);
// THE TASK 14 SECTION

// THE TASK 15 SECTION

// THE TASK 15 SECTION

// THE TASK 16 SECTION

// THE TASK 16 SECTION

// THE TASK 17 SECTION

// THE TASK 17 SECTION