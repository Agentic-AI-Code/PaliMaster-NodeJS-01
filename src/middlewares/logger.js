// src/middlewares/logger.js
const morgan = require('morgan');
const logger = require('../utils/logger'); // Assuming a simple logger utility

// Create a stream object with a 'write' function that will be used by morgan
const stream = {
  // Use the http severity
  write: (message) => logger.http(message.trim()),
};

// Skip logging for test environment
const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env === 'test';
};

// Build the morgan middleware
// Using 'dev' format for development, 'combined' for production, or a custom format
const morganMiddleware = morgan(
  // Define format string based on environment
  // example: ':remote-addr :method :url :status :res[content-length] - :response-time ms'
  process.env.NODE_ENV === 'development' ? 'dev' : 'combined',
  { stream, skip }
);

module.exports = morganMiddleware;
