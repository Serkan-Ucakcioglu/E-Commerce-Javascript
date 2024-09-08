import { useFetch } from "../api/useFetch.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import { pagination, nextPage, prevPage, pagiData } from "./pagination.js";

const productList = document.querySelector(".product-list");

function createCard(data) {
  productList.innerHTML = "";
  let cards = "";
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
}

export async function getProducts(query) {
  showLoader();
  try {
    const data = await useFetch(query);
    pagination(data);
    createCard(pagiData);

    const nextButton = document.querySelector(".next-btn");

    nextButton.addEventListener("click", () => {
      nextPage(data.length);
      pagination(data);
      createCard(pagiData);
    });
  } catch (error) {
    productList.innerHTML = `<p>Error loading products. Please try again later.</p>`;
  } finally {
    hideLoader();
  }
}
