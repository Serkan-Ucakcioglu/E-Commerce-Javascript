import base_url from "../api.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";

const productList = document.querySelector(".product-list");

export async function getProducts(query) {
  let endpoint = `${base_url}`;

  if (query) {
    endpoint = `${base_url}/${query}`;
  }

  const response = await fetch(`${endpoint}`);
  const data = await response.json();

  productList.innerHTML = "";
  data.forEach((item) => {
    productList.innerHTML += `<div class="card" id="${item.id}">
            <div>
            <img
              class="product-img"
              src="${item.image}"
              alt="img"
            />
            </div>

            <div class="items">
            <h1 class="card-title">${capitalizeFirstLetter(item.title)}</h1>
            <div class="card-detail">
            <div class="card-category">#${capitalizeFirstLetter(
              item.category
            )}</div>
            
            <div class="card-price" >$${item.price}</div>
            </div>
            <a class="view-btn">View Product</a>
            </div>
          </div>`;
  });
}
