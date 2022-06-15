const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Combo = require('../lib/models/Combo');

describe('quotes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  //   it('Testing adding a new author.', async () => {
  //     const test = new Combo({
  //       author_id: '9',
  //       book_id: '9',
  //       writer: 'Does the new addition work',
  //     });
  //     const res = await request(app).post('/quotes').send(test);
  //     expect(res.body.author_id).toEqual(test.author_id);
  //     expect(res.body.book_id).toEqual(test.book_id);
  //     expect(res.body.detail).toEqual(test.detail);
  //     const count = await Combo.count();
  //     expect(count).toEqual(10);
  //   });

  afterAll(() => {
    pool.end();
  });
});
