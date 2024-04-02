// THE TASK 1 SECTION
const alert = document.querySelector(".alert");
//++
function clearAlert() {
  while (alertMessage.classList.length > 0) {
    alertMessage.classList.remove(alertMessage.classList.item(0));
  }
  alertMessage.classList.add("alert", "mt-5");
  alertMessage.textContent = "";
}

let showAlert = function () {
  clearAlert();
  alertMessage.classList.add("alert-primary");
  alertMessage.textContent = "A simple primary alert—check it out!";
};
// THE TASK 1 SECTION

// THE TASK 2 SECTION
const taskTwoBtn = document.getElementsByClassName("btn-secondary");
taskTwoBtn[0].addEventListener("click", function () {
  clearAlert();
  alertMessage.classList.add("alert-primary");
  alertMessage.textContent = "A simple secondary alert—check it out!";
});
// THE TASK 2 SECTION

// THE TASK 3 SECTION
const taskThreeBtn = document.getElementsByClassName("btn-success");

taskThreeBtn[0].addEventListener("mouseover", function () {
  clearAlert();
  alertMessage.classList.add("alert-success");
  alertMessage.textContent = "A simple success alert—check it out!";
});

taskThreeBtn[0].addEventListener("mouseout", function () {
  alertMessage.classList.remove("alert-success");
  alertMessage.textContent = "";
});
// THE TASK 3 SECTION

// THE TASK 4 SECTION
const taskFourBtn = document.getElementsByClassName("btn-danger");
taskFourBtn[0].addEventListener("focus", function () {
  clearAlert();
  alertMessage.classList.add("alert-danger");
  alertMessage.textContent = "A simple danger alert—check it out!";
});
taskFourBtn[0].addEventListener("focusout", function () {
  clearAlert();
  alertMessage.classList.remove("alert-danger");
  alertMessage.textContent = "";
});
// THE TASK 4 SECTION

// THE TASK 5 SECTION
// Find buttons with the class btn-dark and btn-light on the page
const btnDarkMode = document.querySelector(".btn-dark");
const btnLightMode = document.querySelector(".btn-light");

// Function to toggle the dark mode and switch buttons accordingly
function toggleMode() {
  // Toggle the dark-mode class on the document body
  document.body.classList.toggle("dark-mode");

  // Toggle the 'hide' class on the btnDarkMode and btnLightMode buttons
  btnDarkMode.classList.toggle("hide");
  btnLightMode.classList.toggle("hide");
}

// Hide the btnLightMode button initially
btnLightMode.classList.toggle("hide");

// Add event listeners to toggle mode when buttons are clicked
btnDarkMode.addEventListener("click", toggleMode);
btnLightMode.addEventListener("click", toggleMode);
// THE TASK 5 SECTION

// THE TASK 6 SECTION
const btnInfo = document.querySelector(".btn-info");
btnInfo.addEventListener("keypress", function (e) {
  clearAlert();
  if (e.key === "Enter") {
    e.preventDefault();
    alertMessage.classList.add("alert-info");
    alertMessage.textContent = "A simple info alert—check it out!";
  } else {
    clearAlert();
  }
});
// THE TASK 6 SECTION

// THE TASK 7 SECTION
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const cardTitle = cards[i].querySelector(".card-title");
  console.log(cardTitle.textContent);
}
// THE TASK 7 SECTION

// THE TASK 8 SECTION
// The 95 row contains needed selectors
for (let i = 0; i < cards.length; i++) {
  const btnAddToCart = cards[i].querySelector(".add-to-cart");
  btnAddToCart.addEventListener("click", function () {
    console.log(cards[i].querySelector(".card-title").textContent);
  });
}
// THE TASK 8 SECTION
