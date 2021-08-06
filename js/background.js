const bg = document.getElementById("background");
const imgages = ["0.jpg", "1.jpg", "2.jpg"];

const random = Math.floor(Math.random() * imgages.length);
const todaysImage = imgages[random];

const bgImage = document.createElement("img");
bgImage.src = `memomentum/img/${todaysImage}`;

bg.appendChild(bgImage);
