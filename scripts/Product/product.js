import { useFetch } from "../Api/useFetch.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";

const productList = document.querySelector(".product-list");

export async function getProducts(query) {
  showLoader();
  try {
    const data = await useFetch(query);
    const fragment = document.createDocumentFragment();

    productList.innerHTML = "";
    data.forEach((item) => {
      let cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.id = item.id;
      cardDiv.innerHTML = `
        <div class="card-img">
          <img
            class="product-img"
            src="${item.image}"
            alt="img"
            loading="lazy"
          />
        </div>

        <div class="items">
          <h1 class="card-title">${capitalizeFirstLetter(item.title)}</h1>
          <div class="card-detail">
            <div class="card-category">#${capitalizeFirstLetter(
              item.category
            )}</div>
            <div class="card-price">$${item.price}</div>
          </div>
          <a href=${`product.html?id=${item.id}&category=${encodeURIComponent(
            item.category
          )}`} class="view-btn" data-id="${item.id}" data-category="${
        item.category
      }">View Product</a>
        </div>
      `;
      fragment.appendChild(cardDiv);
    });
    productList.appendChild(fragment);
  } catch (error) {
    console.log(error);
    productList.innerHTML = error;
  } finally {
    hideLoader();
  }
}
