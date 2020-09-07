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

  getContacts() {
    return new Promise((resolve, reject) => {
      this.client.query("SELECT * from users", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  findContact(phone) {
    return new Promise((resolve, reject) => {
      let q = "SELECT * FROM users WHERE phone='" + phone + "'";
      this.client.query(q, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  addContact(name, phone, email) {
    return new Promise((resolve, reject) => {
      let q = `INSERT INTO users(name, phone, email) VALUES('${name}',
        '${phone}', '${email}')`;
      this.client.query(q, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  updateContact(key, name, phone, email) {
    return new Promise((resolve, reject) => {
      let q = `UPDATE users SET name='${name}', phone='${phone}', email='${email}' WHERE phone='${key}'`;
      this.client.query(q, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  deleteContact(phone) {
    return new Promise((resolve, reject) => {
      let q = `DELETE FROM users WHERE phone='${phone}'`;
      this.client.query(q, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
