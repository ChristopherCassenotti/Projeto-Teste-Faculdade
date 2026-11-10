const Pessoa = require('../models/Pessoa');
const Cidade = require('../models/Cidade');

module.exports = {
  async listar(req, res) {
    const pessoas = await Pessoa.findAll({ include: Cidade, order: [['id', 'ASC']] });
    res.json(pessoas);
  },

  async buscar(req, res) {
    const pessoa = await Pessoa.findByPk(req.params.id, { include: Cidade });
    if (!pessoa) return res.status(404).json({ erro: 'Pessoa não encontrada' });
    res.json(pessoa);
  },

  async criar(req, res) {
    const { nome, email, telefone, cidadeId } = req.body;
    if (!nome || !email) return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    const pessoa = await Pessoa.create({ nome, email, telefone, cidadeId: cidadeId || null });
    res.status(201).json(pessoa);
  },

  async atualizar(req, res) {
    const pessoa = await Pessoa.findByPk(req.params.id, { include: Cidade });
    if (!pessoa) return res.status(404).json({ erro: 'Pessoa não encontrada' });
    await pessoa.update({ ...req.body, cidadeId: req.body.cidadeId || null });
    res.json(pessoa);
  },

  async excluir(req, res) {
    const pessoa = await Pessoa.findByPk(req.params.id, { include: Cidade });
    if (!pessoa) return res.status(404).json({ erro: 'Pessoa não encontrada' });
    await pessoa.destroy();
    res.status(204).send();
  },
};
