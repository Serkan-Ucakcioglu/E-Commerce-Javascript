const slider = document.querySelectorAll(".slider img");

let sliderIndex = 0;
let invalidTimer = null;
const nextButton = document.querySelector(".next-slider");
const prevButton = document.querySelector(".prev-slider");

export function initializeSlider() {
  if (sliderIndex < 3) {
    slider[sliderIndex].classList.add("active-img");
    invalidTimer = setInterval(nextStep, 3500);
  }
}

export function showSlider(index) {
  if (index >= slider.length) {
    sliderIndex = 0;
  } else if (index < 0) {
    sliderIndex = slider.length - 1;
  }

  slider.forEach((slide) => slide.classList.remove("active-img"));
  slider[sliderIndex].classList.add("active-img");
}

function prevStep() {
  clearInterval(invalidTimer);
  sliderIndex--;
  showSlider(sliderIndex);
}

export function nextStep() {
  sliderIndex++;
  showSlider(sliderIndex);
}

nextButton.addEventListener("click", nextStep);
prevButton.addEventListener("click", prevStep);
