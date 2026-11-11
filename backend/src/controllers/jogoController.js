const Jogo = require('../models/Jogo');
const Genero = require('../models/Genero');

// Monta os dados do jogo a partir do corpo da requisicao
function dados(body) {
  return {
    titulo: body.titulo,
    plataforma: body.plataforma,
    ano: body.ano || null,
    generoId: body.generoId || null,
  };
}

module.exports = {
  async listar(req, res) {
    const jogos = await Jogo.findAll({ include: Genero, order: [['id', 'ASC']] });
    res.json(jogos);
  },

  async buscar(req, res) {
    const jogo = await Jogo.findByPk(req.params.id, { include: Genero });
    if (!jogo) return res.status(404).json({ erro: 'Jogo não encontrado' });
    res.json(jogo);
  },

  async criar(req, res) {
    const { titulo, plataforma } = req.body;
    if (!titulo || !plataforma) {
      return res.status(400).json({ erro: 'Título e plataforma são obrigatórios' });
    }
    const jogo = await Jogo.create(dados(req.body));
    res.status(201).json(jogo);
  },

  async atualizar(req, res) {
    const jogo = await Jogo.findByPk(req.params.id);
    if (!jogo) return res.status(404).json({ erro: 'Jogo não encontrado' });
    await jogo.update(dados(req.body));
    res.json(jogo);
  },

  async excluir(req, res) {
    const jogo = await Jogo.findByPk(req.params.id);
    if (!jogo) return res.status(404).json({ erro: 'Jogo não encontrado' });
    await jogo.destroy();
    res.status(204).send();
  },
};
