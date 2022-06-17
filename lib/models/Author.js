const pool = require('../utils/pool.js');

class Author {
  id;
  writer;
  dob;
  pob;
  books;

  constructor(row) {
    this.id = row.id;
    this.writer = row.writer;
    this.pob = row.pob;
    this.dob = row.dob;
    this.books = row.books && row.books;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT id, writer FROM authors');
    return rows.map((item) => new Author(item));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT 
    authors.*,
    COALESCE(
      json_agg(to_jsonb(books)) FILTER (WHERE books.id IS NOT NULL), '[]'
    ) as books
  FROM authors
  LEFT JOIN combos on authors.id = combos.author_id
  LEFT JOIN books on books.id = combos.book_id
  WHERE authors.id = $1
  GROUP BY authors.id, books.id`,
      [id]
    );
    if (!rows[0]) return null;
    return new Author(rows[0]);
  }

  static async insert({ writer, dob, pob }) {
    const { rows } = await pool.query(
      'INSERT INTO authors (writer, dob, pob) VALUES ($1, $2, $3) RETURNING *',
      [writer, dob, pob]
    );
    return new Author(rows[0]);
  }
}

module.exports = Author;
