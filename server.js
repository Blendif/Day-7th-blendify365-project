const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db'); // Import MongoDB connection
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);

// Error handling middleware
const { errorHandler } = require('./middleware/errorHandler');
app.use(errorHandler);

const csurf = require('csurf');

// CSRF Protection Middleware
app.use(csurf({ cookie: true }));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Define routes
app.get('/', (req, res) => {
  res.send('Blendify365 backend is running!');
});
