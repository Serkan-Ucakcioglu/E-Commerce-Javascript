import base_url from "./api.js";

const categoryDiv = document.querySelector(".check");

export async function getCategories() {
  const response = await fetch(`${base_url}/categories`);
  const data = await response.json();

  data.forEach((item) => {
    categoryDiv.innerHTML += ` <label>
              <input type="checkbox" id="${item}" />
             ${item.charAt(0).toUpperCase() + item.slice(1)}
            </label>`;
  });
}

getCategories();
