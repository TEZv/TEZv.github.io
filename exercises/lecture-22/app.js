console.log("`Four h1 elements in the console`");
// THE TASK 1 SECTION
const h1Elements = document.getElementsByTagName("h1");
console.log("Type - ", typeof h1Elements); //object
console.log("Length - ", h1Elements.length); //4

for (let i = 0; i < h1Elements.length; i++) {
  console.log("Elements - ", h1Elements[i]); // First Title, Second Title, Third Title, Fourth Title
}
// THE TASK 1 SECTION

console.log("`Make the first p element with backgroundColor = 'gold'`");

// THE TASK 2 SECTION
const pFirstElement = document.querySelector("#p1");
pFirstElement.style.backgroundColor = "gold";
// THE TASK 2 SECTION

console.log("`Make the second p element with predefined styles`");

// THE TASK 3 SECTION
const pSecondElement = document.querySelector("#p2");
pSecondElement.style.cssText =
  "background-color:gold; color: blue; font-size: 2rem;";
// THE TASK 3 SECTION

console.log("`Add .third class to the third p element`");

// THE TASK 4 SECTION
const pThreeElement = document.querySelector("#p3");
pThreeElement.classList.add("third");
// THE TASK 4 SECTION

console.log("`Add .fourth and .border classes to the fourth p element`");

// THE TASK 5 SECTION
const pFourElement = document.querySelector("#p4");
pFourElement.classList.add("fourth", "border");
// THE TASK 5 SECTION

console.log(
  "`Find all elements with .container class and show the first element from each`"
);

// THE TASK 6 SECTION
const container = document.querySelectorAll(".container");

for (let i = 0; i < container.length; i++) {
  const firstChild = container[i].firstElementChild;
  console.log("First element - ", firstChild);
}
// THE TASK 6 SECTION

console.log(
  "`Find all elements with .container class and show the content of the first element from each`"
);

// THE TASK 7 SECTION
for (let i = 0; i < container.length; i++) {
  const firstChildWithContent = container[i].firstElementChild.textContent;
  console.log("Contents: ", firstChildWithContent);
}
// THE TASK 7 SECTION

console.log("`Find all elements with .container header and use `for (of)` loop`");

// THE TASK 8 SECTION
// Find a collection of all elements with the selector '.container header' and store it in the variable headers.
const headers = document.querySelectorAll(".container header");

// Array of classes to be added to the headers
const classes = ["first", "second", "third", "fourth"];

// Iterate through each header element and its index in the collection
for (const [index, header] of headers.entries()) {
  // Find the h1 header inside the current header element
  const h1Header = header.querySelector("h1");

  // Store the original id and class of the h1 header
  const originId = h1Header.id;
  const originClass = h1Header.className;

  // Determine the new tag based on the index
  const newTagName = "h" + (index + 1);

  // Create a new element with the corresponding tag, id, class, and content
  const newHeader = document.createElement(newTagName);
  newHeader.id = originId;
  newHeader.className = originClass + " " + classes[index];
  newHeader.innerHTML = h1Header.innerHTML;

  // Replace the current element with the new one
  h1Header.parentNode.replaceChild(newHeader, h1Header);
}
// THE TASK 8 SECTION
