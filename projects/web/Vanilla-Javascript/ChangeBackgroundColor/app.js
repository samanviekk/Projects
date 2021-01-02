const colorBtn = document.querySelector(".color-btn");
const bodyBcg = document.querySelector("body");

const colors = [
  "lightpink",
  "lightgrey",
  "cyan",
  "lightsalmon",
  "lightgreen",
  "lightyellow"
];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);

  bodyBcg.style.backgroundColor = colors[random];
}
