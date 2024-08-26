import { uiUtils } from "../../utils/ui-utils.js";
import { getCard } from "../Card/card.js";

const basketList = document.querySelector(".buy-product");

function basketLists() {
  const card = getCard();
  console.log(card);

  //   card.map((item) => {
  //     return (basketList.innerHTML = `<div>${item.title}</div>`);
  //   });
}
basketLists();
window.addEventListener("DOMContentLoaded", uiUtils);
