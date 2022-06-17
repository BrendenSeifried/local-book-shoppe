const pool = require('../utils/pool');

class Combo {
  id;
  author_id;
  book_id;

  constructor(row) {
    this.id = row.id;
    this.author_id = row.author_id;
    this.book_id = row.book_id;
  }
}

module.exports = Combo;
