const ratingEl = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit-button");
const choosenRating = document.querySelector(".choosen-rating");

const mainContainer = document.querySelector(".main");
const submitedContainer = document.querySelector(".submitted");
let rating;

console.log(ratingEl);
ratingEl.forEach((el) =>
  el.addEventListener("click", () => {
    ratingEl.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
    rating = el.innerHTML;
    console.log(rating);
  })
);
function handleSubmit() {
  console.log("submitted");
  mainContainer.classList.add("disabled");
  submitedContainer.classList.remove("disabled");
  choosenRating.innerHTML = rating;
}

submitBtn.addEventListener("click", handleSubmit);
