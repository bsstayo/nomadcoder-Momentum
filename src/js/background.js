const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const IMG_WAY = `./../../img/${chosenImage}`;

document.body.style.backgroundImage = `url(${IMG_WAY})`;
