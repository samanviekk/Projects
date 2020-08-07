const express = require("express");
const bp = require("body-parser");
const UserDB = require("./userdb");
const cors = require("cors");

const udb = new UserDB();
const app = express();
const port = 3001;
app.use(bp.json());
app.use(cors());
app.use(bp.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Listening...");
});

udb.initDb();

app.post("/phonebook", (req, res) => {
  let user = req.body; // { name: "vijay", phone: "408", email:"v@gmail.com"
  udb.addContact(user.name, user.phone, user.email, (err, dbres) => {
    if (err) {
      res.send("Cannot insert..");
      return;
    }
    res.send("Added contact successfully");
  });
});

app.get("/phonebook", (req, res) => {
  udb.getContacts((err, dbres) => {
    if (err) {
      res.send("data not found..");
      return;
    }
    res.send(dbres.rows);
  });
});

app.get("/phonebook/:phone", (req, res) => {
  console.log("Get_id", req.params, req.query, req.path);
  let phone = req.params.phone;
  let user = udb.findContact(phone, (err, dbres) => {
    if (err) {
      res.send("contact not found..");
      return;
    } else {
      res.send(dbres.rows);
    }
  });
});

app.patch("/phonebook/:phone", (req, res) => {
  let usr = req.body;
  let key = req.params.phone;
  console.log(usr);
  console.log(key);
  udb.updateContact(key, usr.name, usr.phone, usr.email, (err, dbres) => {
    if (err) {
      res.send("contact not found..");
      return;
    }
    res.send("Updated successfully");
  });
});

app.delete("/phonebook/:phone", (req, res) => {
  let phone = req.params.phone;
  udb.deleteContact(phone, (err, dbres) => {
    if (err) {
      res.send("cannot delete..");
      return;
    }
    res.send("Deleted successfully");
  });
});

app.get("/toUpper", (req, res) => {
  let str = req.query.name;
  res.send(str.toUpperCase());
});
