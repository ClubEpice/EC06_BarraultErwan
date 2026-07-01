'use strict';

const { checkDatabaseConnection } = require('./db');

/**
 * Construit l'objet de statut de santé de l'API.
 *
 * Le statut applicatif (process Node.js up) est distingué du statut de la
 * base de données : une API peut être "up" tout en ayant perdu la
 * connexion à sa base, et c'est une information utile à exposer séparément
 * plutôt que de masquer l'un derrière l'autre.
 *
 * @returns {Promise<{status: string, database: string, timestamp: string}>}
 */
async function getHealth() {
  const databaseIsUp = await checkDatabaseConnection();

  return {
    status: 'ok',
    database: databaseIsUp ? 'connected' : 'unavailable',
    timestamp: new Date().toISOString(),
  };
}

module.exports = { getHealth };
