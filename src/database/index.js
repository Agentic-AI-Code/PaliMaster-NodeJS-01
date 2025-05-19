// src/database/index.js
const knex = require('knex');
const knexConfig = require('../../knexfile'); // Path relative to this file

// Ensure .env variables are loaded if not already.
// This is important if this file is imported and used in contexts
// where process.env hasn't been populated by a top-level require('dotenv').config()
// (e.g. running scripts directly, or certain test environments).
// For the main application (server.js), dotenv is already loaded at the top.
if (!process.env.DB_HOST) { // Check if a key variable is missing
  console.log('DB_HOST not found, loading .env variables from src/database/index.js');
  // Adjust the path to .env relative to this file if necessary.
  // If .env is in project root, and this file is src/database/index.js, path is '../../.env'
  require('dotenv').config({ path: '../../.env' });
}


const environment = process.env.NODE_ENV || 'development';

module.exports = knex(knexConfig[environment]);
