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

console.log("`Find all elements with .container header and use `for` loops`");

// THE TASK 8 SECTION
const headers = document.querySelectorAll(".container header");
console.log(headers);
const classes = ["first", "second", "third", "fourth"];

for (let i = 0; i < headers.length; i++) {
  const h1Header = headers[i].querySelector("h1");
  const originId = h1Header.id;
  const originClass = h1Header.className;

  if (i === 0) {
    h1Header.classList.add(classes[i]);
  } else if (i === 1) {
    h1Header.outerHTML =
      "<h2 id='" +
      originId +
      "' class='" +
      originClass +
      " " +
      classes[i] +
      "'>" +
      h1Header.innerHTML +
      "</h2>";
  } else if (i === 2) {
    h1Header.outerHTML =
      "<h3 id='" +
      originId +
      "' class='" +
      originClass +
      " " +
      classes[i] +
      "'>" +
      h1Header.innerHTML +
      "</h3>";
  } else if (i === 3) {
    h1Header.outerHTML =
      "<h4 id='" +
      originId +
      "' class='" +
      originClass +
      " " +
      classes[i] +
      "'>" +
      h1Header.innerHTML +
      "</h4>";
  }
}
// THE TASK 8 SECTION
