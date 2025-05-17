const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livre.controller');

router.post('/', livreController.creerLivre);
router.get('/', livreController.listerLivres);

module.exports = router;
