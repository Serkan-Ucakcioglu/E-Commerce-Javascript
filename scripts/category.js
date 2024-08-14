import base_url from "./api.js";
import { capitalizeFirstLetter } from "./utils/firsletter.js";

const categoryDiv = document.querySelector(".check");

export async function getCategories() {
  const response = await fetch(`${base_url}/categories`);
  const data = await response.json();

  data.forEach((item) => {
    categoryDiv.innerHTML += `<div class="category-item">
              <input type="checkbox" id="${item}" class="a" />
              <label for="${item}" class="checkbox"></label>
                 <label for="${item}" class="item-title">
             ${capitalizeFirstLetter(item)}
            </label>
    </div>`;
  });
}
