// src/routes/index.js
const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const lessonRoutes = require('./lesson.routes');
const quizRoutes = require('./quiz.routes');
const dhammapadaRoutes = require('./dhammapada.routes');

router.use('/users', userRoutes);
router.use('/lessons', lessonRoutes);
router.use('/quizzes', quizRoutes);
router.use('/dhammapada', dhammapadaRoutes);

// Add a simple health check route for the API
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

module.exports = router;
