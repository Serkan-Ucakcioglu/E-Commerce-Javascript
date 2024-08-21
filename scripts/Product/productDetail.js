import { useFetch } from "../Api/useFetch.js";
import { createHeader } from "../Template/header.js";
import { capitalizeFirstLetter } from "../utils/firsletter.js";

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
let category = params.get("category");
const productElement = document.querySelector(".products .container");

async function getProductDetail() {
  try {
    const [data1, data2] = await Promise.all([
      useFetch(`${productId}`),
      useFetch(`category/${category}`),
    ]);
    productElement.innerHTML = `
    <div class="tree-product">
     <div class="product-detail" id=${data1.id}>
  <div class="product-images">
            
            <img
              width="400px"
              heigh="400px"
              src=${data1.image}
              alt="image"
            />
          </div>
          <div class="details-product">
          <h3>${capitalizeFirstLetter(data1.title)}</h3>
            <div class="product-description">
<strong>Description</strong>:${capitalizeFirstLetter(data1.description)}
            </div>
            <span><strong>Price: </strong>$${data1.price}</span>
            <span><strong>Price: </strong> ${capitalizeFirstLetter(
              data1.category
            )}</span>
            <span> <strong>Rating: </strong> ${data1.rating.rate} (${
      data1.rating.count
    } reviews)</span>
          </div>
          
          </div>
          <ul class="similar-category">
      <li class="similar-card">
        <img
          width="100px"
          height="100px"
          src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
          alt="image"
        />
        <h3>Product name</h3>
        <div>
          <span>Category Name</span>
          <span>Price</span>
        </div>
      </li>
    </ul></div>
 `;
  } catch (error) {
    alert(error);
  }
}

getProductDetail();

window.addEventListener("DOMContentLoaded", createHeader);
