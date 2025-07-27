// app/server.js
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 3000;

// Example routes
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
// });
