import { useFetch } from "../Api/useFetch.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import { viewProduct } from "../utils/view-product.js";

const productList = document.querySelector(".product-list");

export async function getProducts(query) {
  showLoader();
  try {
    const data = await useFetch(query);

    productList.innerHTML = "";

    data.forEach((item) => {
      productList.innerHTML += `
      <div class="card" id="${item.id}">
        <div class="card-img">
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
            <div class="card-price">$${item.price}</div>
          </div>
          <a class="view-btn" data-id="${item.id}" data-category="${
        item.category
      }">View Product</a>
        </div>
      </div>`;
    });
    viewProduct(".view-btn");
  } catch (error) {
    console.log(error);
    productList.innerHTML = error;
  } finally {
    hideLoader();
  }
}
