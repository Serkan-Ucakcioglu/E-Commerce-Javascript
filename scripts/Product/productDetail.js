import { useFetch } from "../Api/useFetch.js";
import { createHeader } from "../Template/header.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import { viewProduct } from "./view-product.js";

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
let category = params.get("category");
const productElement = document.querySelector(".products .container");

async function getProductDetail() {
  showLoader();
  try {
    let [data1, categoryData] = await Promise.all([
      useFetch(`${productId}`),
      useFetch(`category/${category}`),
    ]);

    productElement.innerHTML = `
    <div class="tree-product">
      <div class="product-detail" id=${data1.id}>
        <div class="product-images">
          <img
            width="400px"
            height="400px"
            src="${data1.image}"
            alt="image"
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
      <ul class="similar-category">
        
      </ul>
    </div>
    `;

    let similarCategory = document.querySelector(".similar-category");

    categoryData.forEach((item) => {
      similarCategory.innerHTML += `
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
        <a class="view-btn"  data-id="${item.id}" data-category="${
        item.category
      }">View Product</a>
      </li>`;
    });

    viewProduct(".view-btn");
  } catch (error) {
    productElement.innerHTML = `<p>Error loading product details. Please try again later.</p>`;
    console.error("Error fetching product details:", error);
  } finally {
    hideLoader();
  }
}

getProductDetail();

window.addEventListener("DOMContentLoaded", createHeader);
