import { getCookie, removeCookie } from "../utils/cookie.js";

const logoutBtn = document.querySelector(".logout");

if (!getCookie()) {
  document.body.remove();
  window.location.href = "login.html";
}

logoutBtn.addEventListener("click", removeCookie);
