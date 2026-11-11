const Genero = require('../models/Genero');

module.exports = {
  async listar(req, res) {
    res.json(await Genero.findAll({ order: [['nome', 'ASC']] }));
  },

  async criar(req, res) {
    const { nome } = req.body;
    if (!nome) return res.status(400).json({ erro: 'Nome é obrigatório' });
    res.status(201).json(await Genero.create({ nome }));
  },
};
