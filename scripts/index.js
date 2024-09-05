import { getCategories } from "./category.js";
import { getBasketItemCount } from "./product/card-operation/card-function.js";
import { getProducts } from "./product/productList.js";
import { initializeSlider } from "./slider.js";
import { createHeader, updateBasketCount } from "./utils/header.js";

function init() {
  initializeSlider(), getCategories(), getProducts("products/");
  createHeader();
  updateBasketCount(getBasketItemCount());
}

window.addEventListener("DOMContentLoaded", init);
