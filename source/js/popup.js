"use strict";

const modalOpen = document.querySelector(".modal");
const buttonWeek = document.querySelector(".product-week__link");
const modalForm = modalOpen.querySelector(".modal__form");
const buttonBacket = document.querySelectorAll(".products__button");

if (buttonWeek) {
  buttonWeek.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOpen.classList.toggle("visual-hidden");
  });
}

if (buttonBacket) {
  for (let i = 0; i < buttonBacket.length; i++) {
    buttonBacket[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalOpen.classList.toggle("visual-hidden");
    });
  }
}

modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  modalOpen.classList.toggle("visual-hidden");
});