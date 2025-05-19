// src/controllers/lesson.controller.js
exports.getLessons = (req, res) => res.json({ message: 'GET /lessons - Get all lessons (placeholder)' });
exports.getLessonById = (req, res) => res.json({ message: `GET /lessons/${req.params.id} - Get lesson by ID (placeholder)` });
exports.createLesson = (req, res) => res.status(201).json({ message: 'POST /lessons - Create new lesson (placeholder)' });
