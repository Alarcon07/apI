const Product = require('../models/Product');

exports.getAll = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json(results);
  });
};

exports.create = (req, res) => {
  const { name, price, image } = req.body;

  Product.create(name, price, image, (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, message: 'Producto agregado' });
  });
};

exports.update = (req, res) => {
  const { name, price, image } = req.body;
  const { id } = req.params;

  Product.update(id, name, price, image, (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, message: 'Producto actualizado' });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Product.delete(id, (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, message: 'Producto eliminado' });
  });
};