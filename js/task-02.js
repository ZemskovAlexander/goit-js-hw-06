const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrEl = document.querySelector("ul");

const elements = ingredients.map((option) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = option;

  return ingredientsEl;
});

ingrEl.append(...elements);
