import { useFetch } from "../api/useFetch.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import {
  pagination,
  nextPage,
  prevPage,
  pagiData,
  changePage,
  updateActivePage,
} from "./pagination.js";
const productList = document.querySelector(".product-list");
const pageCount = document.querySelector(".page-count");

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

    const totalPages = Math.ceil(data.length / 4);
    renderPaginationList(totalPages);
    addPaginationListeners(data, totalPages);
  } catch (error) {
    productList.innerHTML = `<p>Error loading products. Please try again later.</p>`;
  } finally {
    hideLoader();
  }
}

function renderPaginationList(totalPages) {
  for (let index = 1; index <= totalPages; index++) {
    pageCount.innerHTML += `<button class="page" data-page=${index}>${index}</button>`;
  }
}

function addPaginationListeners(data, totalPages) {
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");
  const allPages = document.querySelectorAll(".page");

  nextButton.addEventListener("click", () => {
    nextPage(totalPages, data), createCard(pagiData);
  });
  prevButton.addEventListener("click", () => {
    prevPage(data, totalPages), createCard(pagiData);
  });

  allPages.forEach((page) => {
    page.addEventListener("click", (e) => {
      const pageValue = e.target.getAttribute("data-page");
      changePage(pageValue, data, totalPages);
      createCard(pagiData);
    });
  });
}
