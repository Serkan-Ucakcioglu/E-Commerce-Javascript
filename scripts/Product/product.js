import { useFetch } from "../Api/useFetch.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";

const productList = document.querySelector(".product-list");

export async function getProducts(query) {
  const data = await useFetch(query);

  productList.innerHTML = "";

  data.forEach((item) => {
    productList.innerHTML += `
      <div class="card" id="${item.id}">
        <div>
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

  const viewBtns = document.querySelectorAll(".view-btn");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const productId = event.currentTarget.getAttribute("data-id");
      const productCategory = event.currentTarget.getAttribute("data-category");
      window.location.href = `product.html?id=${productId}&category=${productCategory}`;
    });
  });
}
