import { getBasketItemCount } from "../product/card-operation/card-function.js";
import { createHeader, updateBasketCount } from "./header.js";

export function uiUtils() {
  createHeader();
  updateBasketCount(getBasketItemCount());
}
