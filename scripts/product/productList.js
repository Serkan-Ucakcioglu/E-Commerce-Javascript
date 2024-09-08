import { useFetch } from "../api/useFetch.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import { pagination, nextPage, prevPage } from "./pagination.js";

const productList = document.querySelector(".product-list");

export async function getProducts(query) {
  showLoader();
  try {
    const data = await useFetch(query);
    let cards = "";
    const { newData, totalPage } = pagination(data);
    console.log(newData);

    data.forEach((item) => {
      cards += `
      <div class="card" id=${item.id}>
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
        </div>
      `;
    });
    productList.innerHTML = cards;
  } catch (error) {
    productList.innerHTML = `<p>Error loading products. Please try again later.</p>`;
  } finally {
    hideLoader();
  }
}
