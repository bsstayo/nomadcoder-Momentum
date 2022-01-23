const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const IMG_WAY = `./../../img/${chosenImage}`;
//https://bsstayo.github.io/nomadcoder-Momentum/img/0.jpg

document.body.style.backgroundImage = `url(https://bsstayo.github.io/nomadcoder-Momentum/img/${chosenImage})`;
