import { useFetch } from "../Api/useFetch.js";
import { updateBasketCount } from "../Template/header.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import { addCard, getCount } from "./Card/card.js";
import { uiUtils } from "../utils/ui-utils.js";

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
let category = params.get("category");
const productElement = document.querySelector(".products .container");

async function getProductDetail() {
  showLoader();
  try {
    let [data1, categoryData] = await Promise.all([
      useFetch(`products/${productId}`),
      useFetch(`products/category/${category}`),
    ]);

    let productDiv = `
    <div class="tree-product">
      <div class="product-detail" id=${data1.id}>
        <div class="product-images">
          <img
            width="400px"
            height="400px"
            src="${data1.image}"
            alt="image"
            loading="lazy"
          />
        </div>
        <div class="details-product">
          <h4>${capitalizeFirstLetter(data1.title)}</h4>
          <div class="product-description">
            <strong>Description</strong>: ${capitalizeFirstLetter(
              data1.description.substring(0, 200)
            )}
          </div>
          <span><strong>Price: </strong> $${data1.price}</span>
          <span><strong>Category: </strong> ${capitalizeFirstLetter(
            data1.category
          )}</span>
          <span><strong>Rating: </strong> ${data1.rating.rate} (${
      data1.rating.count
    } reviews)</span>
     <a class="buy-btn">Buy</a>
        </div>
      </div>
      <h2 class="similar-category-title">Similar Product</h2>
      <ul class="similar-category"></ul>
    </div>
    `;
    productElement.innerHTML = productDiv;

    let addBtn = productElement.querySelector(".buy-btn");

    addBtn.addEventListener("click", () => {
      addCard(data1);
      updateBasketCount(getCount());
    });

    let similarCategory = document.querySelector(".similar-category");
    let similarDiv = "";
    categoryData.forEach((item) => {
      similarDiv += `
      <li class="similar-card" id=${item.id}>
        <img
          width="100px"
          height="100px"
          src="${item.image}"
          alt="image"
        />
        <h5 class="card-title">${capitalizeFirstLetter(item.title)}</h5>
        <div>
          <span> ${capitalizeFirstLetter(item.category)} </span>
          <span class="card-price"><strong>$</strong>${item.price}</span>
        </div>
        <a  href=${`product.html?id=${item.id}&category=${encodeURIComponent(
          item.category
        )}`} class="view-btn"  data-id="${item.id}" data-category="${
        item.category
      }">View Product</a>
      </li>`;
    });
    similarCategory.innerHTML = similarDiv;
  } catch (error) {
    productElement.innerHTML = `<p>Error loading product details. Please try again later.</p>`;
    console.error("Error fetching product details:", error);
  } finally {
    hideLoader();
  }
}

getProductDetail();

window.addEventListener("DOMContentLoaded", uiUtils());
