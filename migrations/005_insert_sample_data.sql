-- Insert sample users
INSERT INTO ecommerce.users (name, email, password) VALUES
  ('Alice Smith', 'alice@example.com', 'password123'),
  ('Bob Johnson', 'bob@example.com', 'password456');

-- Insert sample products
INSERT INTO ecommerce.products (name, description, price, stock) VALUES
  ('Laptop', 'High performance laptop', 1200.00, 10),
  ('Smartphone', 'Latest model smartphone', 800.00, 25);

-- Insert sample orders
INSERT INTO ecommerce.orders (user_id, total, status) VALUES
  (1, 1200.00, 'completed'),
  (2, 800.00, 'pending');

-- Insert sample geolocation
INSERT INTO ecommerce.geolocation (user_id, address, city, state, country, postal_code) VALUES
  (1, '123 Main St', 'New York', 'NY', 'USA', '10001'),
  (2, '456 Market St', 'San Francisco', 'CA', 'USA', '94105');
