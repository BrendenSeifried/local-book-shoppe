const pool = require('../utils/pool.js');

class Author {
  id;
  writer;
  dob;
  pob;
  author_id;

  constructor(row) {
    this.id = row.id;
    this.writer = row.writer;
    this.pob = row.pob;
    this.dob = row.dob;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT id, writer FROM authors');
    return rows.map((item) => new Author(item));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM authors WHERE id=$1;', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Author(rows[0]);
  }
}

module.exports = Author;
