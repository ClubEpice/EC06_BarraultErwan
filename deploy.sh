#!/usr/bin/env bash
set -euo pipefail

# Déploiement SIMULÉ pour l'épreuve EC06.
# On n'exécute rien de réel : on trace les commandes qui seraient lancées
# sur le VPS de recette, et on écrit un journal deploy.log publié en artefact.

IMAGE_TAG="${1:-latest}"
LOG_FILE="deploy.log"

{
  echo "===== Déploiement TrustiPro (simulé) ====="
  echo "Image ciblée : trustipro-api:${IMAGE_TAG}"
  echo ""
  echo "[1/3] Récupération de l'image :"
  echo "      docker pull ghcr.io/clubepice/ec06_barraulterwan:${IMAGE_TAG}"
  echo "[2/3] Arrêt de l'ancien conteneur :"
  echo "      docker rm -f trustipro-api || true"
  echo "[3/3] Démarrage du nouveau conteneur :"
  echo "      docker run -d --name trustipro-api -p 3000:3000 --env-file .env \\"
  echo "                 ghcr.io/clubepice/ec06_barraulterwan:${IMAGE_TAG}"
  echo ""
  echo "Déploiement simulé terminé avec succès."
} | tee "${LOG_FILE}"
