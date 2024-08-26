import { getCount } from "../Product/Card/card";
import { createHeader, updateBasketCount } from "../Template/header";

export function uiUtils() {
  createHeader();
  updateBasketCount(getCount());
}
