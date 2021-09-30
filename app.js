const Input = document.querySelector("input");
const btn = document.querySelector("button");
const errorText = document.querySelector(".error-text");

function validateEmailAddress(input) {
  var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (!regex.test(input)) {
    Input.classList.add("delete");
    btn.classList.remove("delete");
    errorText.classList.remove("delete");
  } else {
    btn.classList.add("delete");
    errorText.classList.add("delete");
    Input.classList.remove("delete");
  }
}

btn.addEventListener("click", () => {
  let getValue = Input.value;
  validateEmailAddress(getValue);
});

console.log(Input.classList);
