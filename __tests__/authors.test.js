const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Testing authors', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('Test for /authors list', async () => {
    const resp = await request(app).get('/authors');
    expect(resp.body.length).toEqual(8);
  });
  afterAll(() => {
    pool.end();
  });
});
