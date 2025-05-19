// src/app.js
const express = require('express');
require('dotenv').config(); // Ensure environment variables are loaded

const morganMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const mainApiRouter = require('./routes');
// const logger = require('./utils/logger'); // Not directly used here but could be

const app = express();

// Standard middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(morganMiddleware);

// Welcome route (optional, can be removed or kept)
app.get('/', (req, res) => {
    res.send('Welcome to PaliQuest Backend API!');
});

// API routes
app.use('/api/v1', mainApiRouter);

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
