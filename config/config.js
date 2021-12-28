require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT  || 3000,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: encodeURIComponent(process.env.DB_USER),
    password: encodeURIComponent(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE
  }
}

module.exports = config;
