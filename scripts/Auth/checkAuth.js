import { getCookie, removeCookie } from "../utils/cookie.js";

const logoutBtn = document.querySelector(".logout");

if (!getCookie()) {
  return (window.location.href = "login.html");
}

logoutBtn.addEventListener("click", removeCookie);
