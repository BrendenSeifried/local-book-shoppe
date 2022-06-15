const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Combo = require('../lib/models/Combo');

describe('testing adding a book', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should add new book', async () => {
    const trial = new Combo({
      author_id: 8,
      book_id: 7,
    });
    const res = await request(app).post('/combos').send(trial);
    expect(res.body.author_id).toEqual(trial.author_id);
    expect(res.body.book_id).toEqual(trial.book_id);
    const count = await Combo.count();
    expect(count).toEqual(9);
  });
  afterAll(() => {
    pool.end();
  });
});
