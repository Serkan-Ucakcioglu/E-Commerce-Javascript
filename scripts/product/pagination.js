let itemsPerPage = 4;
let currentPage = 1;
let pagiData = [];

function pagination(data) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  let newData = data.slice(startIndex, endIndex);
  pagiData = newData;
}

const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
function nextPage(length) {
  prevButton.disabled = false;
  if (currentPage !== length) {
    nextButton.disabled = false;
    currentPage += 1;
  } else {
    nextButton.disabled = true;
  }
}

function prevPage() {
  nextButton.disabled = false;
  if (currentPage - 1 !== 0) {
    prevButton.disabled = false;
    currentPage -= 1;
  } else {
    prevButton.disabled = true;
  }
}

export { pagination, nextPage, prevPage, pagiData };
