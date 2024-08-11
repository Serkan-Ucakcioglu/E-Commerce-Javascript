import base_url from "./api";

async function getCategories() {
  const response = await fetch(`${base_url}/categories`);
  const data = await response.json();
  console.log(data, "data");
}

getCategories();
