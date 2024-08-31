import { getCount } from "../Product/Card/card.js";

export function createHeader() {
  let selectedElement = document.querySelector(".header");
  selectedElement.innerHTML = ` <div class="container">
          <div class="head-bar">
            <div class="head-title">
              <a href="/" class="shoplane-title">SHOPLANE</a>
              <h1 class="product-title">Product</h1>
              <h1 class="product-title">Product</h1>
            </div>
            <div id="search">
              <div class="search-svg">
                <img href="../../assets/basket.svg" alt="basket">
              </div>
              <input
                type="text"
                id="search-input"
                name="searchBox"
                placeholder="Search for Clothing and Accessories"
              />
            </div>
            <div class="head-left">
              <a href="basket.html" class="baskets">
                <img
                  class="basket"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSScOc9jICGGssMug0jWrOgeoFX6K78kLtw&amp;usqp=CAU"
                  alt="basket"
                />
                
              </a>
              <a href="/login.html" class="login-btn">Login</a>
            </div>
          </div>
        </div>`;
}

export function updateBasketCount(count) {
  const basket = document.querySelector(".head-left .baskets");
  const countDiv = document.querySelector(".head-left .baskets .count");
  if (!countDiv && getCount() > 0) {
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
