import { updateHeaderBasketCount } from "../../utils/header.js";
import { capitalizeFirstLetter } from "../../utils/firsletter.js";
import { uiUtils } from "../../utils/ui-utils.js";
import {
  getBasketItemCount,
  addCard,
  removeCard,
  updateQuantity,
  getCard,
  totalValue,
} from "../card-operation/card-function.js";

const allBasket = document.querySelector(".basket-list");
const basketList = document.querySelector(".basket-card-container");
const till = document.querySelector(".till");

function checkCount() {
  if (getBasketItemCount() < 1) {
    allBasket.style.display = "none";
    const errorDiv = document.createElement("div");
    const p = document.createElement("p");
    errorDiv.classList.add("basket-error");
    p.innerHTML =
      "Your cart is empty!<br>To fill your cart with Shoplane's world of opportunities <br>you can go to the home page for the product list.";
    errorDiv.appendChild(p);
    document.body.appendChild(errorDiv);
  }
}

/Total price of products/;
function totalPrice() {
  till.innerHTML = `<strong>Total Price:$${totalValue()}</strong>`;
}

function basketLists() {
  const card = getCard();

  /Basket Product List/;
  card.map((item) => {
    basketList.innerHTML += ` <div class="basket-card" id=${item.id}>
            <div class="basket-product">
              <img
                src=${item.image}
                alt="image"
                loading="lazy"
              />
              <a href=${`product.html?id=${
                item.id
              }&category=${encodeURIComponent(item.category)}`} >
              ${capitalizeFirstLetter(item.title)}
              </a>
            </div>
            <div class="basket-operation">
            <div class="basket-quantity">
            <button data-quantity="decrease"><img src="../../../assets/decrease.svg"   alt="decrease"></button>
            <input value=${item.quantity} disabled  />
            <button data-quantity="increase"><img  src="../../../assets/increase.svg" alt="increase"></button>
            </div>
            <span class="basket-prices">$${totalValue()}</span>
              <div class="remove-product" data-quantity="remove">
              <img src="../../../assets/remove.svg" alt="remove">
        <div>
            </div>
          </div>
           `;
  });

  /Button Quantity + and - /;
  const buttonQuantity = document.querySelectorAll("[data-quantity]");
  buttonQuantity.forEach((button) => {
    const quantityType = button.getAttribute("data-quantity");
    button.addEventListener("click", (e) => {
      const basketCard = e.target.closest(".basket-card");
      const item = getCard().find((item) => item.id == basketCard.id);
      const basketCardInput = basketCard.querySelector("input");
      const basketItemPrice = basketCard.querySelector(".basket-prices");

      if (quantityType == "increase") {
        addCard(item);
      } else if (quantityType == "decrease") {
        updateQuantity(item);
      } else if (quantityType == "remove") {
        removeCard(item);
        basketCard.remove();
      }

      checkCount();
      updateHeaderBasketCount(getBasketItemCount());
      totalPrice();

      basketCardInput.value = item.quantity;
      basketItemPrice.textContent = `$${totalValue()}`;
    });
  });
}

basketLists();
totalPrice();
checkCount();
window.addEventListener("DOMContentLoaded", uiUtils);
