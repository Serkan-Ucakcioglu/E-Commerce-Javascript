const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".submit");

function showError(inputElement, message) {
  clearErrorMessage(inputElement);
  let errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.textContent = message;
  inputElement.parentNode.appendChild("errorSpan");
}

function clearErrorMessage(inputElement) {
  let error = inputElement.parentNode.querySelector("error-message");
  if (error) return error.remove();
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    showError(emailInput, "Email is required!");
    return false;
  } else if (!emailPattern.test(email)) {
    showError(emailInput, "Please enter a valid email address.");
    return false;
  } else {
    clearErrorMessage(emailInput);
  }
}
