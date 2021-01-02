import people from "./data.js";

const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

container.innerHTML = people.map((person, slideIndex) => {
  const { img, name, job, text } = person;

  return;
});

nextBtn.addEventListener("click", () => {});
