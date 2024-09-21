let itemsPerPage = 4;
let currentPage = 1;
let pagiData = [];

const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");

/Slice Data/;
function pagination(data) {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let newData = data.slice(startIndex, endIndex);
  pagiData = newData;
}

/Pagination change page number/;
function changePage(newPage, data, length) {
  updateCurrentPage(newPage);
  console.log(newPage, "new");
  console.log(currentPage);

  nextButton.disabled = currentPage == length;
  prevButton.disabled = currentPage - 1 == 0;
  pagination(data);
  updateActivePage();
}

/active page number /;
function updateActivePage() {
  const allPages = document.querySelectorAll(".page");

  allPages.forEach((page) => {
    page.classList.remove("page-active");
  });

  const activePage = document.querySelector(
    `.page[data-page="${currentPage}"]`
  );

  if (activePage) {
    activePage.classList.add("page-active");
  }
}

function nextPage(data, length) {
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

/update page number/;
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
  updateActivePage,
};
