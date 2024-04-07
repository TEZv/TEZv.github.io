// THE TASK 1 SECTION
const ul = document.querySelector("ul");
const input = document.getElementById("item");
let itemsArray = JSON.parse(localStorage.getItem("items")) || [];

function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

itemsArray.forEach(addTask);

function add() {
  const taskText = input.value.trim();
  if (taskText !== "") {
    itemsArray.push(taskText);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(taskText);
    input.value = "";
  }
}

function del() {
  localStorage.removeItem("items");
  itemsArray = [];
  ul.innerHTML = "";
}
// THE TASK 1 SECTION
