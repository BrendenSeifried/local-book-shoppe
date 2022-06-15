const pool = require('../utils/pool');
const Author = require('./Author');

class Book {
  id;
  title;
  release;
  authors;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.release = row.release;
    this.authors =
      // row.authors.length > 0 ? row.authors.map((item) => new Author(item)) : [];
      row.authors && row.authors;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM books;');
    return rows.map((item) => new Book(item));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT 
      books.title, authors.*,
      COALESCE(
        json_agg(to_jsonb(authors)) FILTER (WHERE authors.id IS NOT NULL), '[]'
      ) as authors
    FROM books
    LEFT JOIN combos on books.id = combos.book_id
    LEFT JOIN authors on authors.id = combos.author_id
    WHERE books.id = $1
    GROUP BY books.id, authors.id`,
      [id]
    );
    if (!rows[0]) return null;
    return new Book(rows[0]);
  }
}

module.exports = Book;
