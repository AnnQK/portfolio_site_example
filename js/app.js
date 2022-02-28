"use strict";

const slider = document.querySelector(".section__container");
const slides = document.querySelectorAll(".section__container__item");
const lastSlide = slides.length - 1;
let currentSlide = 0;
const dotsContainer = document.querySelector(".dots");
