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
  console.log(pagiData, "pagidata", "new", newData);
}

function changePage(newPage, data, length) {
  updateCurrentPage(newPage);
  nextButton.disabled = currentPage == length;
  prevButton.disabled = currentPage - 1 == 0;
  pagination(data);
}

function nextPage(length, data) {
  prevButton.disabled = false;
  console.log("click");

  if (currentPage !== length) {
    nextButton.disabled = false;
    currentPage += 1;
    changePage(currentPage, data, length);
  } else {
    nextButton.disabled = true;
  }
}

function prevPage(data, length) {
  nextButton.disabled = false;
  if (currentPage - 1 !== 0) {
    prevButton.disabled = false;
    currentPage -= 1;
    changePage(currentPage, data, length);
  } else {
    prevButton.disabled = true;
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
};
