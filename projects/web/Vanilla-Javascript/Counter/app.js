const counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowCount = document.querySelector("#lowCountBtn");

let count = 0;

addCount.addEventListener("click", incrementCounter);
lowCount.addEventListener("click", decrementCounter);

function incrementCounter() {
  count += 1;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "green";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 500,
    fill: "forwards"
  });
}

function decrementCounter() {
  count -= 1;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 500,
    fill: "forwards"
  });
}
