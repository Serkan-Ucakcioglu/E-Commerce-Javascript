import base_url from "../api.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";

const productList = document.querySelector(".product-list");

export async function getProducts() {
  const response = await fetch(`${base_url}`);
  const data = await response.json();

  data.forEach((item) => {
    productList.innerHTML += `<div class="card" id="${item.id}">
            <img
              class="product-img"
              src="${item.image}"
              alt="img"
            />
            <h1 class="card-title">${capitalizeFirstLetter(item.title)}</h1>
            <div class="card-category">${capitalizeFirstLetter(
              item.category
            )}</div>
            
            <div class="card-price">$${item.price}</div>
          </div>`;
  });
}
