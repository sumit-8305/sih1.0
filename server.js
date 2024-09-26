const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/hospital', require('./routes/hospitalRoutes'));
app.use('/api/inventory', require('./routes/inventoryRoutes'));
app.use('/api/opd', require('./routes/opdRoutes')); // Updated to match the router setup

const PORT = process.env.PORT || 5000;
// In server.js
connectDB().catch(err => console.error('Failed to connect to MongoDB:', err));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
