const counter = {
  value: 0,
  increment() {
    console.log("increment-> this", this);
    this.value += 1;
  },

  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};
const actions = document.querySelectorAll("#counter button");

// const decrementBtn = actions[0].dataset.action;
// const incrementBtn = actions[1].dataset.action;

const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const counterValue = document.querySelector("#value");

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue);

decrementBtn.addEventListener("click", function () {
  console.log("клик на декремент");
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  console.log("клик на инкремент");
  counter.increment();
  counterValue.textContent = counter.value;
});
