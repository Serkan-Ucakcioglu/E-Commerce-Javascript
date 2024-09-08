export const templates = {
  //   productList: `<div class="card" id=${item.id}>
  //         <div class="card-img">
  //           <img
  //             class="product-img"
  //             src="${item.image}"
  //             alt="img"
  //             loading="lazy"
  //           />
  //         </div>
  //         <div class="items">
  //           <h1 class="card-title">${capitalizeFirstLetter(item.title)}</h1>
  //           <div class="card-detail">
  //             <div class="card-category">#${capitalizeFirstLetter(
  //               item.category
  //             )}</div>
  //             <div class="card-price">$${item.price}</div>
  //           </div>
  //           <a href=${`product.html?id=${item.id}&category=${encodeURIComponent(
  //             item.category
  //           )}`} class="view-btn" data-id="${item.id}" data-category="${
  //     item.category
  //   }">View Product</a>
  //         </div>
  //         </div>`,
  //   productDetail: `<div class="tree-product">
  //       <div class="product-detail" id=${data1.id}>
  //         <div class="product-images">
  //           <img
  //             width="400px"
  //             height="400px"
  //             src="${data1.image}"
  //             alt="image"
  //             loading="lazy"
  //           />
  //         </div>
  //         <div class="details-product">
  //           <h4>${capitalizeFirstLetter(data1.title)}</h4>
  //           <div class="product-description">
  //             <strong>Description</strong>: ${capitalizeFirstLetter(
  //               data1.description.substring(0, 200)
  //             )}
  //           </div>
  //           <span><strong>Price: </strong> $${data1.price}</span>
  //           <span><strong>Category: </strong> ${capitalizeFirstLetter(
  //             data1.category
  //           )}</span>
  //           <span><strong>Rating: </strong> ${data1.rating.rate} (${
  //     data1.rating.count
  //   } reviews)</span>
  //      <a class="buy-btn">Buy</a>
  //         </div>
  //       </div>
  //       <h2 class="similar-category-title">Similar Product</h2>
  //       <ul class="similar-category"></ul>
  //     </div>`,
  //   basketProduct: ` <div class="basket-card" id=${item.id}>
  //             <div class="basket-product">
  //               <img
  //                 src=${item.image}
  //                 alt="image"
  //                 loading="lazy"
  //               />
  //               <a href=${`product.html?id=${
  //                 item.id
  //               }&category=${encodeURIComponent(item.category)}`} >
  //               ${capitalizeFirstLetter(item.title)}
  //               </a>
  //             </div>
  //             <div class="basket-operation">
  //             <div class="basket-quantity">
  //             <button data-quantity="decrease"><img src="../../../assets/decrease.svg"   alt="decrease"></button>
  //             <input value=${item.quantity} disabled  />
  //             <button data-quantity="increase"><img  src="../../../assets/increase.svg" alt="increase"></button>
  //             </div>
  //             <span class="basket-prices">$${totalValue()}</span>
  //               <div class="remove-product" data-quantity="remove">
  //                <img src="../../../assets/remove.svg" alt="remove">
  //         <div>
  //             </div>
  //           </div>`,
  categoryList: (item) => {
    return `<div class="category-item" data-item-name="${item}">
              <input type="checkbox" id="${item}" class="category-checkbox" />
              <label for="${item}" class="checkbox"></label>
                 <label for="${item}" class="item-title">
 
            </label>
    </div>`;
  },
};
