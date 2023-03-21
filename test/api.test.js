import { describe, it, expect } from 'vitest';

const request = require('supertest');
const app = require('../src/app');

describe('GET /api/v1', async () => {
  it('responds with a json message', async () => {
    const response = await request(app)
      .get('/api/v1')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch('application/json');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      message: 'API - 👋🌎🌍🌏',
    });
  });
});

describe('GET /api/v1/emojis', () => {
  it('responds with a json message of emojis', async () => {
    const response = await request(app)
      .get('/api/v1/emojis')
      .set('Accept', 'application/json');
    expect(response.header['content-type']).toMatch('application/json');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(['😀', '😳', '🙄']);
  });
});

describe('GET /api/v1/hello', () => {
  it('responds with message: "Hello World!"', async () => {
    const response = await request(app)
      .get('/api/v1/hello')
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch('application/json');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      message: 'Hello World!',
    });
  });
});
