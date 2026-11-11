const jogo = {
  type: 'object',
  properties: {
    titulo: { type: 'string', example: 'The Witcher 3' },
    plataforma: { type: 'string', example: 'PC' },
    ano: { type: 'integer', example: 2015 },
    generoId: { type: 'integer', example: 1 },
  },
};
const genero = {
  type: 'object',
  properties: { nome: { type: 'string', example: 'RPG' } },
};
const id = { name: 'id', in: 'path', required: true, schema: { type: 'integer' } };
const body = (schema) => ({ required: true, content: { 'application/json': { schema } } });

module.exports = {
  openapi: '3.0.0',
  info: { title: 'API de Jogos', version: '1.0.0' },
  paths: {
    '/jogos': {
      get: { summary: 'Listar jogos', responses: { 200: { description: 'OK' } } },
      post: { summary: 'Cadastrar jogo', requestBody: body(jogo), responses: { 201: { description: 'Criado' } } },
    },
    '/jogos/{id}': {
      get: { summary: 'Buscar jogo', parameters: [id], responses: { 200: { description: 'OK' } } },
      put: { summary: 'Atualizar jogo', parameters: [id], requestBody: body(jogo), responses: { 200: { description: 'OK' } } },
      delete: { summary: 'Excluir jogo', parameters: [id], responses: { 204: { description: 'Excluído' } } },
    },
    '/generos': {
      get: { summary: 'Listar gêneros', responses: { 200: { description: 'OK' } } },
      post: { summary: 'Cadastrar gênero', requestBody: body(genero), responses: { 201: { description: 'Criado' } } },
    },
  },
};
