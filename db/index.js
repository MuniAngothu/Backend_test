// db/index.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.AWS_POSTGRE_HOST,
  port: process.env.AWS_POSTGRE_PORT,
  user: process.env.AWS_POSTGRE_USER,
  password: process.env.AWS_POSTGRE_PASSWORD,
  database: process.env.AWS_POSTGRE_DATABASE,
  ssl: {
    rejectUnauthorized: process.env.AWS_POSTGRE_SSL_REJECT_UNAUTHORIZED === 'true',
  },
});

module.exports = pool;
