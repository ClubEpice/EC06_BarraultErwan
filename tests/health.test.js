'use strict';

const request = require('supertest');
const { createApp } = require('../src/app');

describe('GET /health', () => {
  const app = createApp();

  it("répond avec le statut 200", async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });

  it("retourne un statut applicatif 'ok'", async () => {
    const response = await request(app).get('/health');
    expect(response.body.status).toBe('ok');
  });

  it("indique un champ database et un timestamp ISO valides", async () => {
    const response = await request(app).get('/health');
    expect(['connected', 'unavailable']).toContain(response.body.database);
    expect(new Date(response.body.timestamp).toString()).not.toBe('Invalid Date');
  });
});
