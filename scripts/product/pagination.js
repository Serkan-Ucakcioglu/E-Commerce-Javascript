let itemsPerPage = 4;
let currentPage = 1;
let startIndex = currentPage - 1;
let endIndex = currentPage + itemsPerPage;

function pagination(data) {
  let totalPage = Math.ceil(data.length / itemsPerPage);
  let newData = data.slice(currentPage - 1, endIndex);

  return { newData, totalPage };
}

function nextPage(length) {
  if (currentPage !== length) {
    currentPage += 1;
  }
}
function prevPage() {
  if (currentPage !== 0) {
    currentPage -= 1;
  }
}

export { pagination, nextPage, prevPage };
