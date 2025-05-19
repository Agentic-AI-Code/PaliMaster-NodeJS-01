// src/routes/dhammapada.routes.js
const express = require('express');
const router = express.Router();
const dhammapadaController = require('../controllers/dhammapada.controller');

router.get('/', dhammapadaController.getDhammapadaVerses);
router.get('/:id', dhammapadaController.getDhammapadaVerseById);

module.exports = router;
