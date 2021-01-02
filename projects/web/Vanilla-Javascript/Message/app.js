const msgInput = document.querySelector(".msg-input");
const msgBtn = document.querySelector(".msg-btn");
const msg = document.querySelector("#msg");

msgBtn.addEventListener("click", displayMsg);

function displayMsg() {
  let txt = msgInput.value;
  console.log(txt);
  if (txt === "") {
    alert("please enter the input");
  }
  msg.innerHTML = txt;
  msgInput.value = "";
}
