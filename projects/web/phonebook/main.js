const express = require("express");
const bp = require("body-parser");

const app = express();
const port = 3001;
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Listening...");
});

app.post("/phonebook", (req, res) => {
  console.log("Post ", req.body);
  let user = req.body;
  addContact(user);
  res.send("Added Contact Successfullu");
});

let data = [
  {
    name: "abhav",
    phone: "100",
    email: "abhav@gmail.com"
  },
  {
    name: "sreecha",
    phone: "200",
    email: "sreecha@gmail.com"
  },
  {
    name: "tanvi",
    phone: "300",
    email: "tanvi@gmail.com"
  }
];

app.get("/phonebook", (req, res) => {
  console.log("Get ", req.params, req.query);
  res.send(JSON.stringify(data));
});

app.get("/phonebook/:phone", (req, res) => {
  console.log("Get_id", req.params, req.query, req.path);
  let phone = req.params.phone;
  let user = findContact(phone);
  console.log(user);
  res.send(JSON.stringify(user));
});

app.patch("/phonebook/:phone", (req, res) => {
  let usr = req.body;
  let status = updateUser(usr);
  let str = status ? "updated successfully" : "contact not found";
  res.send(str);
});
app.delete("/phonebook/:phone", (req, res) => {
  let phone = req.params.phone;
  let result = deleteContact(phone);
  let str = result ? "Success" : "Contact not found";
  res.send(str);
});

app.get("/toUpper", (req, res) => {
  let str = req.query.name;
  res.send(str.toUpperCase());
});

const findContact = phone => {
  /* for (let i = 0; i < data.length; i++){
      let user = data[i]
      if(user.phone === phone) {
        return user
      }
    } */
  return data.filter(user => {
    if (user.phone === phone) {
      return user;
    }
  });
};

const deleteContact = phone => {
  let found = false;
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let usr = data[i];
    if (usr.phone !== phone) {
      result.push(usr);
    } else {
      found = true;
    }
  }
  data = result;
  return found;
};

const addContact = usr => {
  data.push(usr);
};

const updateUser = usr => {
  let found = false;
  for (let i = 0; i < data.length; i++) {
    let u = data[i];
    if (u.phone === usr.phone) {
      found = true;
      u.name = usr.name;
      u.email = usr.email;
    }
  }
  return found;
};
