import { getCategories } from "./category.js";
import { getProducts } from "./Product/product.js";
import { initializeSlider } from "./slider.js";

window.addEventListener("DOMContentLoaded", () => {
  initializeSlider(), getCategories(), getProducts();
});
