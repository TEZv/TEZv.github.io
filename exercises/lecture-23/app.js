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

// THE TASK 4 SECTION

// THE TASK 5 SECTION

// THE TASK 5 SECTION

// THE TASK 6 SECTION

// THE TASK 6 SECTION

// THE TASK 7 SECTION

// THE TASK 7 SECTION

// THE TASK 8 SECTION

// THE TASK 8 SECTION
