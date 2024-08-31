import { getProducts } from "./Product/product.js";
import { useFetch } from "./Api/useFetch.js";
import { capitalizeFirstLetter } from "./utils/firsletter.js";
import { hideLoader, showLoader } from "./utils/loader.js";

const categoryDiv = document.querySelector(".check");

export async function getCategories() {
  showLoader();
  try {
    const data = await useFetch("categories");

    let category = "";
    data.forEach((item) => {
      category += `<div class="category-item" data-item-name="${item}">
              <input type="checkbox" id="${item}" class="category-checkbox" />
              <label for="${item}" class="checkbox"></label>
                 <label for="${item}" class="item-title">
             ${capitalizeFirstLetter(item)}
            </label>
    </div>`;
    });
    categoryDiv.innerHTML = category;
  } catch (error) {
    console.log(error);
    categoryDiv.innerHTML = `<p>Error loading Category List. Please try again later.</p>`;
  } finally {
    hideLoader();
  }
}

async function getSelectedCategory(query) {
  let endpoint = "";

  if (query) {
    endpoint += `category/${query}`;
  }
  getProducts(endpoint);
}

categoryDiv.addEventListener("click", (event) => {
  if (event.target.matches("input[type='checkbox']")) {
    const checkbox = event.target;
    const allCheckboxes = document.querySelectorAll(".category-checkbox");

    allCheckboxes.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
        cb.classList.remove("on");
      }
    });

    if (checkbox.checked) {
      checkbox.classList.add("on");
      getSelectedCategory(checkbox.id);
    } else {
      checkbox.classList.remove("on");
      getSelectedCategory();
    }
  }
});
