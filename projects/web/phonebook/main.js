const express = require("express");
const bp = require("body-parser");
const UserDB = require("./userdb");
const cors = require("cors");
const sessions = require("client-sessions");

const udb = new UserDB();
const app = express();
const port = 3001;
app.use(bp.json());
app.use(cors());
app.use(bp.urlencoded({ extended: true }));
app.use(
  sessions({
    cookieName: "mySession", // cookie name dictates the key name added to the request object
    secret: "blargadeeblargblarg", // should be a large unguessable string
    duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
    cookie: {
      path: "/", // cookie will only be sent to requests under '/api'
      maxAge: 60000, // duration of the cookie in milliseconds, defaults to duration above
      ephemeral: false, // when true, cookie expires when the browser closes
      httpOnly: true, // when true, cookie is not accessible from javascript
      secure: false // when true, cookie will only be sent over SSL. use key 'secureProxy' instead if you handle SSL not in your node process
    }
  })
);

app.listen(port, () => {
  console.log("Listening...");
});

udb.initDb();

app.post("/phonebook", (req, res) => {
  let user = req.body;
  udb
    .addContact(user.name, user.phone, user.email)
    .then(result => {
      res.send(
        JSON.stringify({
          status: "success",
          reason: "contact added successfully"
        })
      );
    })
    .catch(err => {
      res.send(
        JSON.stringify({
          status: "failure",
          reason: "insertion failure"
        })
      );
    });
});

app.get("/login", (req, res) => {
  console.log("login requested");
  res.sendFile("C://Users//ecvij//dev//projects//web//phonebook//login.html");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Done!");
});

app.get("/phonebook", (req, res) => {
  console.log(req.mySession);
  req.mySession.userId = 1000;
  res.redirect(301, "/login");
  return;
  udb
    .getContacts()
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      res.send("data not found..");
    });
});

app.get("/phonebook/:phone", (req, res) => {
  let phone = req.params.phone;
  let user = udb
    .findContact(phone)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      res.send("contact not found..");
    });
});

app.patch("/phonebook/:phone", (req, res) => {
  let usr = req.body;
  let key = req.params.phone;
  udb
    .updateContact(key, usr.name, usr.phone, usr.email)
    .then(result => {
      res.send("Updated successfully");
    })
    .catch(err => {
      res.send("contact not found..");
    });
});

app.delete("/phonebook/:phone", (req, res) => {
  let phone = req.params.phone;
  udb
    .deleteContact(phone)
    .then(result => {
      res.send("Deleted successfully!");
    })
    .catch(err => {
      res.send("cannot delete..");
    });
});

app.get("/toUpper", (req, res) => {
  let str = req.query.name;
  res.send(str.toUpperCase());
});
