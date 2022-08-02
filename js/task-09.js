function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const singleBtn = document.querySelector("body");

const handleClick = () => {
  console.log("click event listener callback");
  return (singleBtn.style.backgroundColor = getRandomHexColor());
};

singleBtn.addEventListener("click", handleClick);
