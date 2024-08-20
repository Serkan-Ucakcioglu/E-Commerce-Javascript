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
  <div class="product-detail" id=${data.id}>
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
            <span><strong>Price: </strong>$${data.price}</span>
            <span><strong>Price: </strong> ${data.category}</span>
            <span> <strong>Rating: </strong> ${data.rating.rate} (${data.rating.count} reviews)</span>
          </div>
          </div>`;
}

getProductDetail();

window.addEventListener("DOMContentLoaded", createHeader);
