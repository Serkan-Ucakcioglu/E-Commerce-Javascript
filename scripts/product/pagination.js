let itemsPerPage = 4;
let currentPage = 1;
let pagiData = [];

const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");

function pagination(data) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let newData = data.slice(startIndex, endIndex);
  pagiData = newData;
}

function changePage(newPage, data, length) {
  updateCurrentPage(newPage);
  nextButton.disabled = currentPage == length;
  prevButton.disabled = currentPage - 1 == 0;
  pagination(data);
}

function nextPage(length, data) {
  if (currentPage !== length) {
    currentPage += 1;
    changePage(currentPage, data, length);
  }
}

function prevPage(data, length) {
  if (currentPage - 1 !== 0) {
    currentPage -= 1;
    changePage(currentPage, data, length);
  }
}

function updateCurrentPage(value) {
  currentPage = parseInt(value, 10);
}

export {
  pagination,
  nextPage,
  prevPage,
  pagiData,
  updateCurrentPage,
  changePage,
  currentPage,
};
