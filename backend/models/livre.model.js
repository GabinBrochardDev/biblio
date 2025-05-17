const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Auteur = require('./auteur.model');
const Emplacement = require('./emplacement.model');


const Livre = sequelize.define('Livre', {
  titre: { type: DataTypes.STRING, allowNull: false },
  resume: { type: DataTypes.TEXT },
  imageCouverture: { type: DataTypes.STRING },
  genre: { type: DataTypes.STRING },
  datePublication: { type: DataTypes.DATE },
  isbn: { type: DataTypes.STRING },
  maisonEdition: { type: DataTypes.STRING },
}, {
  timestamps: true,
});

// Relation : un livre appartient à un auteur
Livre.belongsTo(Auteur, { foreignKey: 'auteurId' });
Auteur.hasMany(Livre, { foreignKey: 'auteurId' });

// Relation : un livre appartient à un emplacement
Livre.belongsTo(Emplacement, { foreignKey: 'emplacementId' });
Emplacement.hasMany(Livre, { foreignKey: 'emplacementId' });


module.exports = Livre;
