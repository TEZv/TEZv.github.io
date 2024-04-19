document.addEventListener("DOMContentLoaded", function() {
    // Select the elements
    const sendButton = document.querySelector(".send__btn");
    const privacyCheckbox = document.querySelector("#checkPolis");
  
    // Function to toggle the "Send Message" button state
    function toggleSendButton() {
      if (privacyCheckbox.checked) {
        // If the checkbox is checked, enable the button
        sendButton.disabled = false;
        sendButton.classList.add("enabled"); // Add a class for visual effect if desired
      } else {
        // If the checkbox is not checked, disable the button
        sendButton.disabled = true;
        sendButton.classList.remove("enabled"); // Remove the class for visual effect if desired
      }
    }
  
    // Add an event listener to the checkbox
    privacyCheckbox.addEventListener("change", toggleSendButton);
  
    // Initialize the state of the button based on the initial checkbox state
    toggleSendButton();
  });
  