const app = require('../src/app');
const catsData = require('../src/cats/cat-service');

describe('App', () => {
  it('GET /api/cat responds with {catsData}', () => {
    return supertest(app)
      .get('/api/cat')
      .expect(200);
  })
});
