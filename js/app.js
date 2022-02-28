"use strict";

const slider = document.querySelector(".section__container");
const slides = document.querySelectorAll(".section__container__item");
const lastSlide = slides.length - 1;
let currentSlide = 0;
const dotsContainer = document.querySelector(".dots");

// place works slides

function goToSlide(slide) {
  slides.forEach((sl, index) => {
    sl.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
}

goToSlide(0);

// Create dots

function createDots() {
  slides.forEach((_, index) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
}

createDots();
