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
  prevButton.disabled = currentPage == 0;
  pagination(data);
}

function nextPage(length, data) {
  prevButton.disabled = false;
  if (currentPage !== length) {
    nextButton.disabled = false;
    currentPage += 1;
    changePage(currentPage, data, length);
  } else {
    nextButton.disabled = true;
  }
}

function prevPage(data) {
  nextButton.disabled = false;
  if (currentPage - 1 !== 0) {
    prevButton.disabled = false;
    currentPage -= 1;
    changePage(currentPage, data, Math.ceil(data.length / itemsPerPage));
  } else {
    prevButton.disabled = true;
  }
}

function updateCurrentPage(value) {
  if (value) return (currentPage = value);
}

export {
  pagination,
  nextPage,
  prevPage,
  pagiData,
  updateCurrentPage,
  changePage,
};
