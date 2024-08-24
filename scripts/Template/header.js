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
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 18.8569L15.15 14.5069M17.5 8.8569C17.5 13.2752 13.9183 16.8569 9.5 16.8569C5.08172 16.8569 1.5 13.2752 1.5 8.8569C1.5 4.43862 5.08172 0.856903 9.5 0.856903C13.9183 0.856903 17.5 4.43862 17.5 8.8569Z"
                    stroke="#090A0A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-input"
                name="searchBox"
                placeholder="Search for Clothing and Accessories"
              />
            </div>
            <div class="head-left">
              <a href="#" class="baskets">
                <img
                  class="basket"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSScOc9jICGGssMug0jWrOgeoFX6K78kLtw&amp;usqp=CAU"
                  alt="basket"
                />
                <div class="count"><strong></strong></div>
              </a>
              <a href="/login.html" class="login-btn">Login</a>
            </div>
          </div>
        </div>`;

  const basket = document.querySelector(".head-left .baskets");
}

export function updateBasketCount(count) {
  let basketCountElement = document.querySelector(".count strong");
  if (basketCountElement) {
    basketCountElement.textContent = count;
  }
}
