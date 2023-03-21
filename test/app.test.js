import { describe, it, expect } from 'vitest';

const request = require('supertest');

const app = require('../src/app');

describe('app', () => {
  it('responds with a not found message', async () => {
    const response = await request(app)
      .get('/what-is-this-even')
      .set('Accept', 'application/json');
    expect(response.header['content-type']).toMatch('application/json');
    expect(response.status).toEqual(404);
  });
});

describe('GET /', () => {
  it('responds with a json message', async () => {
    const response = await request(app)
      .get('/')
      .set('Accept', 'application/json');
    expect(response.header['content-type']).toMatch('application/json');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
  });
});
