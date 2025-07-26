require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const client = new Client({
  host: process.env.AWS_POSTGRE_HOST,
  port: process.env.AWS_POSTGRE_PORT,
  user: process.env.AWS_POSTGRE_USER,
  password: process.env.AWS_POSTGRE_PASSWORD,
  database: process.env.AWS_POSTGRE_DATABASE,
  ssl: {
    rejectUnauthorized: process.env.AWS_POSTGRE_SSL_REJECT_UNAUTHORIZED === 'true'
  }
});

async function runMigrations() {
  try {
    await client.connect();
    console.log("✅ Connected to PostgreSQL");

    const migrationDir = path.join(__dirname, 'migrations');
    const files = fs.readdirSync(migrationDir).sort();

    for (const file of files) {
      const sql = fs.readFileSync(path.join(migrationDir, file), 'utf8');
      console.log(`🔄 Running ${file}...`);
      await client.query(sql);
      console.log(`✅ ${file} applied`);
    }

  } catch (err) {
    console.error("❌ Migration error:", err.stack);
  } finally {
    await client.end();
    console.log("🔌 Connection closed");
  }
}

runMigrations();
