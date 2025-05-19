// src/middlewares/errorHandler.js
const logger = require('../utils/logger');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    logger.error(err.message, { stack: err.stack });

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal ServerError';

    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Optionally include stack in dev
    });
};

module.exports = errorHandler;
