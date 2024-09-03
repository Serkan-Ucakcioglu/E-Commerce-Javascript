import loginAuth from "../Auth/loginAuth.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".submit");
const loginForm = document.querySelector(".login-form");

let emailFocus = false;
let passwordFocus = false;

function showError(inputElement, message) {
  clearErrorMessage(inputElement);
  let errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.textContent = message;
  inputElement.parentNode.appendChild(errorSpan);
}

function clearErrorMessage(inputElement) {
  let error = inputElement.parentNode.querySelector(".error-message");

  if (error) {
    return error.remove();
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /[A-Za-z]/;

  if (emailFocus) {
    if (!email) {
      showError(emailInput, "Email is required!");
      return false;
    }
    //   else if (!emailPattern.test(email)) {
    //     showError(emailInput, "Please enter a valid email address.");
    //     return false;
    //   }
    else {
      clearErrorMessage(emailInput);
      return true;
    }
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  const digitPattern = /\d/;
  const letterPattern = /[A-Za-z]/;

  if (passwordFocus) {
    if (!password) {
      showError(passwordInput, "Password required!");
      return false;
    } else if (password.length < 4) {
      showError(passwordInput, "Password must be at least 7 characters long.");
      return false;
    } else if (!digitPattern.test(password)) {
      showError(passwordInput, "Password must contain at least one digit.");
      return false;
    } else if (!letterPattern.test(password)) {
      showError(passwordInput, "Password must contain at least one lettern.");
      return false;
    } else {
      clearErrorMessage(passwordInput);
      return true;
    }
  }
}

function checkValidity() {
  if (validateEmail() && validatePassword()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

emailInput.addEventListener("click", () => {
  emailFocus = true;
});

emailInput.addEventListener("input", () => {
  validateEmail();
  checkValidity();
});

passwordInput.addEventListener("click", () => {
  passwordFocus = true;
});
passwordInput.addEventListener("input", () => {
  validatePassword();
  checkValidity();
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let body = {
    username: emailInput.value,
    password: passwordInput.value,
  };
  await loginAuth(body);
});
