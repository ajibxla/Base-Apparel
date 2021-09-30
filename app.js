const input = document.querySelector(".input");
const btn = document.querySelector("button");
const errorText = document.querySelector(".error-text");

function validateEmailAddress(input) {
  var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (regex.test(input)) {
    btn.classList.add("delete");
    errorText.classList.add("delete");
  } else {
    btn.classList.remove("delete");
    errorText.classList.remove("delete");
  }
}

btn.addEventListener("click", () => {
  let getValue = input.value;
  validateEmailAddress(getValue);
});
