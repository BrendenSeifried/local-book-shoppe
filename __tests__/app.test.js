const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('First test for Books', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('Checking that /books Renders a list of books.', async () => {
    const resp = await request(app).get('/books');
    expect(resp.body.length).toEqual(7);
    const test = resp.body.find((item) => item.id === '2');
    expect(test).toHaveProperty('title', 'My Sisters Keeper');
    expect(test).toHaveProperty('release', 2004);
  });
  afterAll(() => {
    pool.end();
  });
});
