// src/routes/lesson.routes.js
const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');

router.get('/', lessonController.getLessons);
router.post('/', lessonController.createLesson);
router.get('/:id', lessonController.getLessonById);

module.exports = router;
