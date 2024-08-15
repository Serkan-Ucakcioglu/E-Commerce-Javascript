import base_url from "./api.js";
import { capitalizeFirstLetter } from "./utils/firsletter.js";

const categoryDiv = document.querySelector(".check");
let nulls = [];
export async function getCategories() {
  const response = await fetch(`${base_url}/categories`);
  const data = await response.json();

  data.forEach((item) => {
    categoryDiv.innerHTML += `<div class="category-item" data-item-name="${item}">
              <input type="checkbox" id="${item}" class="category-checkbox" />
              <label for="${item}" class="checkbox"></label>
                 <label for="${item}" class="item-title">
             ${capitalizeFirstLetter(item)}
            </label>
    </div>`;
  });
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
    } else {
      checkbox.classList.remove("on");
    }
  }
});
