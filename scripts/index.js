import { getCategories } from "./category.js";
import { getCount } from "./Product/Card/card.js";
import { getProducts } from "./Product/product.js";
import { initializeSlider } from "./slider.js";
import { createHeader, updateBasketCount } from "./Template/header.js";

window.addEventListener("DOMContentLoaded", () => {
  initializeSlider(), getCategories(), getProducts();
  createHeader();
  updateBasketCount(getCount());
});
