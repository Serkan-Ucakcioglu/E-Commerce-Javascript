let itemsPerPage = 4;
let currentPage = 1;
let pagiData = [];

function pagination(data) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  console.log(startIndex, endIndex, "start-end");

  let newData = data.slice(startIndex, endIndex);
  pagiData = newData;
}

function nextPage(length) {
  if (currentPage !== length) {
    currentPage += 1;
    console.log(currentPage, "next-pagidata pagination.js");
  }
}
function prevPage() {
  if (currentPage !== 0) {
    currentPage -= 1;
  }
}

export { pagination, nextPage, prevPage, pagiData };
