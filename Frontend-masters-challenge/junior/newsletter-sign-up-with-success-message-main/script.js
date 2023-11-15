const loginForm = document.querySelector("#loginForm");
const formCard = document.querySelector(".form--card");
const invalidLabel = document.querySelector(".invalid-label");
const submittedCard = document.querySelector(".submitted--card");
const inputField = document.querySelector("input");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  console.log("click");
  e.preventDefault();
  if (!validateEmail(inputField.value)) return;
  console.log("pass");
  formCard.classList.add("hidden");
  submittedCard.classList.remove("hidden");
  submittedCard.style.display;
}
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
inputField.addEventListener("input", () => {
  if (!validateEmail(inputField.value)) {
    console.log("false");
    inputField.classList.add("invalid-input");
    invalidLabel.classList.remove("hidden");
  } else {
    invalidLabel.classList.add("hidden");
    console.log("true");
    inputField.classList.remove("invalid-input");
  }
});
console.log("hello");
