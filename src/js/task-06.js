const refs = {
  input: document.querySelector("#validation-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur);

function onInputFocus() {
  console.log('инпут получил фокус');
  
}

function onInputBlur() {
  console.log("инпут потерял фокус");
}