const Livre = require('../models/livre.model');
const Auteur = require('../models/auteur.model');
const Emplacement = require('../models/emplacement.model');


exports.creerLivre = async (req, res) => {
  try {
    const { auteurNom, emplacementNom, ...livreData } = req.body;

    let auteur = await Auteur.findOne({ where: { nom: auteurNom } });
    if (!auteur) auteur = await Auteur.create({ nom: auteurNom });

    let emplacement = await Emplacement.findOne({ where: { nom: emplacementNom } });
    if (!emplacement) emplacement = await Emplacement.create({ nom: emplacementNom });

    const livre = await Livre.create({ ...livreData, auteurId: auteur.id, emplacementId: emplacement.id });
    res.status(201).json(livre);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

exports.listerLivres = async (req, res) => {
  try {
    const livres = await Livre.findAll({ include: [Auteur, Emplacement] });
    res.json(livres);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};
