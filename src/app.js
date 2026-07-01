'use strict';

const express = require('express');
const { getHealth } = require('./health');
const { getArtisans } = require('./artisans');

/**
 * Construit l'application Express.
 *
 * La création de l'app est séparée du démarrage du serveur HTTP
 * (voir server.js) afin de pouvoir importer `app` directement dans les
 * tests via supertest, sans ouvrir de vrai port réseau.
 */
function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({
      name: 'trustipro-api',
      description: "API de démonstration TrustiPro — kit de démarrage EC06",
      endpoints: ['/', '/health', '/artisans'],
    });
  });

  app.get('/health', async (req, res) => {
    const health = await getHealth();
    res.status(200).json(health);
  });

  app.get('/artisans', (req, res) => {
    res.status(200).json(getArtisans());
  });

  // Gestion explicite des routes non trouvées : on ne renvoie jamais de
  // page HTML par défaut, l'API reste cohérente en JSON sur toute route.
  app.use((req, res) => {
    res.status(404).json({ error: 'Route non trouvée' });
  });

  return app;
}

module.exports = { createApp };
