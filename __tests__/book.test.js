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

  // it('Rendering a single book with related info', async () => {
  //   const resp = await request(app).get('/books/5');
  //   const test = {
  //     id: '5',
  //     title: 'The Late Great Me',
  //     release: 1976,
  //   };
  //   expect(resp.body).toEqual(test);
  // });

  it('Rendering a single book with related info', async () => {
    const resp = await request(app).get('/books/5');
    const test = {
      id: '8',
      title: 'The Late Great Me',
      release: 1976,
      authors: [
        {
          id: 8,
          dob: '6.14.1936',
          pob: 'Morristown, New Jersey, U.S.',
          writer: 'Sandra Scoppettone',
        },
      ],
    };
    expect(resp.body).toEqual(test);
  });

  afterAll(() => {
    pool.end();
  });
});
