// Make mobile navigation work.
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".link");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
const links = document.querySelector(".main-nav");
links.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
