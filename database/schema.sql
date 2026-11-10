-- Rode no pgAdmin (Query Tool) conectado ao banco "cadastro"
-- Criar o banco antes: CREATE DATABASE cadastro;

CREATE TABLE IF NOT EXISTS cidades (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  uf CHAR(2) NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pessoas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(255),
  "cidadeId" INTEGER REFERENCES cidades(id) ON DELETE SET NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Dados de teste
INSERT INTO cidades (nome, uf) VALUES
  ('São Paulo', 'SP'), ('Rio de Janeiro', 'RJ'), ('Belo Horizonte', 'MG'), ('Curitiba', 'PR');

INSERT INTO pessoas (nome, email, telefone, "cidadeId") VALUES
  ('Maria Silva', 'maria@email.com', '11999999999', 1),
  ('João Souza', 'joao@email.com', '21988888888', 2);
