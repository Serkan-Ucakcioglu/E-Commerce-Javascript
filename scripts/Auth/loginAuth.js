import base_url from "../api/api.js";
import { getCookie, setCookie } from "../utils/cookie.js";

export default async function loginAuth({ username, password }) {
  try {
    const response = await fetch(`${base_url}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.ok) {
      setCookie("token", data.token, "1");
      window.location.href = "dashboard.html";
    }
    setCookie("token", data.token, "1");
  } catch (error) {
    console.log(error);
  }
}

function checkLogin() {
  if (getCookie()) {
    window.location.href = "dashboard.html";
  }
}

window.addEventListener("DOMContentLoaded", checkLogin);
