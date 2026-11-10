const Cidade = require('../models/Cidade');

module.exports = {
  async listar(req, res) {
    res.json(await Cidade.findAll({ order: [['nome', 'ASC']] }));
  },

  async criar(req, res) {
    const { nome, uf } = req.body;
    if (!nome || !uf) return res.status(400).json({ erro: 'Nome e UF são obrigatórios' });
    res.status(201).json(await Cidade.create({ nome, uf }));
  },
};
