const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const option = images[0];

const imagesEl = document.querySelector("ul");


const elements = images.map((option) => {
  const imgEl = document.createElement("img");

  imgEl.alt = option.alt;
  imgEl.src = option.url;
  imgEl.width = 640;

  return imgEl;
});

imagesEl.append(...elements);

// imagesEl.insertAdjacentHTML("afterbegin", elements);
// `<li ><img width="270" src="${images.url}" alt="${images.alt}" /></li>`
