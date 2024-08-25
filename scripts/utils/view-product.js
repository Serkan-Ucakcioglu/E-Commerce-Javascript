export function viewProduct(selector) {
  const viewBtns = document.querySelectorAll(selector);
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const productId = event.currentTarget.getAttribute("data-id");
      const productCategory = event.currentTarget.getAttribute("data-category");
      window.location.href = `product.html?id=${productId}&category=${productCategory}`;
    });
  });
}
