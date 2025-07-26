const pool = require('./db/index');

(async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Connected to AWS PostgreSQL!');

    // Fetch tables in ecommerce schema
    const res = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'ecommerce'
    `);

    if (res.rows.length === 0) {
      console.log('⚠️ No tables found in "ecommerce" schema.');
    } else {
      console.log('📋 Tables in "ecommerce" schema:');
      res.rows.forEach(row => console.log(' -', row.table_name));
    }

    client.release();
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await pool.end();
  }
})();
