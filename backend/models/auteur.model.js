const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Auteur = sequelize.define('Auteur', {
  nom: { type: DataTypes.STRING, allowNull: false }
}, {
  timestamps: true,
});

module.exports = Auteur;
