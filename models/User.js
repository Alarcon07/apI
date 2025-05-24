const db = require('../config/db');

const User = {
  create: (email, password, callback) => {
    db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, password], callback);
  },
  findByEmail: (email, callback) => {
    db.query("SELECT * FROM usuarios WHERE email = ?", [email], callback);
  }
};

module.exports = User;