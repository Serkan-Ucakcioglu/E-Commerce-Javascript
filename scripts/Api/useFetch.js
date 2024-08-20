import base_url from "./api.js";

export async function useFetch(query) {
  let endpoint = `${base_url}`;

  if (query) {
    endpoint = `${base_url}/${query}`;
  }

  const response = await fetch(`${endpoint}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return data;
}
