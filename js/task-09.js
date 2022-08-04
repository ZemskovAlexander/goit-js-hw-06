function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const singleBtn = document.querySelector("body");
const text = document.querySelector("span");

const handleClick = () => {
  const randomColor = getRandomHexColor();
  return (
    (singleBtn.style.backgroundColor = randomColor),
    (text.textContent = randomColor)
  );
};

singleBtn.addEventListener("click", handleClick);
