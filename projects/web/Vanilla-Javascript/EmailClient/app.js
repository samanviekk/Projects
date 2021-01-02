const emails = [
  {
    from: "kalyani@gmail.com",
    to: "abhav@gmail.com",
    subject: "hello",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptates tempora sequi quisquam ratione sed magni ipsa iste fugit voluptas hic, quos reiciendis? Maxime nisi cum esse eaque, harum deleniti?"
  },
  {
    from: "tanvi@gmail.com",
    to: "abhav@gmail.com",
    subject: "hello",
    body:
      "Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptates tempora sequi quisquam ratione sed magni ipsa iste fugit voluptas hic, quos reiciendis? Maxime nisi cum esse eaque, harum deleniti?"
  },
  {
    from: "sreecha@gmail.com",
    to: "abhav@gmail.com",
    subject: "hello",
    body:
      "Lorem 3ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptates tempora sequi quisquam ratione sed magni ipsa iste fugit voluptas hic, quos reiciendis? Maxime nisi cum esse eaque, harum deleniti?"
  },
  {
    from: "vj@gmail.com",
    to: "abhav@gmail.com",
    subject: "hello",
    body:
      "Lorem4 ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptates tempora sequi quisquam ratione sed magni ipsa iste fugit voluptas hic, quos reiciendis? Maxime nisi cum esse eaque, harum deleniti?"
  }
];

function main() {
  displayFolders();
  displayMsgList();
  displayCompleteMsg(0);
}

const folderUI = {
  f: document.querySelector(".folder"),
  setText: function (s) {
    this.f.innerHTML = s;
  }
};

function displayFolders() {
  let s = "inbox " + emails.length;
  folderUI.setText(s);
}

const msgListUI = {
  m: document.querySelector(".msg-list"),
  addMsg: function (from, to, sub, index) {
    let cDiv = document.createElement("div");
    cDiv.appendChild(document.createTextNode(from));
    cDiv.appendChild(document.createTextNode(to));
    cDiv.appendChild(document.createTextNode(sub));
    this.m.appendChild(cDiv);
    cDiv.addEventListener("click", () => {
      console.log("hey");
      displayCompleteMsg(index);
    });
  }
};

function displayMsgList() {
  emails.forEach((e, i) => {
    msgListUI.addMsg(e.from, e.to, e.subject, i);
  });
}

const completeMsgUI = {
  c: document.querySelector(".complete-msg"),
  showMsg: function (e) {
    this.c.innerHTML = e.body;
  }
};

function displayCompleteMsg(index) {
  completeMsgUI.showMsg(emails[index]);
}

main();
