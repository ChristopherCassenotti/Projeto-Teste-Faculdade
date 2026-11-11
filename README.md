# Cadastro de Jogos

CRUD de jogos com **Backend** (Node, Express, Sequelize, Swagger, PostgreSQL) e **Frontend** (React, React Router).

- `backend/`  API em MVC (models, controllers, routes)
- `frontend/` Interface React (components, pages, services, docs)
- `database/` script SQL do banco

## Como rodar

1. No pgAdmin, crie o banco `cadastro` e rode o script `database/schema.sql` (Query Tool).
2. Backend: `cd backend`, copie `.env.example` para `.env` (ajuste DB_PASS), depois `npm install` e `npm run dev`.
   API em http://localhost:3000 e Swagger em http://localhost:3000/api-docs
3. Frontend: `cd frontend`, `npm install` e `npm run dev`. Acesse http://localhost:5173

O banco tem duas tabelas: `generos` e `jogos` (cada jogo pertence a um gênero).
