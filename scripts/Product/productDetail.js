import { useFetch } from "../Api/useFetch.js";
import { createHeader } from "../Template/header.js";

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
const productElement = document.querySelector(".products .container");
console.log(productElement);

console.log(productId, "params");

async function getProductDetail() {
  const data = await useFetch(`${productId}`);
  console.log(data);

  productElement.innerHTML = `
  <div class="product-detail">
  <div class="product-images">
            <h1>${data.title}</h1>
            <img
              width="400px"
              heigh="400px"
              src=${data.image}
              alt="image"
            />
          </div>
          <div class="details-product">
            <div class="product-description">
  ${data.description}
            </div>
            <span><strong>Price: </strong>$109</span>
            <span><strong>Price: </strong> Men</span>
            <span> <strong>Price: </strong> 3.9</span>
          </div>
          </div>`;
}

getProductDetail();

window.addEventListener("DOMContentLoaded", createHeader);
