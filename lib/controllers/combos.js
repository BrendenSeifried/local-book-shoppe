const { Router } = require('express');
const Combo = require('../models/Combo');

module.exports = Router().post('/', async (req, res) => {
  const addition = await Combo.insert(req.body);
  res.json(addition);
});
