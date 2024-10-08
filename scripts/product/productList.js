import { useFetch } from "../api/useFetch.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import {
  pagination,
  nextPage,
  prevPage,
  pagiData,
  changePage,
} from "./pagination.js";

const productList = document.querySelector(".product-list");
const pageCount = document.querySelector(".page-count");
const paginationDiv = document.querySelector(".pagi");

function createCard(data) {
  productList.innerHTML = "";
  let cards = "";
  data.forEach((item) => {
    cards += `
      <a href=${`product.html?id=${item.id}&category=${encodeURIComponent(
        item.category
      )}`} class="card" data-id="${item.id}" data-category="${
      item.category
    }" class="card" id=${item.id}>
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
        </div>
        </a>
      `;
  });
  productList.innerHTML = cards;
}

export async function getProducts(query) {
  showLoader();
  try {
    const data = await useFetch(query);
    const totalPages = Math.ceil(data.length / 4);
    pageCountCheck(totalPages, data);
  } catch (error) {
    productList.innerHTML = `<p>Error loading products. Please try again later.</p>`;
  } finally {
    hideLoader();
  }
}

/Pagination Page number/;
function renderPaginationList(totalPages) {
  pageCount.innerHTML = "";
  let page = "";
  for (let index = 1; index <= totalPages; index++) {
    page += `<button class="page" data-page=${index}>${index}</button>`;
  }
  pageCount.innerHTML = page;

  const firstPage = document.querySelector("[data-page='1']");
  if (firstPage) {
    firstPage.classList.add("page-active");
  }
}

/Create Paginaiton/;
function addPaginationListeners(data, totalPages) {
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");
  const allPages = document.querySelectorAll(".page");

  nextButton.addEventListener("click", () => {
    nextPage(data, length), createCard(pagiData);
    console.log("nextpage calıstı");
  });
  prevButton.addEventListener("click", () => {
    prevPage(data, totalPages), createCard(pagiData);
  });

  allPages.forEach((page) => {
    page.addEventListener("click", (e) => {
      console.log(e.target, "click");
      console.log("pccalıstı");

      const pageValue = e.target.getAttribute("data-page");
      console.log(pageValue);

      changePage(pageValue, data, totalPages);
      createCard(pagiData);
    });
  });
}

/Check total page/;
function pageCountCheck(totalPages, data) {
  if (totalPages > 1) {
    console.log("calıstı");

    paginationDiv.style.display = "flex";
    pagination(data);
    createCard(pagiData);
    renderPaginationList(totalPages);
    addPaginationListeners(data, totalPages);
  } else {
    createCard(data);
    paginationDiv.style.display = "none";
  }
}
