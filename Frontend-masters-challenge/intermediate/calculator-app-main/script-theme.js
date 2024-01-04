const dataTheme = document.querySelector("html");
const btn = document.querySelectorAll("input");

btn[0].addEventListener("click", () => {
  dataTheme.setAttribute("data-theme", "main");
});

btn[1].addEventListener("click", () => {
  dataTheme.setAttribute("data-theme", "light");
});

btn[2].addEventListener("click", () => {
  dataTheme.setAttribute("data-theme", "dark");
});
