//Added ids for the correct viewport
const firstTask = document.getElementById("firstTask");
const secondTask = document.getElementById("secondTask");
const thirdTask = document.getElementById("thirdTask");

// THE TASK 1 SECTION
const list = ['html', 'css', 'javascript', 'react.js'];
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
  {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
  {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
  {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
  {'react.js': "https://react.dev"}
];
//++

// THE TASK 2 SECTION

// THE TASK 3 SECTION

// THE TASK 3 SECTION