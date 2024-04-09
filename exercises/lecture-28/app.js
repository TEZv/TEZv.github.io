// THE TASK 1 SECTION
const formRegister = document.getElementById("registrationForm");
const errorMessages = document.getElementById("errorMessages");

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMessages.innerHTML = "";

  const userName = document.getElementById("username").value.trim();
  const mail = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!userName) {
    renderMessage("Username cannot be empty", false);
    return;
  }

  const mailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!mailValid.test(mail)) {
    renderMessage("Invalid email address format", false);
    return;
  }

  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (password.length < 8 || !passwordValid.test(password)) {
    renderMessage(
      "Password MUST BE at least 8 characters long[aBcdef1%], contain 1 UPPERCASE letter[A-Z], 1 lowercase letter[a-z], 1 digit[1-9], and 1 special character[@$!%*?&].",
      false
    );
    return;
  }

  renderMessage("Registration is successful", true);
  formRegister.reset();
});

function renderMessage(message, isSuccess) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.classList.add(isSuccess ? "success" : "error");
  errorMessages.appendChild(messageDiv);
}
// THE TASK 1 SECTION
