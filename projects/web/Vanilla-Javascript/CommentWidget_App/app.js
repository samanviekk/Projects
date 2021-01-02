const commentWidget = {
  user: document.querySelector(".user-input"),
  input: document.querySelector(".comment-input"),
  submit: document.querySelector(".comment-btn"),
  cancel: document.querySelector(".cancel-btn"),
  getUser: function () {
    return this.user.value;
  },
  getText: function () {
    return this.input.value;
  },
  clearText: function () {
    this.input.value = "";
    this.user.value = "";
  }
};

const commentList = document.querySelector(".comment-list");

commentWidget.submit.addEventListener("click", commentCb);
commentWidget.cancel.addEventListener("click", cancelCb);

function commentCb(e) {
  e.preventDefault();
  let x = createComment(commentWidget.getUser(), commentWidget.getText());
  commentList.append(x);
  commentWidget.clearText();
}

function cancelCb(e) {
  e.preventDefault();
  commentWidget.clearText();
}

function createComment(user, comment) {
  const cDiv = document.createElement("div");
  cDiv.classList.add = "comment-div";
  cDiv.append(document.createTextNode(user));
  cDiv.append(document.createTextNode(comment));
  const replyBtn = document.createElement("button");
  replyBtn.classList.add = "reply-btn";
  replyBtn.innerHTML = "reply";
  let reply = "";
  const replyCancelCb = () => {
    cDiv.removeChild(reply);
  };
  const replyCb = (usr, txt) => {
    cDiv.removeChild(reply);
    cDiv.appendChild(createComment(usr, txt));
  };
  replyBtn.addEventListener("click", () => {
    reply = createReplyWidget(replyCancelCb, replyCb);
    cDiv.appendChild(reply);
  });
  cDiv.append(replyBtn);
  return cDiv;
}

function createReplyWidget(replyCancelCb, replyCb) {
  const replyForm = document.createElement("form");
  replyForm.classList.add = "reply-form";
  const replyUser = document.createElement("input");
  replyUser.classList.add = "reply-user";
  replyUser.setAttribute("placeholder", "Enter username..");
  const replyInput = document.createElement("input");
  replyInput.classList.add = "reply-input";
  replyInput.placeholder = "comment..";
  const replyBtn = document.createElement("button");
  replyBtn.classList.add = "reply-btn";
  replyBtn.innerHTML = "reply";
  replyBtn.addEventListener("click", () => {
    replyCb(replyUser.value, replyInput.value);
  });
  const replyCancel = document.createElement("button");
  replyCancel.classList.add = "reply-cancel";
  replyCancel.innerHTML = "cancel";
  replyCancel.addEventListener("click", replyCancelCb);
  replyForm.appendChild(replyUser);
  replyForm.appendChild(replyInput);
  replyForm.appendChild(replyBtn);
  replyForm.appendChild(replyCancel);
  return replyForm;
}
