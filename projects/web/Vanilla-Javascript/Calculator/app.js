const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

for (let i = 0; i < btns.length; i++) {
  console.log(btns[i]);
  btns[i].addEventListener("click", function () {
    let number = btns[i].getAttribute("data-num");
    console.log(number);
    screen.value += number;
  });
}

equalBtn.addEventListener("click", function () {
  if (screen.value === "") {
    alert("input is empty");
  } else {
    console.log(screen.value);
    let value = eval(screen.value);
    screen.value = value;
  }
});

clearBtn.addEventListener("click", function () {
  screen.value = "";
});
