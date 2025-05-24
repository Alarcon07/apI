const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create(email, hashedPassword, (err, result) => {
    if (err) return res.status(500).json({ success: false, error: err });
    res.json({ success: true, message: 'Usuario registrado' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ success: false, message: 'Usuario no encontrado' });

    const validPassword = bcrypt.compareSync(password, results[0].password);
    if (!validPassword) return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  });
};