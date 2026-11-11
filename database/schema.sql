-- Rode no pgAdmin (Query Tool) conectado ao banco "cadastro"
-- Criar o banco antes: CREATE DATABASE cadastro;

-- Se voce ja tinha criado as tabelas antigas, descomente a linha abaixo:
-- DROP TABLE IF EXISTS pessoas, cidades;

CREATE TABLE IF NOT EXISTS generos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS jogos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  plataforma VARCHAR(255) NOT NULL,
  ano INTEGER,
  "generoId" INTEGER REFERENCES generos(id) ON DELETE SET NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Dados de teste
INSERT INTO generos (nome) VALUES
  ('Ação'), ('Aventura'), ('RPG'), ('Esporte'), ('Corrida'), ('Estratégia');

INSERT INTO jogos (titulo, plataforma, ano, "generoId") VALUES
  ('The Witcher 3', 'PC', 2015, 3),
  ('God of War', 'PlayStation', 2018, 1),
  ('Forza Horizon 5', 'Xbox', 2021, 5);
