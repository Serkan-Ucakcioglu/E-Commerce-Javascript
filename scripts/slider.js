const slider = document.querySelectorAll(".slider img");
let sliderIndex = 0;
let invalidTimer = null;

function startSlider() {
  if (sliderIndex < 3) {
    slider[sliderIndex].classList.add("active-img");
    invalidTimer = setInterval(nextStep, 3500);
  }
}

function showSlider(index) {
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

function nextStep() {
  sliderIndex++;
  showSlider(sliderIndex);
}

window.addEventListener("DOMContentLoaded", startSlider);
