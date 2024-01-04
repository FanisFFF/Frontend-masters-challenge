const iconClose = document.querySelector(".icon-close");
const navbar = document.querySelector(".mobile");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");

iconClose.addEventListener("click", () => {
  navbar.classList.remove("active");
  body.classList.remove("blackout");
  navbar.classList.add("hidden");
});

menu.addEventListener("click", () => {
  navbar.classList.remove("hidden");
  navbar.classList.add("active");
});
