const container = document.querySelector(".images");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 0;

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function nextSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
  if (counter === 5) {
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(img/bcg${counter}.png)`;
}

function prevSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
  if (counter === 0) {
    counter = 6;
  }
  counter--;
  container.style.backgroundImage = `url(img/bcg${counter}.png)`;
}
