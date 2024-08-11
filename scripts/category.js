import base_url from "./api.js";
import { capitalizeFirstLetter } from "./utils/firsletter.js";

const categoryDiv = document.querySelector(".check");

export async function getCategories() {
  const response = await fetch(`${base_url}/categories`);
  const data = await response.json();

  data.forEach((item) => {
    categoryDiv.innerHTML += ` <label>
              <input type="checkbox" id="${item}" />
             ${capitalizeFirstLetter(item)}
            </label>`;
  });
}
