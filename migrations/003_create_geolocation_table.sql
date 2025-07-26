CREATE TABLE IF NOT EXISTS ecommerce.geolocation (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES ecommerce.users(id),
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  postal_code VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
