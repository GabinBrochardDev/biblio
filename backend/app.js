require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const livreRoutes = require('./routes/livre.routes');
app.use('/api/livres', livreRoutes);

const sequelize = require('./config/db.config');
const Livre = require('./models/livre.model');
const Auteur = require('./models/auteur.model');
const Emplacement = require('./models/emplacement.model');

sequelize.sync()
  .then(() => {
    console.log('La base de données est synchronisée.');
  })
  .catch((err) => {
    console.error('Erreur de synchronisation :', err);
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
