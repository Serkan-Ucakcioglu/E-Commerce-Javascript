import { useFetch } from "../api/useFetch.js";
import { updateHeaderBasketCount } from "../utils/header.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import { addCard, getBasketItemCount } from "./card-operation/card-function.js";
import { uiUtils } from "../utils/ui-utils.js";

const productElement = document.querySelector(".products .container");
let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
let category = params.get("category");

async function getProductDetail() {
  showLoader();
  try {
    let [data, categoryData] = await Promise.all([
      useFetch(`products/${productId}`),
      useFetch(`products/category/${category}`),
    ]);
    document.title = capitalizeFirstLetter(data.category);

    let productDiv = `
    <div class="tree-product">
      <div class="product-detail" id=${data.id}>
        <div class="product-images">
          <img
            src="${data.image}"
            alt="image"
            loading="lazy"
          />
        </div>
        <div class="details-product">
          <h4>${capitalizeFirstLetter(data.title)}</h4>
          <div class="product-description">
            <strong>Description</strong>: ${capitalizeFirstLetter(
              data.description.substring(0, 200)
            )}
          </div>
          <span><strong>Price: </strong> $${data.price}</span>
          <span><strong>Category: </strong> ${capitalizeFirstLetter(
            data.category
          )}</span>
          <span><strong>Rating: </strong> ${data.rating.rate} (${
      data.rating.count
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
      addCard(data);
      updateHeaderBasketCount(getBasketItemCount());
    });

    let similarCategory = document.querySelector(".similar-category");
    let similarDiv = "";
    categoryData.forEach((item) => {
      similarDiv += `
      <li class="similar-card" id=${item.id}>
        <div class="similar-product">
        <img
          src="${item.image}"
          alt="image"
        />        
      <h5 class="card-title">${capitalizeFirstLetter(item.title)}</h5>
        </div>
        <div class="similar-detail">
        <div>
          <span> ${capitalizeFirstLetter(item.category)} </span>
          <span class="card-price"><strong>$</strong>${item.price}</span>
        </div>
        <a  href=${`product.html?id=${item.id}&category=${encodeURIComponent(
          item.category
        )}`} class="view-btn"  data-id="${item.id}" data-category="${
        item.category
      }">View</a>
      </div>
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
