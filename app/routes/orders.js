const express = require('express');
const router = express.Router();



// Endpoint to get all orders from ecommerce.orders
const db = require('../../db');
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM ecommerce.orders');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching orders:', err);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
