const refs = {
  input: document.querySelector("input"),
  nameLabel: document.querySelector("#name-output"),
  placeHolder: document.querySelector("placeholder"),
  validationInputInvalid: document.querySelector("#validation-input.invalid"),
  dataLengthCheck: document.querySelector("data-length"),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value);
  if (event.target.elements === refs.input.getAttribute("data-length").length); {
    console.log("submit...", event.target.elements);

    return console.log('Вписали 6 символов');
  }
  
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
