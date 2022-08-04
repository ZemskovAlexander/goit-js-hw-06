const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
  spanText: document.querySelector("span")
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
  
   if ((refs.nameLabel.textContent = "")) {
     return refs.nameLabel.textContent.innerHTML(
       "beforebegin",
       `<h1>Hello, <span id="name-output">Anonymous</span>!</h1>`
     );
   }
 
  }
