const refs = {
  input: document.querySelector("#validation-input"),
  nameLabel: document.querySelector("#name-output"),
  placeHolder: document.querySelector("placeholder"),
  validationInputInvalid: document.querySelector("#validation-input.invalid"),
  dataLengthCheck: document.querySelector("data-length"),
};

refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("submit", onFormSubmit);
// refs.input.addEventListener("input", onInputChange);

refs.input.classList.add("text");

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log("инпут потерял фокус");
//   console.log(event.currentTarget);

//   if (textInput.value === "") {
//     return console.log("Please fill in all the fields!");
//   }
// }
console.log(dataLengthCheck.textContent);

function onInputBlur(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === dataLengthCheck) {
    return console.log("Please fill in all the fields!");
  }
}
