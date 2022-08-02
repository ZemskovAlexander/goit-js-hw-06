const refs = {
  input: document.querySelector("input"),
  nameLabel: document.querySelector("#name-output"),
  placeHolder: document.querySelector("placeholder"),
  validationInputInvalid: document.querySelector("#validation-input"),
  dataLengthCheck: document.querySelector("data-length"),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value);
  if (
    event.currentTarget.value.length === Number(refs.input.getAttribute("data-length"))
  ) {
    return (
      refs.validationInputInvalid.classList.add("valid"),
      refs.validationInputInvalid.classList.remove("invalid")
    );
  }

  return refs.validationInputInvalid.classList.add("invalid"),
    refs.validationInputInvalid.classList.remove("valid");
}







// refs.input.addEventListener("submit", onFormSubmit);
// refs.input.addEventListener("input", onInputChange);

// refs.input.classList.add("text", inputText);

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log("инпут потерял фокус");
//   console.log(event.currentTarget);

//   if (textInput.value === "") {
//     return console.log("Please fill in all the fields!");
//   }
// }
// console.log(refs.input.getAttribute("data-length"));
