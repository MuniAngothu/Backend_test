// app/routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM ecommerce.users');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
