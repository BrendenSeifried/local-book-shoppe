const { Router } = require('express');
const Author = require('../models/Auhtor');

module.exports = Router().get('/', async (req, res) => {
  const everyAuthor = await Author.getAll();
  res.json(everyAuthor);
});
