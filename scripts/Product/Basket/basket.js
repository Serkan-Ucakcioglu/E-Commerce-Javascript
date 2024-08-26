import { uiUtils } from "../../utils/ui-utils.js";
import { getCard } from "../Card/card.js";

const basketList = document.querySelector(".buy-product");

function basketLists() {
  const card = getCard();
  console.log(card);

  card.map((item) => {
    return (basketList.innerHTML = ` <div class="basket-card" id=${item.id}>
            <div class="basket-product">
              <img
                width="100px"
                height="100px"
                src=${item.image}
                alt="image"
                loading="lazy"
               
              />
              <div style="text-align:center;">
              ${item.title}
              <span>Remove</span>
              </div>
            </div>
            <div class="basket-quantity">${item.quantity}</div>
            <span class="basket-prices">${item.price}</span>
          </div>`);
  });
}
basketLists();
window.addEventListener("DOMContentLoaded", uiUtils);
