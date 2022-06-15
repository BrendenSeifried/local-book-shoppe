const pool = require('../utils/pool');

class Combo {
  id;
  author_id;
  book_id;
  writer;

  constructor(row) {
    this.id = row.id;
    this.author_id = row.author_id;
    this.book_id = row.book_id;
    this.writer = row.writer;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM combos');
    return Number(rows[0].count);
  }

  static async insert({ author_id, book_id, writer }) {
    const { rows } = await pool.query(
      'INSERT INTO authors (author_id, book_id) VALUES (1$, $2, $3) RETURNING *',
      [author_id, book_id, writer]
    );
    return new Combo(rows[0]);
  }
}

module.exports = Combo;
