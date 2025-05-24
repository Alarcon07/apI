const db = require('../config/db');

const Product = {
  getAll: (callback) => db.query("SELECT * FROM productos", callback),
  create: (name, price, image, callback) => db.query("INSERT INTO productos (name, price, image) VALUES (?, ?, ?)", [name, price, image], callback),
  update: (id, name, price, image, callback) => db.query("UPDATE productos SET name=?, price=?, image=? WHERE id=?", [name, price, image, id], callback),
  delete: (id, callback) => db.query("DELETE FROM productos WHERE id=?", [id], callback),
};

module.exports = Product;