// src/utils/logger.js
// Basic console logger, can be expanded later with a logging library like Winston

const getTimestamp = () => new Date().toISOString();

const log = (level, message, ...args) => {
    console.log(`[${getTimestamp()}] [${level.toUpperCase()}] ${message}`, ...args);
};

const logger = {
    error: (message, ...args) => log('error', message, ...args),
    warn: (message, ...args) => log('warn', message, ...args),
    info: (message, ...args) => log('info', message, ...args),
    http: (message, ...args) => log('http', message, ...args), // For morgan
    debug: (message, ...args) => log('debug', message, ...args),
};

module.exports = logger;
