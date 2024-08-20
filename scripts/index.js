import { getCategories } from "./category.js";
import { getProducts } from "./Product/product.js";
import { initializeSlider } from "./slider.js";
import { createHeader } from "./Template/header.js";

window.addEventListener("DOMContentLoaded", () => {
  initializeSlider(), getCategories(), getProducts();
  createHeader();
});
