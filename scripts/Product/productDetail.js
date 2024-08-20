import { useFetch } from "../Api/useFetch.js";
import { createHeader } from "../Template/header.js";

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
console.log(productId, "params");

async function getProductDetail() {
  const data = await useFetch(`${productId}`);
  console.log(data);
}

getProductDetail();

window.addEventListener("DOMContentLoaded", createHeader);
