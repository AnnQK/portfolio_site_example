"use strict";

const slider = document.querySelector(".section__container");
const slides = document.querySelectorAll(".section__container__item");
const lastSlide = slides.length - 1;
let currentSlide = 0;
const dotsContainer = document.querySelector(".dots");
const headersLinks = document.querySelector(".header");

// place works slides

function goToSlide(slide) {
  slides.forEach((sl, index) => {
    sl.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
}

// Create dots

function createDots() {
  slides.forEach((_, index) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
}

function activeBtn(slide) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
}

// slider events

dotsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots__dot")) {
    const selectedSlide = event.target.dataset.slide;
    goToSlide(selectedSlide);
    activeBtn(selectedSlide);
  }
});

goToSlide(0);
createDots();
activeBtn(0);

// Smooth scrolling

headersLinks.addEventListener("click", function (event) {
  if (event.target.classList.contains("header__nav__link")) {
    event.preventDefault();
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
