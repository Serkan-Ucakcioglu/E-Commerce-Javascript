import { createHeader } from "../Template/header.js";

let params = new URLSearchParams(window.location.search);
let category = params.get("id");
console.log(params, "params");

window.addEventListener("DOMContentLoaded", createHeader);
