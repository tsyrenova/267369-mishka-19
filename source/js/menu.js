"use strict";

const menu = document.querySelector(".main-header__toggle");
const mainNav = document.querySelector(".main-nav");
const mainHeaderSearch = document.querySelector(".main-header__search");
const mainHeaderBacket = document.querySelector(".main-header__backet");
const mainHeaderNew = document.querySelector(".main-header__new");
const mainHeaderSale = document.querySelector(".main-header__sale");
const mainHeaderShipping = document.querySelector(".main-header__shipping");
const buttonToggle = document.querySelector(".main-header__toggle");
// var buttonOpen = document.querySelector(".main-header__toggle-open");
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
