const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexBtn = document.querySelector(".hex-btn");
const bodyBcg = document.querySelector("body");
const hex = document.querySelector(".hex");

hexBtn.addEventListener("click", getHex);

function getHex() {
  let hexCode = "#";

  //generate the hex code
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCode += hexNumbers[random];
  }
  bodyBcg.style.backgroundColor = hexCode;
  hex.innerHTML = hexCode;
}
