# trustipro-api

Mini API Express fournie comme base pour l'épreuve EC06 (CI/CD avec GitHub Actions et Docker).

## Démarrage en local

```bash
npm install
npm start
```

L'API démarre sur `http://localhost:3000`.

## Endpoints

| Méthode | Route | Description |
|---|---|---|
| GET | `/` | Informations sur l'API |
| GET | `/health` | Statut de l'API et de la connexion PostgreSQL |
| GET | `/artisans` | Liste fictive d'artisans |

## Variables d'environnement

L'API attend les variables suivantes (voir `.env.dist` à créer) :

```
PORT=3000
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

Sans base de données accessible, `/health` répond tout de même avec le statut 200 et indique `"database": "unavailable"`.

## Tests et lint

```bash
npm test
npm run lint
```

## À faire

Le code applicatif n'est pas à modifier sauf nécessité. Le reste de la chaîne (Dockerfile, docker-compose, CI/CD, gestion des secrets) reste à construire — voir l'énoncé de l'épreuve.
