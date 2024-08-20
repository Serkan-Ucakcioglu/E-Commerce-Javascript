import { capitalizeFirstLetter } from "../utils/firsletter.js";

export function createCard(item) {
  return `<div class="card" id="${item.id}">
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
}
