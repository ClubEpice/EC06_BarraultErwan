'use strict';

const request = require('supertest');
const { createApp } = require('../src/app');

describe('GET /', () => {
  const app = createApp();

  it('répond avec le statut 200 et la liste des endpoints', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('endpoints');
    expect(response.body.endpoints).toContain('/health');
  });
});

describe('Route inconnue', () => {
  const app = createApp();

  it('répond avec le statut 404 en JSON', async () => {
    const response = await request(app).get('/route-inexistante');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });
});
