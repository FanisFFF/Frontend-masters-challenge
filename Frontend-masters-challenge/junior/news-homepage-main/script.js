const icon = document.querySelector(".icon");
const iconClose = document.querySelector(".icon-close");
const links = document.querySelector(".links");
icon.addEventListener("click", () => {
  links.classList.remove("hidden");
});
iconClose.addEventListener("click", () => {
  links.classList.add("hidden");
});
