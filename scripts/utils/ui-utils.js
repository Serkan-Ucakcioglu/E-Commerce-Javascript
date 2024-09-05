import { getBasketItemCount } from "../product/card-operation/cardFunction.js";
import { createHeader, updateBasketCount } from "../template/header.js";

export function uiUtils() {
  createHeader();
  updateBasketCount(getBasketItemCount());
}
