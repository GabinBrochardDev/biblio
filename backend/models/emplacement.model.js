const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Emplacement = sequelize.define('Emplacement', {
  nom: { type: DataTypes.STRING, allowNull: false }
}, {
  timestamps: true,
});

module.exports = Emplacement;
