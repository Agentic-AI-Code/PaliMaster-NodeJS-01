// src/routes/quiz.routes.js
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');

router.get('/', quizController.getQuizzes);
router.get('/:id', quizController.getQuizById);
router.post('/:id/submit', quizController.submitQuiz);

module.exports = router;
