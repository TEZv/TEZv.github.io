//Added ids for the correct viewport
const firstTask = document.getElementById("firstTask");
const secondTask = document.getElementById("secondTask");
const thirdTask = document.getElementById("thirdTask");

// THE TASK 1 SECTION
const list = ["html", "css", "javascript", "react.js"];
//++
const ulList = document.createElement("ul");
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ulList.appendChild(li);
});

firstTask.appendChild(ulList);
// THE TASK 1 SECTION

// THE TASK 2 SECTION
const listWithHref = [
  { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { "react.js": "https://react.dev" },
];
//++
const orderedList = document.createElement("ol");
listWithHref.forEach((obj) => {
  const liItem = document.createElement("li");
  const addLink = document.createElement("a");
  addLink.href = Object.values(obj)[0];
  addLink.textContent = Object.keys(obj)[0];
  liItem.appendChild(addLink);
  orderedList.appendChild(liItem);
});

secondTask.appendChild(orderedList);
// THE TASK 2 SECTION

// THE TASK 3 SECTION
const students = [
  { firstName: "Tom", lastName: "Cat", degree: 230 },
  { firstName: "Nary", lastName: "Ann", degree: 336 },
  { firstName: "John", lastName: "Doe", degree: 400 },
  { firstName: "James", lastName: "Bond", degree: 700 },
];
//++
function createTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Last Name", "Degree"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");
    const { firstName, lastName, degree } = student;
    row.innerHTML = `
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${degree}</td>
      `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  thirdTask.appendChild(table);
}

createTable();
// THE TASK 3 SECTION
