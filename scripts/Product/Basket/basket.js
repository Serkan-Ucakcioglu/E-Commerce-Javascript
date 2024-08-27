import { updateBasketCount } from "../../Template/header.js";
import { uiUtils } from "../../utils/ui-utils.js";
import {
  addCard,
  getCard,
  getCount,
  removeCard,
  updateQuantity,
} from "../Card/card.js";

const basketList = document.querySelector(".buy-product");

function basketLists() {
  const card = getCard();
  if (getCount() < 1) {
    return (basketList.textContent = "Sepet boş");
  }

  card.map((item) => {
    basketList.innerHTML += ` <div class="basket-card" id=${item.id}>
            <div class="basket-product">
              <img
                width="120"
                height="120"
                src=${item.image}
                alt="image"
                loading="lazy"
               
              />
              <span style="text-align:center; white-space:pre-line;">
              ${item.title}
              </span>
            </div>
            <div class="basket-operation">
            <div class="basket-quantity">
            <button data-quantity="decrease"><svg class="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></button>
            <input value=${item.quantity} disabled  />
            <button data-quantity="increase"><svg class="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></button>
            </div>
            <span class="basket-prices">$${item.price * item.quantity}</span>
              <div class="remove-product" data-quantity="remove">
              <svg fill="#e50606" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="0 0 408.483 408.483"
            xml:space="preserve" stroke="#e50606">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <g>
                        <path
                            d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z">
                        </path>
                        <path
                            d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z">
                        </path>
                    </g>
                </g>
            </g>
        </svg>
        <div>
            </div>
          </div>`;
  });

  const buttonQuantity = document.querySelectorAll("[data-quantity]");
  buttonQuantity.forEach((button) => {
    const quantityType = button.getAttribute("data-quantity");
    button.addEventListener("click", (e) => {
      const basketCard = e.target.closest(".basket-card");
      const item = getCard().find((item) => item.id == basketCard.id);
      if (quantityType == "increase") {
        addCard(item);
      } else if (quantityType == "decrease") {
        updateQuantity(item);
      } else if (quantityType == "remove") {
        removeCard(item);
        basketCard.remove();
      }
      updateBasketCount(getCount());
      basketCard.querySelector("input").value = item.quantity;
      basketCard.querySelector(".basket-prices").textContent = `$${
        item.quantity * item.price
      }`;
    });
  });
}
basketLists();
window.addEventListener("DOMContentLoaded", uiUtils);
