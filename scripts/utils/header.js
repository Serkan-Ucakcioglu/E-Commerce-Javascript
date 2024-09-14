import { getBasketItemCount } from "../product/card-operation/card-function.js";

export function createHeader() {
  let header = document.querySelector("header");
  let template = document.querySelector("#header-template");
  const clone = template.content.cloneNode(true);
  header.appendChild(clone);
}

export function updateHeaderBasketCount(count) {
  const basket = document.querySelector(".head-left .baskets");
  const countDiv = document.querySelector(".head-left .baskets .count");

  if (!countDiv && getBasketItemCount() > 0) {
    const divElement = document.createElement("div");
    divElement.className = "count";
    const strongElement = document.createElement("strong");
    divElement.appendChild(strongElement);
    basket.appendChild(divElement);
  }

  let basketCountElement = document.querySelector(".count strong");
  if (basketCountElement) {
    basketCountElement.textContent = count;
  }
}
