var menu = document.querySelector(".main-header__toggle");
var mainNav = document.querySelector(".main-nav");
var mainHeaderSearch = document.querySelector(".main-header__search");
var mainHeaderBacket = document.querySelector(".main-header__backet");
var mainHeaderNew = document.querySelector(".main-header__new");
var mainHeaderSale = document.querySelector(".main-header__sale");
var mainHeaderShipping = document.querySelector(".main-header__shipping");
var buttonToggle = document.querySelector(".main-header__toggle");
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
// buttonOpen.classList.remove("visual-hidden");
// mainNav.classList.add("hidden");
// mainHeaderSearch.classList.add("hidden");
// mainHeaderBacket.classList.add("hidden");
// mainHeaderNew.classList.add("hidden");
// mainHeaderSale.classList.add("hidden");
// mainHeaderShipping.classList.add("hidden");

// buttonOpen.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mainNav.classList.remove("hidden");
//   mainHeaderSearch.classList.remove("hidden");
//   mainHeaderBacket.classList.remove("hidden");
//   mainHeaderNew.classList.remove("hidden");
//   mainHeaderSale.classList.remove("hidden");
//   mainHeaderShipping.classList.remove("hidden");
//   buttonOpen.classList.add("visual-hidden");
//   buttonClose.classList.remove("visual-hidden");
// });

// buttonClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mainNav.classList.add("hidden");
//   mainHeaderSearch.classList.add("hidden");
//   mainHeaderBacket.classList.add("hidden");
//   mainHeaderNew.classList.add("hidden");
//   mainHeaderSale.classList.add("hidden");
//   mainHeaderShipping.classList.add("hidden");
//   buttonOpen.classList.remove("visual-hidden");
//   buttonClose.classList.add("visual-hidden");
// });
