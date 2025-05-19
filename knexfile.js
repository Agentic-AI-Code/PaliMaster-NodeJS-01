// knexfile.js
// Ensure environment variables are loaded.
// For Knex CLI to work, .env needs to be loaded here or variables set in the environment.
// We'll place require('dotenv').config() here, assuming .env is in the project root.
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },
  // Production configuration can be added here later
  // production: {
  //   client: 'pg',
  //   connection: {
  //     connectionString: process.env.DATABASE_URL, // Example for Heroku or similar
  //     ssl: { rejectUnauthorized: false }, // Example for SSL connections
  //   },
  //   migrations: {
  //     directory: './src/database/migrations',
  //     tableName: 'knex_migrations'
  //   },
  //   seeds: {
  //     directory: './src/database/seeds'
  //   }
  // }
};
