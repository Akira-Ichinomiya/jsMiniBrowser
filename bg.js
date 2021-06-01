const body = document.querySelector("body");

const IMAGE_NUMBER = 4;

function handleImageLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpeg`;
  image.classList.add("bgimage");
  body.appendChild(image);
}

function getRandom() {
  const number = parseInt(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
