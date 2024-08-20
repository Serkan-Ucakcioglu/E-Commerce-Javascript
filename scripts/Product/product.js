import base_url from "../api.js";
import { createCard } from "../Template/card.js";

const productList = document.querySelector(".product-list");

export async function getProducts(query) {
  let endpoint = `${base_url}`;

  if (query) {
    endpoint = `${base_url}/${query}`;
  }

  const response = await fetch(`${endpoint}`);
  const data = await response.json();

  productList.innerHTML = "";
  data.forEach((item) => {
    const cardHTML = createCard(item);
    productList.innerHTML += cardHTML;
    const viewBtn = document.querySelectorAll(".view-btn");
    viewBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log("click");
        const productId = item.id;
        const productCategory = item.category;
        window.location.href = `product.html?id=${productId}&category=${productCategory}`;
      });
    });
  });
}
