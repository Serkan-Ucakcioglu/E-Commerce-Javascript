import { getCategories } from "./category.js";
import { getCount } from "./Product/Card/card.js";
import { getProducts } from "./Product/product.js";
import { initializeSlider } from "./slider.js";
import { createHeader, updateBasketCount } from "./Template/header.js";

function init() {
  initializeSlider(), getCategories(), getProducts("products");
  createHeader();
  updateBasketCount(getCount());
}

window.addEventListener("DOMContentLoaded", init);
