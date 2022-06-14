const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const oneAuthor = await Author.getById(id);
    res.json(oneAuthor);
  })

  .get('/', async (req, res) => {
    const everyAuthor = await Author.getAll();
    res.json(everyAuthor);
  });
