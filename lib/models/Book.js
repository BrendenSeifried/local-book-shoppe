const pool = require('../utils/pool');

class Book {
  id;
  title;
  release;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.release = row.release;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM books;');
    return rows.map((item) => new Book(item));
  }
}

module.exports = Book;
