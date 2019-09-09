// Mobile View Slide out menu

const nav = document.querySelector(".mobile__nav");
const navOpen = document.querySelector(".mobile__nav--icon");
const navClose = document.querySelector(".mobile__nav--icon-x");

navOpen.addEventListener("click", () => {
  nav.classList.add("menu-open");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("menu-open");
});
