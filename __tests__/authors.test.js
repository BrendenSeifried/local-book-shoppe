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
    const test = resp.body.find((item) => item.id === '6');
    expect(test).toHaveProperty('writer', 'Jodi Picoult');
  });

  // it('Test for individual authors id route ', async () => {
  //   const resp = await request(app).get('/authors/3');
  //   const Voss = {
  //     id: '3',
  //     writer: 'Chris Voss',
  //     pob: 'Mt. Pleasant, Iowa, U.S.',
  //     dob: '11.28.1957',
  //   };
  //   expect(resp.body).toEqual(Voss);
  // });

  it('Test for individual authors id route ', async () => {
    const resp = await request(app).get('/authors/3');
    const Voss = {
      id: '4',
      dob: '11.28.1957',
      writer: 'Chris Voss',
      pob: 'Mt. Pleasant, Iowa, U.S.',
      books: [
        {
          id: 4,
          release: 2016,
          title: 'Never Split The Difference',
        },
      ],
    };
    expect(resp.body).toEqual(Voss);
  });

  afterAll(() => {
    pool.end();
  });
});
