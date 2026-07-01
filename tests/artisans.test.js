'use strict';

const request = require('supertest');
const { createApp } = require('../src/app');

describe('GET /artisans', () => {
  const app = createApp();

  it('répond avec le statut 200', async () => {
    const response = await request(app).get('/artisans');
    expect(response.status).toBe(200);
  });

  it('retourne un tableau non vide', async () => {
    const response = await request(app).get('/artisans');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('chaque artisan possède les champs attendus', async () => {
    const response = await request(app).get('/artisans');
    response.body.forEach((artisan) => {
      expect(artisan).toHaveProperty('id');
      expect(artisan).toHaveProperty('nom');
      expect(artisan).toHaveProperty('metier');
      expect(artisan).toHaveProperty('codePostal');
    });
  });
});
