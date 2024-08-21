import { useFetch } from "../Api/useFetch.js";
import { createHeader } from "../Template/header.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
let category = params.get("category");
const productElement = document.querySelector(".products .container");

async function getProductDetail() {
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
          <h3>${capitalizeFirstLetter(data1.title)}</h3>
          <div class="product-description">
            <strong>Description</strong>: ${capitalizeFirstLetter(
              data1.description
            )}
          </div>
          <span><strong>Price: </strong> $${data1.price}</span>
          <span><strong>Category: </strong> ${capitalizeFirstLetter(
            data1.category
          )}</span>
          <span><strong>Rating: </strong> ${data1.rating.rate} (${
      data1.rating.count
    } reviews)</span>
        </div>
      </div>
      <ul class="similar-category"></ul>
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
          <span class="card-price">$${item.price}</span>
        </div>
        <a class="view-btn" data-id="${item.id}" data-category="${
        item.category
      }">View Product</a>
      </li>`;
    });

    const viewBtns = document.querySelectorAll(".view-btn");
    viewBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const productId = event.currentTarget.getAttribute("data-id");
        const productCategory =
          event.currentTarget.getAttribute("data-category");
        window.location.href = `product.html?id=${productId}&category=${productCategory}`;
      });
    });
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

getProductDetail();

window.addEventListener("DOMContentLoaded", createHeader);
