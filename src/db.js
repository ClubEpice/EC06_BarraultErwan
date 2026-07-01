'use strict';

const { Pool } = require('pg');

/**
 * Pool de connexions PostgreSQL.
 *
 * La configuration est entièrement lue depuis les variables d'environnement
 * (voir .env.dist). Aucune valeur n'est codée en dur ici : le Pool tombera
 * naturellement en erreur de connexion si les variables ne sont pas
 * renseignées, ce qui est le comportement attendu en environnement de test
 * sans base de données disponible.
 */
const pool = new Pool({
  host: process.env.PGHOST || process.env.DB_HOST || 'localhost',
  port: Number(process.env.PGPORT || process.env.DB_PORT || 5432),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  // On limite le temps d'attente de connexion pour ne pas bloquer
  // longtemps les appels à /health si la base est inaccessible.
  connectionTimeoutMillis: 2000,
});

/**
 * Vérifie que la base de données répond.
 * @returns {Promise<boolean>} true si la connexion et la requête réussissent.
 */
async function checkDatabaseConnection() {
  try {
    await pool.query('SELECT 1');
    return true;
  } catch {
    return false;
  }
}

module.exports = { pool, checkDatabaseConnection };
