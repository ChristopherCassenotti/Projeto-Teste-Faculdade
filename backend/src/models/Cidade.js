const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cidade = sequelize.define('Cidade', {
  nome: { type: DataTypes.STRING, allowNull: false },
  uf: { type: DataTypes.STRING(2), allowNull: false },
}, { tableName: 'cidades' });

module.exports = Cidade;
