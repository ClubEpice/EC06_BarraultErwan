'use strict';

/**
 * Jeu de données fictif d'artisans TrustiPro.
 *
 * Volontairement statique et en mémoire : cet endpoint sert de support à
 * l'épreuve CI/CD (EC06) et n'a pas vocation à représenter une véritable
 * couche de persistance. La connexion à PostgreSQL est exercée séparément
 * par /health (voir src/db.js).
 */
const artisans = [
  {
    id: 1,
    nom: 'Moreau Plomberie',
    metier: 'plombier',
    codePostal: '33600',
    note: 4.8,
  },
  {
    id: 2,
    nom: 'Lefèvre Électricité',
    metier: 'électricien',
    codePostal: '33000',
    note: 4.6,
  },
  {
    id: 3,
    nom: 'Atelier Dubreuil',
    metier: 'menuisier',
    codePostal: '33700',
    note: 4.9,
  },
  {
    id: 4,
    nom: 'Garcia Peinture & Déco',
    metier: 'peintre',
    codePostal: '33170',
    note: 4.5,
  },
];

/**
 * Retourne la liste des artisans.
 * @returns {Array<object>} la liste complète des artisans fictifs.
 */
function getArtisans() {
  return artisans;
}

module.exports = { getArtisans };
