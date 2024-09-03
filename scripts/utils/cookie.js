export function setCookie(key, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

export function getCookie() {
  let cookie = document.cookie;
  let newCookie = cookie.split("=");
  return newCookie[1];
}
