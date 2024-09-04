import { getBasketItemCount } from "../Product/Card/card.js";
import { createHeader, updateBasketCount } from "../Template/header.js";

export function uiUtils() {
  createHeader();
  updateBasketCount(getBasketItemCount());
}
