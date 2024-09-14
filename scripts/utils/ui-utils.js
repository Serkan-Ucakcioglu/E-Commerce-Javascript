import { getBasketItemCount } from "../product/card-operation/card-function.js";
import { createHeader, updateHeaderBasketCount } from "./header.js";

export function uiUtils() {
  createHeader();
  updateHeaderBasketCount(getBasketItemCount());
}
