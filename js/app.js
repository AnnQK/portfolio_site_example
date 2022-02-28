"use strict";

const slider = document.querySelector(".section__container");
const slides = document.querySelectorAll(".section__container__item");
const lastSlide = slides.length - 1;
let currentSlide = 0;
const dotsContainer = document.querySelector(".dots");
const headersLinks = document.querySelector(".header");
const sectionIntro = document.querySelector(".section__header");
const headerHeight = headersLinks.offsetHeight;
const sectionsAll = document.querySelectorAll(".section--openning");

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

// Sticky navigation

const navigationOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight + 5}px`,
};

function stickyNav(entries, navigationObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      headersLinks.classList.add("header--scrolled");
    } else {
      headersLinks.classList.remove("header--scrolled");
    }
  });
}

const navigationObserver = new IntersectionObserver(
  stickyNav,
  navigationOptions
);

navigationObserver.observe(sectionIntro);

// section openning

function openSection(entries, sectionObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("section--hidden");
      sectionsObserver.unobserve(entry.target);
    }
  });
}
const sectionsOptions = {
  root: null,
  threshold: 0.1,
};

const sectionsObserver = new IntersectionObserver(openSection, sectionsOptions);

sectionsAll.forEach((section) => {
  sectionsObserver.observe(section);
  section.classList.add("section--hidden");
});
