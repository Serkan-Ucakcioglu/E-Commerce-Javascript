const email = document.querySelector("#email");
const password = document.querySelector("#password");
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
