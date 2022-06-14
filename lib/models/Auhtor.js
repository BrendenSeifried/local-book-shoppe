const pool = require('../utils/pool.js');

class Author {
  id;
  writer;
  dob;

  constructor(row) {
    this.id = row.id;
    this.writer = row.writer;
    this.dob = row.dob;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT id, writer FROM authors');
    return rows.map((item) => new Author(item));
  }
}

module.exports = Author;
