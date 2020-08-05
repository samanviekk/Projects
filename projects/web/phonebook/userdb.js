const { Client } = require("pg");

module.exports = class UserDB {
  constructor() {
    this.client = new Client({
      host: "localhost",
      user: "postgres",
      password: "1234",
      database: "usersdb"
    });
  }
  initDb() {
    this.client.connect();
  }

  getContacts(cb) {
    this.client.query("SELECT * from users", (err, res) => {
      cb(err, res);
    });
  }

  findContact(phone, cb) {
    let q = "SELECT * FROM users WHERE phone='" + phone + "'";
    this.client.query(q, (err, res) => {
      cb(err, res);
    });
  }

  addContact(name, phone, email, cb) {
    let q = `INSERT INTO users(name, phone, email) VALUES('${name}',
        '${phone}', '${email}')`;
    this.client.query(q, (err, res) => {
      cb(err, res);
    });
  }

  updateContact(key, name, phone, email, cb) {
    let q = `UPDATE users SET name='${name}', phone='${phone}', email='${email}' WHERE phone='${key}'`;
    this.client.query(q, (err, res) => {
      cb(err, res);
    });
  }

  deleteContact(phone, cb) {
    let q = `DELETE FROM users WHERE phone='${phone}'`;
    this.client.query(q, (err, res) => {
      cb(err, res);
    });
  }
};
