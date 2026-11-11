const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Genero = require('./Genero');

const Jogo = sequelize.define('Jogo', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  plataforma: { type: DataTypes.STRING, allowNull: false },
  ano: { type: DataTypes.INTEGER },
}, { tableName: 'jogos' });

// Um genero tem varios jogos; cada jogo pertence a um genero
Genero.hasMany(Jogo, { foreignKey: 'generoId' });
Jogo.belongsTo(Genero, { foreignKey: 'generoId' });

module.exports = Jogo;
