let itemsPerPage = 4;
let currentPage = 1;
let endIndex = currentPage + itemsPerPage;

function pagination(data) {
  let pageData = Math.ceil(data.length / itemsPerPage);
  let da = data.slice(currentPage - 1, endIndex);
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
