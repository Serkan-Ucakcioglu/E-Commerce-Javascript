import base_url from "../Api/api.js";
import { setCookie } from "../utils/cookie.js";

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

    if (!response.ok) {
      throw new Error("Error");
    }
    setCookie("token", data.token, "1");
  } catch (error) {
    console.log(error);
  }
}
