const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cidade = require('./Cidade');

const Pessoa = sequelize.define('Pessoa', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING },
}, { tableName: 'pessoas' });

// Uma cidade tem várias pessoas; cada pessoa pertence a uma cidade
Cidade.hasMany(Pessoa, { foreignKey: 'cidadeId' });
Pessoa.belongsTo(Cidade, { foreignKey: 'cidadeId' });

module.exports = Pessoa;
