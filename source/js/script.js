"use strict";

const menu = document.querySelector(".main-header__toggle");
const mainNav = document.querySelector(".main-nav");
const mainHeaderSearch = document.querySelector(".main-header__search");
const mainHeaderBacket = document.querySelector(".main-header__basket");
const mainHeaderNew = document.querySelector(".main-header__new");
const mainHeaderSale = document.querySelector(".main-header__sale");
const mainHeaderShipping = document.querySelector(".main-header__shipping");
const buttonToggle = document.querySelector(".main-header__toggle");
const modalOpen = document.querySelector(".modal");
const buttonWeek = document.querySelector(".product-week__link");
const modalForm = modalOpen.querySelector(".modal__form");
const buttonBacket = document.querySelectorAll(".products__button");


buttonToggle.classList.toggle("main-header__toggle--hide");
mainNav.classList.toggle("hidden");
mainHeaderSearch.classList.toggle("hidden");
mainHeaderBacket.classList.toggle("hidden");
mainHeaderNew.classList.toggle("hidden");
mainHeaderSale.classList.toggle("hidden");
mainHeaderShipping.classList.toggle("hidden");

buttonToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("main-header__toggle--close");
  mainNav.classList.toggle("hidden");
  mainHeaderSearch.classList.toggle("hidden");
  mainHeaderBacket.classList.toggle("hidden");
  mainHeaderNew.classList.toggle("hidden");
  mainHeaderSale.classList.toggle("hidden");
  mainHeaderShipping.classList.toggle("hidden");
});

if (buttonWeek || buttonBacket) {
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

  document.addEventListener("keydown", function (evt) {
    const isEscKey = evt.key === "Escape" || evt.key === "Esc";

    if (isEscKey) {
      modalOpen.classList.toggle("visual-hidden");
    }
  });
}
